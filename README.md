This is a React application that implements a simple e-commerce website, where users can browse and purchase products.

Technologies Used
React
React Router
Bootstrap
Context API for authentication
Axios for making API calls
Features
Product listing
Product search
Adding products to cart
Authentication with JWT Tokens
Updating quantity of cart items
Components
Products
This component is responsible for displaying the products available on the website. The product list is filtered based on the search term entered by the user.

Navbar1
This component is responsible for rendering the navigation bar for the website.

AddProduct
This component allows the admin to add new products to the website.

CartItems
This component displays the items in the user's cart and their respective quantities.

LoginPage
This component is responsible for rendering the login page.

PrivateRoutes
This component implements authentication for the private routes of the website, such as adding products and viewing cart items.

API Endpoints
The API used in this project is hosted locally on http://localhost:8000/.

The API has the following endpoints:

GET /products/ - Returns a list of all products.
POST /products/ - Adds a new product to the database.
GET /cart-items/ - Returns a list of all cart items for the authenticated user.
POST /cart-items/ - Adds an item to the authenticated user's cart.
PUT /cart-items/{pk} - Updates the quantity of the cart item with the given primary key (pk).
Deployment
The application can be deployed on a web server, such as GitHub Pages or Heroku, for example. Simply build the React application using npm run build and serve the build directory.

Usage
Clone the repository to your local machine
Navigate to the project directory
Install the required dependencies using npm install
Start the development server using npm start
Visit http://localhost:3000/ in your web browser to view the application.
