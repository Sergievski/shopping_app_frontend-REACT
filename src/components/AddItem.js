import { useState } from "react";
import { Container, Button} from 'react-bootstrap';


const AddItem = ({productId, onAdd}) => {

    const [quantity, setQuantity] = useState(1)
  

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd(productId, quantity)
        setQuantity(1)
    }       

        return (

    <Container className="form-container">

        <form className="add_to_cart" onSubmit={onSubmit}>
            <div className="form-control">
                <label> Quantity </label>
                <input type="number" 
                value={quantity} onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <Button  variant="secondary" type="submit" className="submit-btn">Save</Button>
        </form>
    </Container>
  )
}



export default AddItem

