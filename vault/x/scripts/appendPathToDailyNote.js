/**
 * Appends the copied file path to the current daily note in a bullet list format
 * under the "Notes" heading
 *
 * This script should be added as the final step in the "Create Note with Daily Link" macro
 * after the "Copy file path" command.
 */
module.exports = async (params) => {
  // Get clipboard content (the path that was just copied)
  const clipboardContent = await navigator.clipboard.readText();

  // Extract just the filename from the path (remove directory part and extension)
  const fileName = clipboardContent.split("/").pop().replace(".md", "");

  // Format as a wikilink
  const wikiLink = `[[${fileName}]]`;

  // Get today's date in YYYY-MM-DD format
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const dateString = `${year}-${month}-${day}`;

  // Path to daily note (adjust this if your daily notes are in a different location)
  const dailyNotePath = `02-Calendar/${dateString}.md`;

  // Get app instance and file system
  const app = this.app;
  const { vault } = app;

  try {
    // Check if the daily note exists
    const dailyNoteFile = vault.getAbstractFileByPath(dailyNotePath);

    if (!dailyNoteFile) {
      // If the daily note doesn't exist, notify the user
      new Notice(`Daily note not found: ${dailyNotePath}`);
      return;
    }

    // Read the content of the daily note
    const dailyNoteContent = await vault.read(dailyNoteFile);

    // Check if there's a "Notes" heading
    const notesHeadingRegex = /^(#+)\s*Captured\s*$/m;
    const notesHeadingMatch = dailyNoteContent.match(notesHeadingRegex);

    let updatedContent;

    if (notesHeadingMatch) {
      // Found the Notes heading
      const headingIndex = dailyNoteContent.indexOf(notesHeadingMatch[0]);
      const headingEndIndex = headingIndex + notesHeadingMatch[0].length;

      // Find the next line after the heading
      let insertPosition = dailyNoteContent.indexOf("\n", headingEndIndex);
      if (insertPosition === -1) {
        // If there's no newline after the heading, append at the end
        insertPosition = dailyNoteContent.length;
        updatedContent = `${dailyNoteContent}\n- ${wikiLink}`;
      } else {
        // Insert after the heading
        updatedContent =
          dailyNoteContent.substring(0, insertPosition + 1) +
          `- ${wikiLink}\n` +
          dailyNoteContent.substring(insertPosition + 1);
      }
    } else {
      // Notes heading not found, create it and add the link
      updatedContent = `${dailyNoteContent}\n\n## Captured\n- ${wikiLink}`;
    }

    // Write the updated content back to the daily note
    await vault.modify(dailyNoteFile, updatedContent);

    // Show a confirmation message
    new Notice(`Added link to daily note under Notes heading: ${wikiLink}`);
  } catch (error) {
    // Show error message if something went wrong
    console.error("Error appending link to daily note:", error);
    new Notice(`Error adding link to daily note: ${error.message}`);
  }
};
