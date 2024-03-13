# ERP System with React

Welcome to the Simplified ERP System with React! This project aims to provide a user-friendly interface for managing basic business operations efficiently. It utilizes React for building modular components and managing application state.

**Assignment Details**
<details>
  <summary>Overview</summary>
    
  ### Dashboard

  - Display a summary of key metrics or features.
  - Include links or buttons for quick navigation to the Products and Orders management pages.

  ### Products Management

  - Present a list of products with details such as name, category, price, and stock quantity, using mock data.
  - Enable functionalities to add, edit, and delete products.

  ### Orders Management

  - Show a list of orders, including details like order ID, customer name, order date, and status, using mock data.
  - (Optional) Allow viewing of order details, updating the order status, and deletion of orders.

  ### Orders Calendar View (Optional)

  - Implement a calendar view that displays orders on their expected delivery dates.
  - Provide the ability to click on a date to view all orders due for delivery that day.

  ## Technology Stack

  - **React**: Front-end library for building user interfaces.
  - **React Router**: For implementing navigation within the application.
  - **CSS**: For styling the components.
</details>

<details>
  <summary>Objectives</summary>

  - Develop a user-friendly interface for managing key aspects of a business.       
  - Utilize React for building modular components and managing application state.
  - Implement navigation between different sections of the ERP system using React Router.
  - Create a responsive design suitable for both desktop and mobile devices.
</details>


## Submission

Hosted on GitHub: [ERP System React](https://github.com/Jagadesh-Ronanki/je-entnt-erp)
Deployed on Vercel: [ERP System React Live](https://je-entnt-erp.vercel.app/)

## Project Overview

The system consists of the following pages:

1. **Dashboard**: Provides an overview of key metrics or features.
2. **Products Management**: Allows for the management of product listings.
3. **Orders Management**: Facilitates viewing and handling orders.

Additionally, a feature is implemented in orders page:

- **Orders Calendar View**: A calendar interface displaying orders based on their expected delivery dates.

## Documentation

### Setup Instructions

Clone the repository: 
```bash
git clone <repository-url>
```
Navigate to the project directory: 
```bash
cd erp-system-react
```
Install dependencies: 
```bash
npm install
```
Start the development server: 
```bash
npm start
```
Frontend application is accessed by visiting
```
http://localhost:3000
```

### Interacting with the Website

- Upon running the application, you'll land on the dashboard displaying key metrics.
  ![Dashboard](/public/screeenshots/dashboard-dark.png)

  - Navigate between the pages from the nav-links on top or from navbar 
  - Switch between the light/dark themes from the toggle icon on top right corner
  ![Light-Theme](/public/screeenshots/theme.png)
  
- In Products Management, you can add, edit, and delete products.
  - Product Management Page
  ![Products page](/public/screeenshots/products.png)

  - Add Product
  ![Add Product](/public/screeenshots/add-product.png)

  - Edit Product
  ![Edit Product](/public/screeenshots/edit-product.png)

- In Orders Management, you can view orders and optionally update their status or delete them.
  - Order Management Page
    ![Orders page](/public/screeenshots/orders.png)

  - Add Order
  ![Add Order](/public/screeenshots/add-order.png)

  - Edit Order
  ![Edit Order](/public/screeenshots/edit-order.png)

  - Use the status filter present at the side of search bar. This filters out the orders based on the status
  ![Filter](/public/screeenshots/filter-status.png)

  - The Orders Calendar View can be accessed through a switch labeled *calender view*. You are able to choose a date and the orders are displayed on the screen according to the delivery date
  ![Calendar View](/public/screeenshots/calendar-view.png)
  

- Can use search to filter the products & orders
  ![Search](/public/screeenshots/search.png)
- Toggle the columns to view in the table
  ![View](/public/screeenshots/toggle-cols.png)

## Responsive design

Some of the mobile screen screenshots

![mobile home](/public/screeenshots/mobile-view.png)
![mobile calendar](/public/screeenshots/mobile-calender.png)

---

Tech stack
- React (js)
- Tailwindcss
- shaadcn components