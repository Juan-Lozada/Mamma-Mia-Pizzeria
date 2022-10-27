import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function AddedToCart() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide style={{width:'30vh', height:'5vh'}} bg='success'>
                <Toast.Body>Agregado al carrito correctamente!</Toast.Body>
            </Toast>
            <Button variant='success' onClick={() => setShow(true)}>Agregar al carrito</Button>
        </>
    );
}

export default AddedToCart;