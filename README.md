React Frontend Project

This project is a frontend application built with React and Bootstrap, that communicates with a Django backend. It provides a shopping interface where users can view products, add products to their cart, and manage their cart items.

Getting Started
Before running the application, ensure that you have a running backend API developed in Django.

To start the application:

Install dependencies: run npm install
Start the application: run npm start
The application will run on http://localhost:3000/.

Dependencies: 

react
react-router-dom
bootstrap
react-bootstrap
context-api

Components : 

Navbar1.js
This component represents the navigation bar of the application. It provides links to the shopping page, add product page, and login page.

Products.js
This component displays all products available in the store. It also provides a search bar that allows users to search for specific products.

AddProduct.js
This component allows users to add new products to the store. It takes in the product name, description, price, and an image of the product.

CartItems.js
This component displays all the items in the user's cart. It allows users to update the quantity of an item or remove an item from the cart.

LoginPage.js
This component allows users to log in to the application.

PrivateRoutes.js
This component restricts access to some routes to only authenticated users.

Context
The application uses the React Context API to manage authentication. The AuthContext provides the state and actions necessary to manage user authentication. The AuthProvider wraps the application to make the AuthContext available throughout the application.

API
The application communicates with a Django backend API. The API provides endpoints for retrieving and adding products, retrieving and adding cart items, and user authentication.

Acknowledgments : 

OpenAI
React Documentation
Bootstrap



