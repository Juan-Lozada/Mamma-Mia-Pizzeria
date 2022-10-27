import React from 'react'
import { Card, CardGroup, Button, Toast } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Products(props) {

    const [pizzaInfo, setPizzaInfo] = useState('')
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const { product, onAdd } = props;

    const verMas = (pizzaInfo) => {
        console.log(pizzaInfo)
        navigate(`/pizza/${pizzaInfo}`)

    }


    return (
        <CardGroup>
            <Card className='menuCard text-light' style={{ backgroundColor: '#0B4619' }}>
                <Card.Img variant="top" src={product.img}  className='p-2' />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide className='mx-auto mb-3' style={{ width: '30vh', height: '5vh' }} bg='success'>
                        <Toast.Body>Agregado al carrito correctamente!</Toast.Body>
                    </Toast>
                    <div className='d-flex flex-row justify-content-between'>
                        <Button variant='light' onClick={() => (setPizzaInfo(product.id), verMas(product.id))}>Ver más</Button>
                        <Button variant='success' onClick={() => { onAdd(product); setShow(true) }} >Agregar al carrito</Button>
                        {/* <AddedToCart className='p-3' variant='light' onClick={() => onAdd(product) }/> */}
                    </div>

                </Card.Body>
            </Card>
        </CardGroup>
    )
}
