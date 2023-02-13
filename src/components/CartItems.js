import { Row } from 'react-bootstrap';

import CartItem from './CartItem';

const CartItems = ({cartitems, onUpdate, onRemove}) => {

 

  return (

    <Row>

    {cartitems.map((cartitem) => (

      <CartItem key={cartitem.id} cartitem={cartitem} onUpdate={onUpdate} onRemove={onRemove}  />
      
    ))}
    
   </Row>

  )}

export default CartItems

///////////////////////////////////////////////////////////



    