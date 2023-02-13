import { Row } from 'react-bootstrap';
import Product from './Product';



const Products = ({products, onAdd}) => {


  return (

      <Row>
      
      <p>Number of Products: {products.length}</p>

      {products.map((product) => (
        
        <Product key={product.id} product={product} onAdd={onAdd} />
      ))}

     </Row>
  )
      }



export default Products











