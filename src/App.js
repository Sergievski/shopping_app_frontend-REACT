import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import AuthContext, { AuthProvider } from './context/AuthContext'
import Products from "./components/Products"
import Navbar1 from "./components/Navbar1"
import AddProduct from "./components/AddProduct"
import CartItems from "./components/CartItems"
import  LoginPage  from './components/LoginPage'
import PrivateRoutes from './components/utils/PrivateRoutes'


function App() {

    //////////////PRODUCTS ///////////////////////////

  
  // const {authTokens} = useContext(AuthContext);
  

    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddProduct, setShowAddProduct] = useState(false);
    

    const handleSearch = (searchTerm) => {
      setSearchTerm(searchTerm);
    }
    
  // show searched/all products  
  useEffect(() => { 
    const getProducts = () => {
      fetch(`https://shopping-backend-django.herokuapp.com/products/?query=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        console.log(products)
    }
    getProducts()
  }, [searchTerm])


  ////// Create a new Product
  const addProduct = async (product) => {
  
    const formData = new FormData();
    
      formData.append('name', product.name);
      formData.append('description', product.description);
      formData.append('price', product.price);
      formData.append('image', product.image);
    

    const res = await fetch('https://shopping-backend-django.herokuapp.com/products/', {
      method: 'POST',
      body: formData
  })
  
    const data = await res.json()
    setProducts([...products, data])
}

///////////////////CART-ITEMS/////////////////////CART-ITEMS//////////////////CART-ITEMS///////////////////////////

  const [cartitems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)


   // counting carts total price 
  useEffect(() => { 
    const total = cartitems.reduce((acc, item) => acc + (Number(item.product.price) * item.quantity), 0);
    setTotalPrice(total);
  }, [cartitems]);

  // show cart items
  useEffect(() => {

    const getCartItems = () => {
    
      fetch('https://shopping-backend-django.herokuapp.com/cart-items/')
      .then((response) => response.json())
      .then((data) => setCartItems(data))  
    }
      getCartItems()
      },[] )

    
    // THIS PART IS COMMENTED, CAUSE I DIDNT FIND (YET) WHY "authTokens" FAIL TO PASS PROPERLY TO DJANGO ,
    //LATER , IT WILL ALLOW ME TO SHOW FOR EVERY USER HIS OWN CART 

    // useEffect(() => {
      
    //   getCartItems()

    // }, [])


    // let getCartItems = async() => {
    //   if (authTokens) {
    //     let response = await fetch('http://localhost:8000/cart-items/',{
    //       method:'GET',
    //       headers:{
    //         'Content-Type' : 'application/json', 
    //         'Authorization' : 'Bearer ' + authTokens.access
    //       }
    //     })
    //     let data = await response.json()
    //     setCartItems(data)
    //   } else {
    //     console.error("authTokens not found")
    //   }
    // }

    

      // add product to cart 
      const addToCart = async (productId, quantity) => {  
        try {
            const response = await fetch(`https://shopping-backend-django.herokuapp.com/cart-items/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({'productId': productId, 'quantity': quantity}),
            });
            alert(`${quantity} Units Added To Cart`)
            if (!response.ok) {
                throw new Error('Failed to add to cart!');
            }
            const updatedCart = await response.json();
            setCartItems(updatedCart);
        } catch (err) {
            console.error(err);
        }
            }
      
       
      // update cart quantity         
      const updateQuantity = async (pk, quantity) => { 
        
        try {
            const response = await fetch(`https://shopping-backend-django.herokuapp.com/cart-items/${pk}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({quantity}),
            });
            
            if (!response.ok) {
              throw new Error('Failed to update !');
          }
    
          // get the updated cart items
          const updatedCart = await fetch(`https://shopping-backend-django.herokuapp.com/cart-items/`)
            .then((response) => response.json())
            .then((data) => data);
 
          setCartItems(updatedCart);
          } catch (err) {
          console.error(err);
            }
          }

      // remove/delete item from cart
      const removeItem = async (pk) => {
        await fetch(`https://shopping-backend-django.herokuapp.com/cart-items/${pk} `, {
        method: 'DELETE'
        })
      
        setCartItems(cartitems.filter((cartitem) => cartitem.id !== pk ))
      }
      

  return (

    <Router>

    <AuthProvider>

    <div className="App" >
      <Navbar1 onAdd={() => setShowAddProduct(!showAddProduct)} showAddProduct={showAddProduct} onSearch={handleSearch}/>
      {showAddProduct && <AddProduct onAdd={addProduct}/>}
      <Routes>
          <Route element={<PrivateRoutes/>} >  
            <Route path="/" element={
            <div style={{backgroundColor:"honeydew"}}>
            <Products onAdd={addToCart} products={products} />
            </div>
            }  />
        
            <Route path='/cart' element={
            <div style={{backgroundColor:"bisque"}}>
            <h2> Cart Container</h2>
            <h6> Number of Items : {cartitems.length} Total Price : {totalPrice.toFixed(2)} $  </h6>
            <CartItems cartitems = {cartitems} onRemove={removeItem} onUpdate={updateQuantity} />
          
            </div>
            } />

            <Route path="/login" element={<LoginPage/> } />
        </Route>

      </Routes>
    </div>

    </AuthProvider>

    </Router>
  );}



export default App;
