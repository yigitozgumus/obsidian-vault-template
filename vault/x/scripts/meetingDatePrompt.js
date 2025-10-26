module.exports = async (params) => {
  // Get today's date in YYYY-MM-DD format
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const todayFormatted = `${year}-${month}-${day}`;

  // Ask user for a date, with today as default
  let userDate = await params.quickAddApi.inputPrompt(
    "Enter meeting date (YYYY-MM-DD) or leave blank for today",
    todayFormatted
  );
  
  // If user didn't enter a date, use today's date
  if (!userDate) {
    userDate = todayFormatted;
  }

  // Set date variable for the template
  params.variables["date"] = userDate;
  
  // Ask for meeting name
  const meetingName = await params.quickAddApi.inputPrompt(
    "Enter meeting name",
    ""
  );
  
  // Set Meeting Name variable for the template
  params.variables["Meeting Name"] = meetingName;
  
  // Return filename for the note
  return `${userDate} - ${meetingName}`;
}; 