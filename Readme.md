# Decolonising Development Literature Review Tool

## Project Description

The **Publication Manager** is a web-based interactive tool designed to visualize and manage academic and policy literature related to the concept of "Decolonising Development." This application provides a dynamic platform for researchers, practitioners, or anyone interested in this discourse to explore and analyze publications based on their conceptual positioning along defined axes.

### Key Features:

* **Conceptual Axis Visualization:** Publications are mapped onto three interactive conceptual axes (X, Y, Z), each representing a continuum relevant to the decolonisation discourse:
    * **X-Axis:** Reform (negative) ↔ Transformation (positive)
    * **Y-Axis:** Collective (negative) ↔ Individual (positive)
    * **Z-Axis:** Western (negative) ↔ Global South (positive)
* **Publication Management:**
    * **Add New Publications:** Easily input new publication details including author, short title, year, and their precise coordinates on the X, Y, and Z axes.
* **Detailed Axis Information:** Clicking on a publication's dot on any axis reveals an expandable information box below that axis, providing:
    * The relevant **citation** or excerpt from the publication that informs its placement on that axis.
    * An **interpretive positioning** explaining the reasoning behind its numerical score on the axis.
* **Filtering Capabilities:**
    * **Filter by Year:** Use a slider to narrow down publications based on their publication year.
    * **Filter by Type:** Selectively display publications from specific categories: "NGOs/Civil Society," "Governments/Policy Statements," and "Academia."
* **Sorting Options:** Organize the publication list by "Author," "Short Title," or "Year" in ascending or descending order.
* **Data Import/Export:**
    * **Import CSV:** Load publication data from a structured CSV file, with built-in conflict resolution for duplicate entries.
    * **Export CSV:** Download the current dataset as a CSV file for backup or further analysis.
* **Dynamic UI:** The application features a collapsable control panel for a more focused viewing experience.
* **User Feedback:** Provides transient messages for successful operations or errors.

This tool aims to offer a qualitative and quantitative overview of the "Decolonising Development" literature, enabling users to identify trends, gaps, and diverse perspectives within the field.

---

## Project Structure

The application is built using standard web technologies (HTML, CSS, JavaScript) and follows a modular architecture for better organization and maintainability.

APRI Decolonizing Development LR Tool/
├── index.html                  # The main web page (HTML structure)
├── src/                        # Contains all JavaScript modules
│   ├── main.js                 # Application entry point, state manager, and orchestrator
│   ├── data.js                 # Manages core application data (publications) and constants
│   ├── domElements.js          # Centralized helper for retrieving DOM element references
│   ├── ui.js                   # Handles rendering and interaction for the publication list and input forms
│   ├── axesVisualization.js    # Manages the drawing and interactivity of the conceptual axes
│   ├── filtersAndSorting.js    # Implements logic for filtering and sorting publications
│   ├── csvHandler.js           # Encapsulates all CSV import/export functionality
│   └── utils.js                # Contains general utility functions (e.g., messages, data formatting)
└── css/
└── style.css               # All custom styling for the application's visual appearance



## File Breakdown

### `index.html`
* **Role:** Defines the overall **structure** of the web application.
* **Contents:**
    * HTML elements for the entire user interface: controls panel, main display area, axes visualization, publication list, and hidden popups.
    * Links to `css/style.css` for styling.
    * Includes `<script type="module" src="src/main.js"></script>` as the entry point for the JavaScript application, enabling modern ES Module syntax.
    * Contains a small inline `<style>` block for specific `body.controls-collapsed` state styling, which dynamically hides/shows the control panel.
    * Crucially, filter checkboxes (`filterNgoCheckbox`, `filterGovernmentCheckbox`, `filterAcademiaCheckbox`) are `checked` by default here, ensuring all publication types are displayed on initial load.

### `css/style.css`
* **Role:** Provides all the **visual presentation** rules for the application.
* **Contents:**
    * Defines layouts, colors, fonts, spacing, shadows, and transitions for all UI components.
    * Includes specific styles for the unique dot shapes (triangle, diamond, circle) representing publication categories on the axes, and their respective color schemes.

### `src/main.js`
* **Role:** The **core orchestrator** and application startup file. It manages the overall application state and coordinates interactions between different modules.
* **Contents:**
    * **Imports:** Brings in functionalities and data from nearly all other `src/` modules.
    * **Global State:** Declares and manages key application state variables (`editingDiamondIndex`, `selectedPopupIndex`, `filterYearMax`, `UI` element references).
    * **`init()` function:** The application's primary initialization logic, executed when the DOM is ready. It gathers UI elements, sets up initial states, renders initial data, and attaches all event listeners.
    * **`attachEventListeners()` function:** Centralizes all event handler attachments (`click`, `input`, `change`, `mouseover`, `mouseout`) for user interactions. It passes necessary data and *callbacks* to other modules, promoting loose coupling.
    * **`handleAddEditSubmit()`:** Contains the logic for adding new publications or updating existing ones, directly interacting with the core data via `data.js`.
    * **`isPublicationTypeVisible()`:** A helper function that determines whether a given publication should be visible based on the currently selected category filters.
    * **`scrollToAndExpandListItem()` & `toggleControlsPanel()`:** Utility functions for specific UI interactions.

### `src/data.js`
* **Role:** Acts as the **single source of truth for the application's data** and fundamental constants.
* **Contents:**
    * **`export let diamondsData`:** The main array holding all publication objects. Declared with `let` to allow reassignment.
    * **`export const` constants:** Defines numerical limits for axes (`AXIS_MIN`, `AXIS_MAX`), calculation helper (`AXIS_RANGE`), and default structures (`DEFAULT_AXIS_INFO`).
    * **`normalizeDiamondsData()`:** An internal helper to ensure all publication objects have a consistent data structure, preventing runtime errors.
    * **`export function updateDiamondsData(newData)`:** A controlled method for other modules to update the central `diamondsData` array. This is crucial for ensuring all live bindings to `diamondsData` across different modules reflect the latest data.

### `src/domElements.js`
* **Role:** Centralizes all interactions with the Document Object Model (DOM) to **retrieve references to HTML elements**.
* **Contents:**
    * **`export function getDOMElements()`:** A single function that uses methods like `document.getElementById()` and `document.querySelector()` to find and return an object containing all essential UI element references.

### `src/ui.js`
* **Role:** Handles the **rendering and interactive behavior of the publication list items** and the **main publication input form**.
* **Contents:**
    * **`export function updatePublicationList()`:** Renders or re-renders the entire `<ol>` list of publications displayed on the page.
    * **`createPublicationListItem()` (private helper):** Builds the complex HTML structure for a single publication entry in the list, including its details, textareas for axis info, category checkboxes, and action buttons (Edit, Delete). It attaches event listeners that trigger *callbacks* provided by `main.js`.
    * **`export function handleAxisInfoInput(event, diamondsData)`:** Updates the `citation` and `positioning` data within a publication object based on user input in the text areas.
    * **`export function populateFormForEdit(UI, diamond)`:** Fills the main add/edit form with a selected publication's data for editing.
    * **`export function resetForm(UI)`:** Clears all fields in the main add/edit form.
    * **`export function handleCategoryCheckboxChange(event, diamondsData, UI)`:** Manages the individual category checkboxes within a list item, updating the data and syncing associated filter checkboxes in the control panel.

### `src/axesVisualization.js`
* **Role:** Manages the **visual representation and interactivity of publications on the X, Y, and Z conceptual axes**.
* **Contents:**
    * **`export function redrawAxesDots()`:** Clears and re-renders all active publication "dots" on the axis bars, applying correct positioning, shapes, and colors.
    * **`createAxisDot()` (private helper):** Creates a single HTML `<div>` element representing a publication's position on one axis, applying its specific category shape and color. It attaches a click listener that triggers a callback provided by `main.js`.
    * **`export function handleAxisDotClick()`:** The primary function triggered when an axis dot is clicked. It expands the corresponding axis information popup, populates it with detailed citation and interpretive text, highlights the dot(s), and updates the global `selectedPopupIndex` state in `main.js` via a callback.
    * **`export function closeOpenPopup()`:** Collapses (hides) any currently open axis information popup.
    * **`export function highlightDotsForIndex()`, `export function unhighlightDotsForIndex()`, `export function unhighlightAllDots()`:** Functions for managing the visual highlighting effects of dots on the axes.
    * **`export function updateAxesSelectedItemText()`:** Updates the descriptive text below the axes, indicating which publication is currently hovered over or selected.
    * **Helper Functions:** Includes mathematical functions (`calculatePercent`) and style-related functions (`getShapeClassForCategory`, `getCategoryString`).

### `src/filtersAndSorting.js`
* **Role:** Implements the **filtering and sorting logic** for the publication data.
* **Contents:**
    * **`export function applyFilters()`:** Filters the visible publications based on the selected year range and active category checkboxes. It updates the visibility of list items and triggers `redrawAxesDots` to update the visualization.
    * **`export function sortPublications()`:** Sorts the central `diamondsData` array based on user-selected criteria (author, title, or year; ascending or descending). After sorting, it triggers a callback to `main.js` to re-render the publication list in the new order.
    * **`export function toggleSortOptions()`:** Toggles the visibility of the sorting options bar.

### `src/csvHandler.js`
* **Role:** Provides all functionality related to **importing and exporting publication data via CSV files**.
* **Contents:**
    * **`export function handleImportClick()`:** Initiates the file selection dialog for CSV import.
    * **`export function handleExportClick()`:** Generates a CSV string from the current `diamondsData` and triggers its download.
    * **`export function handleFileInputChange()`:** Reads the content of the selected CSV file.
    * **`export function processImportedData()`:** Parses the raw CSV data into structured JavaScript objects. It includes logic to detect and resolve conflicts when imported publications match existing ones, prompting the user for a decision. It then updates the `diamondsData` through `data.js`.
    * **`export function arePublicationsDifferent()`:** A helper used during import to compare publications for actual data differences, beyond just identifying fields.
    * **Private Helper Functions:** Lower-level functions for CSV parsing/escaping (handling commas, quotes, newlines within fields).

### `src/utils.js`
* **Role:** A collection of **general-purpose utility functions** that are useful across multiple modules but don't belong to a specific UI component or data model.
* **Contents:**
    * **`export function showMessage(msg, duration, isError)`:** Displays transient, styled messages (e.g., success, error) to the user.
    * **`export function getDescriptiveTerm(value, axis)`:** Converts a numerical coordinate value on an axis into a more human-readable descriptive term (e.g., a value of 8 on the X-axis becomes "strongly transformative").

---
