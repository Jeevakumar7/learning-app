// working with array list
// usage of keys
// condetional rendering
// Handeling Events
// props vs state
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button, Card } from 'react-bootstrap';
import '../src/phone.css'
import iphone from './assets/iphone13.png'
import rog from './assets/RogPhone.jpg'
import S23 from './assets/s23.webp'
import oneplus from './assets/oneplus.jpg'
function Phone() {
    const lists=[
        {
            productimage:iphone,
            productname:"Iphone 13",
            price:80000,
            ratings:"4/5",
        },
        {
            productimage:rog,
            productname:"Rog gaming phone",
            price:50000,
            ratings:"3.5/5",
        },
        {
            productimage:oneplus,
            productname:"Oneplus 10R ",
            price:45000,
            ratings:"3.8/5",
        },
        {
            productimage:S23,
            productname:"Samsung s23",
            price:90000,
            ratings:"4.1/5",
        },
    ];
    const [cart,setCart]=useState(0)
  return (
    <>
    <div className='Cart'>
      <Badge bg="success">Cart {cart}</Badge>
      </div>
    <div className='Phone'>
      
        {lists.map((prod,idx)=>(<Cards
        idx={idx}
        prod={prod}
        cart={cart}
        setCart={setCart}
        />

     ))}    
         
      </div> 
      </>
  );
} 

export default Phone


function Cards({prod,idx,cart,setCart}){
  const [show,setShow]=useState(false)
  function addToCart(){
   setShow(!show)
   setCart(cart+1)
  }
  function removeToCart(){
    setShow(!show)
    setCart(cart-1)
  }
  return(
    <>
    <Card key={idx} style={{ width: '18rem'}}>
      <Card.Img variant="top" src={prod.productimage}/>
      <Card.Body>
        <Card.Title>{prod.productname}</Card.Title>
        <Card.Text>{prod.price}</Card.Text>
        <Card.Text>{prod.ratings}</Card.Text>

        {/* conditional rendering */}
        {!show?<Button 
        variant="primary"
        onClick={addToCart}
        // handel events
        >Add to cart</Button>
:""}
        
        {show ? <Button 
        variant="danger"
        onClick={removeToCart}
        >Remove from cart</Button>:""}
      </Card.Body>
    </Card>
    </>
  )
}