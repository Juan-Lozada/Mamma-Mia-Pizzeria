import React from 'react'
import { Col, Row} from 'react-bootstrap';
import Products from '../Components/Products';
import CarouselComponent from '../Components/Carousel'





const Home = (props) => {

  const {onAdd, menuCards} = props;

  return (
    <>
      <CarouselComponent />
      <Row xs={1} md={3} className="g-5 p-5 text-center">

        {menuCards.map((product) => (
          <Col key={product.id}>
            <Products product={product} onAdd={onAdd}  />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home
