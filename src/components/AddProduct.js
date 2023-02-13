import { useState } from "react";
import { Container, Button} from 'react-bootstrap';


const AddProduct = ({onAdd}) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
   

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please add product name')
            return
        }

        onAdd({name, description, price, image})
        
        setName('')
        setDescription('')
        setPrice('')
        setImage('')
        

    }


  return (

    <Container className="form-container">

        <form className="add-form" onSubmit={onSubmit}>


            <div className="form-control">
                <label> Name </label>
                <input type="text" placeholder="Add Name" 
                value={name} onChange={(e) => setName(e.target.value)}
                />

            </div>

            <div className="form-control">
                <label> Description </label>
                <input type="text" placeholder="Add Description" 
                value={description} onChange={(e) => setDescription(e.target.value)}
                />

            </div>

            <div className="form-control">
                <label> Price </label>
                <input type="text" placeholder="Add Price" 
                value={price} onChange={(e) => setPrice(e.target.value)}
                />

            </div>


            <div className="form-control">
                <label>Upload Image</label>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            </div>


            <Button variant="secondary" type="submit" className="submit-btn">Save</Button>


        </form>

    </Container>

    
  )
}



export default AddProduct