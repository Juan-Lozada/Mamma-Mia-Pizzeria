import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap';
import '../Css/cart.css'

export default function Cart(props) {

  const { cartItems, onAdd, onRemove } = props;

  const pizzaPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalPrice = pizzaPrice;

  return (
    <div className='d-flex flex-column text-center p-5'>
      <h2 className='pb-5'>ORDEN</h2>
      <div >{cartItems.length === 0 && <div className='empty d-flex flex-column justify-content-center'>Cart is empty</div>} </div>
      <Row xs={3} md={4} className="g-4 p-3">
        {cartItems.map((item) => (
          <Col>
            <Card key={item.id}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <div className='d-flex flex-row justify-content-between'>
                  <Button variant='success' className='px-3' onClick={() => onAdd(item)} >+</Button>
                  <Button variant='danger' className='px-3' onClick={() => onRemove(item)} >-</Button>
                </div>
                <div>
                  <strong>{item.qty} x ${item.price.toFixed(2)}</strong>
                </div>
              </Card.Body>
            </Card>
            </Col>
        ))}
          </Row>
      {
            cartItems.length !== 0 && (
              <>
                <div>
                  <div><strong>Total Price</strong></div>
                  <div><strong>${totalPrice.toFixed(2)}</strong></div>
                </div>
              </>
            )
          }
    </div>
  )
}
