import UpdateItemQuantity from './UpdateItemQuantity';
import { Card, Button } from 'react-bootstrap';
import { useState } from "react"


const CartItem = ({cartitem, onRemove, onUpdate}) => {

  const [showUpdateQuantity, setShowUpdateQuantity] = useState(false);

  return (
    
            <Card key={cartitem.id} style={{ width: '18rem', backgroundColor:"lightgray"}} >
        <Card.Img variant="top" src={"https://shopping-backend-django.herokuapp.com/"+cartitem.product.image} />
        <Card.Body>
          <Card.Title> {cartitem.product.name} </Card.Title>
          <Card.Text>
            {cartitem.product.price} $ <br/>
            Quantity : {cartitem.quantity}
          </Card.Text>
         <Button variant="light" onClick={() => {setShowUpdateQuantity(!showUpdateQuantity)}}> {showUpdateQuantity ? "Close" : "Update Quantity"} </Button>
          {showUpdateQuantity && <UpdateItemQuantity pk={cartitem.id} onUpdate={onUpdate} />}
          {!showUpdateQuantity &&<Button variant="info" onClick={()=>onRemove(cartitem.id)} > Remove </Button>}
          
        </Card.Body>
      </Card>
    
  )
}

export default CartItem