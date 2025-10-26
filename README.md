# Obsidian Vault Template

A structured Obsidian vault for personal knowledge management, content creation, project tracking, and task management.

## Overview

This vault provides an organized system for capturing, connecting, and managing your thoughts, notes, projects, and tasks using Obsidian. It features a numbered folder structure, custom views, templates, and automation scripts.

## Folder Structure

```
vault/
├── 00-Inbox/          # Quick capture zone for uncategorized notes
├── 00-Notes/          # General notes and meeting notes
├── 01-Sources/         # Books, articles, podcasts, videos
├── 02-Calendar/        # Daily and weekly notes
├── 03-Views/           # Database views (projects, tasks, content, sources)
├── 04-Content/         # Blog posts and content creation
├── 05-Drawings/        # Excalidraw diagrams
├── 06-Tasks/           # Task management
├── x/
│   ├── templates/      # Note templates
│   ├── scripts/        # Automation scripts
│   └── attachments/    # Media files
└── .obsidian/          # Obsidian configuration
```

## Key Features

### Views and Databases

The vault uses Obsidian's database plugin with custom `.base` files:

- **Projects.base**: Track work and personal projects with status and types
- **Tasks.base**: Task management with priority, due dates, and project links
- **Content Creation.base**: Manage blog posts, drafts, and published content
- **Sources.base**: Organize books, articles, videos, and podcasts
- **In Progress Notes.md**: View all inbox items

### Templates

Located in `x/templates/`, includes:

- Daily note template
- Weekly template
- Meeting template
- Project and task templates
- Source templates (book, article, podcast, video)
- People template
- Blog frontmatter template

### Automation Scripts

Custom JavaScript scripts in `x/scripts/`:

- **appendPathToDailyNote.js**: Automatically adds created notes to daily notes
- **meetingDatePrompt.js**: Prompt-based meeting date creation
- **promptAndParseNaturalLanguageDate.js**: Natural language date parsing

## Plugins

Configured plugins include:

- Dataview - Database views and queries
- Templater - Advanced templating
- QuickAdd - Quick capture and automation
- Journals - Journal integration
- Excalidraw - Diagrams and drawings
- Better Search Views - Enhanced search
- Auto Link Title - Automatic link previews
- Tasknotes - Task management
- Tag Wrangler - Tag management

## Usage

### Daily Workflow

1. Capture new ideas in **00-Inbox**
2. Move to appropriate folders as they mature
3. Use daily notes in **02-Calendar** to track activities
4. Link related notes to build a knowledge graph

### Content Creation

1. Create content in **04-Content/blogposts** or **04-Content/notes**
2. Use blog templates for consistent frontmatter
3. Track drafts and published status in the Content Creation view

### Task and Project Management

- Create tasks in **06-Tasks**
- Link tasks to projects
- Use the Tasks view to see all tasks by priority and due date
- Track projects in the Projects view

### Source Management

- Add sources (books, articles, videos) in **01-Sources**
- Use appropriate templates for each source type
- View all sources in the Sources database view

## Configuration

### Themes

- Uses the **Baseline** theme (in `.obsidian/themes/`)

### Fonts

- **SN Pro** font family configured with multiple weights

## Getting Started

1. Clone or copy this vault
2. Install the required plugins through Obsidian's Community Plugins
3. Customize templates in `x/templates/` for your needs
4. Start capturing notes in the Inbox folder
5. Create your first daily note

## Blog Post

Check out **04-Content/blogposts/Note Taking With Obsidian.md** for a detailed guide on using this vault.

## License

This is a personal template - feel free to use and modify for your own needs.

