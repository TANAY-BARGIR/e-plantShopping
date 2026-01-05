# Paradise Nursery Shopping Application

## Overview
Welcome to the Paradise Nursery Shopping Application, a React-based e-commerce platform designed for plant enthusiasts. This application allows users to browse a variety of house plants, organized by categories, and manage a shopping cart for their purchases. The project demonstrates the use of React for building dynamic user interfaces and Redux Toolkit for efficient state management.

## Features
* **Landing Page:** A welcoming interface with a company description and a "Get Started" button to enter the shop.
* **Product Listing:**
    * Displays 6 unique plants per category (e.g., Air Purifying, Aromatic, Medicinal).
    * Each product card includes an image, name, description, cost, and an "Add to Cart" button.
    * "Add to Cart" buttons become disabled and change label to "Added to Cart" once clicked.
* **Shopping Cart:**
    * Displays selected items with their image, name, unit price, and total cost.
    * Allows users to increase, decrease, or delete items.
    * Shows the total cart amount for all items.
    * Includes a "Continue Shopping" button to return to the product list.
    * Includes a placeholder "Checkout" button.
* **Navigation:** A responsive navbar linking to the Landing Page, Product Listing, and Cart, featuring a dynamic cart icon count.

## Technologies Used
* **React:** For building the user interface.
* **Redux Toolkit:** For global state management (cart operations).
* **CSS:** For styling components and responsive design.
* **Vite:** For fast development and build tooling.

## Installation & Setup
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)<your-username>/e-plantShopping.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd e-plantShopping
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the application:**
    ```bash
    npm run dev
    ```

## Project Structure
* `src/store.js`: Configures the Redux store.
* `src/CartSlice.jsx`: Manages cart state (add, remove, update quantity).
* `src/ProductList.jsx`: Displays plant categories and handles adding items to the cart.
* `src/CartItem.jsx`: Renders the shopping cart view and item management.
* `src/App.jsx`: Main entry point containing the landing page and routing logic.

## Future Enhancements
* Implementation of a functional Checkout process.
* Backend integration for persistent data storage.

## License
This project is created as part of the IBM Developer Skills Network coursework.
