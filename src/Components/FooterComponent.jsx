import React from 'react'
import { Container } from 'react-bootstrap'
import Home from '../Views/Home'
import {NavLink} from 'react-router-dom'

export default function FooterComponent() {
    return (
        <>
            <footer className="page-footer font-small  pt-2 bg-light text-light fixed-bottom ">
                <Container className='d-flex flex-column justify-content-center text-dark'>
                    <div className="container-fluid text-center text-md-left">
                        <div className="row">
                            <div className="col-md-12 mt-md-0 mt-3">
                                <h5 className="text-uppercase">Mamma Mia! Pizzeria </h5>
                            </div>

                            <hr className="clearfix w-100 d-md-none pb-0" />
                        </div>
                    </div>

                    <div className="footer-copyright text-center py-3">© Mamma Mia! pizzeria 2022 Copyright:
                    <NavLink to='/Menu' style={{ textDecoration: 'none' }}>
                        www.mammamiapizzeria.com
                    </NavLink>
                    </div>
                </Container>
            </footer>
        </>
    )
}
