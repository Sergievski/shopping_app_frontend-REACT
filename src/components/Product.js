import { Card, Button } from 'react-bootstrap';
import AddItem from './AddItem';
import { useState } from "react"



const Product = ({product, onAdd}) => {

  const [showAddItem, setShowAddItem] = useState(false);

  return (
    
    
    <Card key={product.id} style={{ width: '18rem', backgroundColor:"aliceblue" }}>
    <Card.Img variant="top" src={"https://shopping-backend-django.herokuapp.com/"+product.image} />
    <Card.Body>
      <Card.Title> {product.name}  </Card.Title>
      <Card.Text>
        Price : {product.price}$
      </Card.Text>
      <Button variant="primary" onClick={() => {setShowAddItem(!showAddItem)}}>{showAddItem ? "Close" : "Add To Cart"}</Button>
      {showAddItem && <AddItem productId={product.id} onAdd={onAdd} />}

      
    </Card.Body>
  </Card>
  

)
  }

export default Product


//////////////////////

