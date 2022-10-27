import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'
import '../Css/pizza.css'



export default function Pizza(props) {

  const { menuCards } = props;

  const [pizza, setPizza] = useState([])
  const [ingredients, setIngredients] = useState([])

  const { pizzaID } = useParams();

  const pizzaDetails = () => {
    let pizzaSpecs = menuCards.find(pizza => pizza.id === pizzaID)

    if (pizzaSpecs !== undefined) {
      setPizza(pizzaSpecs || [])
      console.log(pizza)
      setIngredients(pizzaSpecs.ingredients)
      console.log(ingredients || [])
    }
  };

  useEffect(() => {
    pizzaDetails()
  }, [menuCards])



  return (
    <Container className='justify-content-center align-center p-5'> 
      <Row className='p-5 m-auto '>
        <Col>
          <div class="product__photo">
            <div class="photo-container">
              <div class="photo-main">
                <img src={pizza.img} alt={pizza.id} />
              </div>
            </div>
          </div>
        </Col>
        <Col className='text-center p-2'>
          <div class="product__info">
            <div class="title" className='text-dark'>
              <h1>{pizza.name}</h1>
            </div>
            <div class="price">
              $ <span>{pizza.price}</span>
            </div>
            <div class="description">
              <h1 className='p-3 text-dark'>Ingredientes</h1>
              <ul>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>



  )
}
