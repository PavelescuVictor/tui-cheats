# tui-cheats

<p align="center">
  <b> A fast, keyboard-driven terminal cheatsheet browser built with Bun + React. </b>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/runtime-bun-black?style=for-the-badge&logo=bun" />`{=html}
  <img src="https://img.shields.io/badge/language-typescript-blue?style=for-the-badge&logo=typescript" />`{=html}
  <img src="https://img.shields.io/badge/ui-terminal-informational?style=for-the-badge" />`{=html}
  <img src="https://img.shields.io/badge/status-active-success?style=for-the-badge" />`{=html}
</p>

------------------------------------------------------------------------

`tui-cheats` is a **Terminal UI (TUI)** application that lets you browse
and preview structured cheatsheets directly in your terminal.

Cheatsheets are written in **TOML**, organized by categories, and
rendered in a clean split-pane interface.

Built with:

-   ⚡ **Bun**
-   ⚛ **React**
-   🖥 Terminal UI components

------------------------------------------------------------------------

# ✨ Features

-   🔎 Searchable cheatsheet selector (debounced input)
-   👀 Live preview panel
-   📂 TOML-based cheatsheet definitions
-   🎨 Theme support via config file
-   🚀 Open a specific cheatsheet directly via CLI
-   ⌨ Fully keyboard-driven navigation

------------------------------------------------------------------------

# 🖼 Preview

> Screenshot / GIF coming soon

```{=html}
<p align="center">
  <img src="./assets/Preview/ CheatsTUI.gif" width="1080" />
</p>
```
## Interface Layout

`tui-cheats` uses a split-pane layout:

  Left Panel                   Right Panel
  ---------------------------- -------------------------------------
  Searchable cheatsheet list   Live preview of selected cheatsheet

## Navigation

-   Type to filter cheatsheets
-   ↑ / ↓ navigate list
-   ← / → switch focus between panels
-   Backspace to return

Optimized for fast, frictionless terminal workflows.

------------------------------------------------------------------------

# 📦 Installation

## Requirements

-   [Bun](https://bun.sh)

## Install dependencies

``` bash
bun install
```

------------------------------------------------------------------------

# 🚀 Running the Application

## Default Mode (Selector)

``` bash
bun run start
```

or

``` bash
bun run src/index.tsx
```

This launches the searchable selector interface.

------------------------------------------------------------------------

## Open a Specific Cheatsheet

You can directly open a cheatsheet by name (without extension):

``` bash
bun run src/index.tsx --name=git
```

or

``` bash
bun run src/index.tsx -name git
```

------------------------------------------------------------------------

# 🗂 Cheatsheet Format

Cheatsheets are stored in:

    src/config/cheatsheets/*.toml

Each file contains categorized commands.

## Example (`git.toml`)

``` toml
[basics]
"git status" = "Show working tree status"
"git log --oneline" = "Compact commit history"

[branching]
"git checkout -b my-branch" = "Create and switch to a new branch"
"git merge main" = "Merge main into current branch"
```

### Structure Rules

-   Top-level sections = Categories
-   Keys = Commands
-   Values = Descriptions

------------------------------------------------------------------------

# 🎨 Theme

Theme configuration is loaded from:

    src/config/themes/theme.toml

## Example

``` toml
primary = "#00ffcc"
background = "#0d0d0d"
text = "#ffffff"
```

Theme values control UI colors throughout the application.

------------------------------------------------------------------------

# ⚙ Configuration

> ⚙️ **To be implemented**

Future configuration support will be provided via:

    src/config/config.toml

### Planned configuration options

-   Default theme selection
-   Default cheatsheet on startup
-   Custom cheatsheet directory
-   Keybinding customization
-   Layout preferences
-   UI behavior toggles

Configuration system is planned but not yet implemented.

------------------------------------------------------------------------

# 🏗 Project Structure

    src/
     ├── index.tsx
     ├── main.tsx
     ├── components/
     ├── config/
     │   ├── cheatsheets/
     │   ├── themes/
     │   └── config.toml
     └── scripts/

------------------------------------------------------------------------

# 🛣 Roadmap Ideas

-   Fuzzy search support
-   Clipboard copy for commands
-   Built-in cheatsheet editor
-   Multiple selectable themes
-   Plugin system for external cheatsheets

------------------------------------------------------------------------

```{=html}
<p align="center">
```
Built for terminal power users ⚡
```{=html}
</p>
```
