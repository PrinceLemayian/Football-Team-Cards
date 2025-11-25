# Football Team Cards: A JavaScript DOM Practice Project

A straightforward, fully functional web application designed to demonstrate and practice core **Vanilla JavaScript** concepts, specifically **DOM manipulation**, **event handling**, and **data filtering** using modern ES6+ features.

This project simulates a team roster viewer, allowing users to browse football players and categorize them instantly.

![Project Status](https://img.shields.io/badge/status-complete-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## 💡 Project Goal

The primary goal of this project was to solidify understanding of how to bridge data defined in a JavaScript object (`script.js`) with the visual structure of HTML (`index.html`) using dedicated functions and listeners. It serves as an excellent reference for:

- Creating and updating content dynamically.
- Applying inline styling based on data conditions.
- Implementing efficient filtering logic on data arrays.

---

## ✨ Detailed Features

### 1. Dynamic Card Rendering

All player cards are generated dynamically when the application loads. The information (Name, Position, etc.) is sourced entirely from a JavaScript array/object, preventing the need for manual HTML updates when team data changes.

### 2. Robust Filtering System

The application features intuitive filter controls (usually buttons or a dropdown) that allow users to select specific player positions (e.g., **Forward**, **Midfielder**, **Defender**, **Goalkeeper**). The filtering mechanism works by:

- Attaching an **Event Listener** to each filter control.
- Executing the `Array.prototype.filter()` method on the main player dataset.
- Rerendering the DOM with only the filtered subset of players.

### 3. Data Structure Management

The project uses a structured, immutable JavaScript object (often using `Object.freeze()`) to hold the team and player data, ensuring data consistency throughout the application's lifecycle.

---

## 🛠️ Technologies Used

| Technology            | Role                                                                                     |
| :-------------------- | :--------------------------------------------------------------------------------------- |
| **HTML5**             | Provides the basic document structure and container elements.                            |
| **CSS3**              | Handles all visual styling, utilizing modern **Flexbox** for the responsive card layout. |
| **JavaScript (ES6+)** | Contains all the application logic, data definition, and DOM interaction.                |

---

## 🚀 Getting Started

Follow these steps to quickly set up and run the project on your local machine.

### Prerequisites

You only need a modern web browser to view the application.

### Installation and Launch

1.  **Clone the repository to your local machine:**
    ```bash
    git clone [https://github.com/PrinceLemayian/Football-Team-Cards.git](https://github.com/PrinceLemayian/Football-Team-Cards.git)
    ```
2.  **Navigate into the project directory:**
    ```bash
    cd Football-Team-Cards
    ```
3.  **Open the application:**
    Locate the `index.html` file and open it with your web browser (e.g., Chrome, Firefox). For development, using a local server like VS Code's Live Server extension is recommended.

---

## 💡 Code Highlights and Structure

The project is structured simply for clarity:

| File             | Purpose   | Key Responsibility                                                                                                                                                                |
| :--------------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`index.html`** | Structure | Defines the page title, links to CSS and JS, and contains the main container (`#player-cards`) where content is injected.                                                         |
| **`styles.css`** | Styling   | Contains all visual rules for the overall layout and the specific design of each player card.                                                                                     |
| **`script.js`**  | Logic     | **(1) Defines the data**, **(2) Contains the rendering function** (which clears the container and builds new cards), and **(3) Manages event listeners** for the filter controls. |

## ✍️ Author

This project was developed by:

**Prince Lemayian**

- GitHub: [PrinceLemayian](https://github.com/PrinceLemayian)

## 📜 License

This project is licensed under the **MIT License**.
