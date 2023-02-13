import { useState, useContext } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';


const Navbar1 = ({ onAdd, showAddProduct, onSearch }) => {

  let {user, logoutUser} = useContext(AuthContext) 
  
  const [searchTerm, setSearchTerm] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };


  return (
    <div>
      <Navbar bg="white" expand="lg" style={{ backgroundColor: 'grey' }}>
        <Container fluid>
          { user ? (<h5> Hello {user.username} <button onClick={logoutUser} > Logout  </button> </h5> ) :
          (<Navbar.Brand href="/login"> Login  </Navbar.Brand>) }
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/"> Home    |</Nav.Link>
              <Nav.Link onClick={onAdd} showAddProduct={showAddProduct}>
                {showAddProduct ? 'Close Form     |' : 'Create Product     |'}
              </Nav.Link>
              
              <Nav.Link href="/cart">|    Cart    |</Nav.Link>
              
            </Nav>
            
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search (Brand) "
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button type="submit" variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;

























// import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

// const Navbar1 = ({onAdd, showAddProduct}) => {
//   return (
//     <div >

// <Navbar bg="white" expand="lg" style={{backgroundColor:"grey"}}>
//       <Container fluid>
//         <Navbar.Brand href="/">Shopping Site</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px'}}
//             navbarScroll
//           >
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link onClick={onAdd} showAddProduct={showAddProduct}>{showAddProduct ? "Close Form" : "Create Product"}</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Archive</NavDropdown.Item>
//               <NavDropdown.Item href="/cart">
//                 Cart
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="/">
//                 Home
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="/cart" >
//              Cart
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex" >
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>




//     </div>
//   )
// }

// export default Navbar1