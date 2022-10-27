import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nvbar from './Components/Navbar';
import Home from './Views/Home'
import Pizza from './Views/Pizza';
import Cart from './Views/Cart'
import { useState, useEffect } from 'react';
import FooterComponent from './Components/FooterComponent';

function App() {
  
  const [cartItems, setCartItems] = useState([]);

  const [menuCards, setMenuCards] = useState([]); 

  const baseUrl = 'https://api.npoint.io/21ea5bcc688f68f5e056'

  useEffect(() => {
    const getMenuCards = async () => {
      const response = await fetch(baseUrl)
      console.log(baseUrl)
      const data = await response.json()
        .catch((error) => {
          console.log(error)
        });
      console.log(data)
      setMenuCards(data)
      console.log(menuCards)

    }
    getMenuCards();
  }, [])

  const onAdd = (product) => {
    const exist = cartItems.find((pizza) => pizza.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((pizza) => 
        
          pizza.id === product.id ? {...exist, qty: exist.qty + 1 } : pizza
        )
      ); 
    } else {
      setCartItems([...cartItems, {...product, qty: 1 }])
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((pizza) => pizza.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((pizza) => pizza.id !== product.id ))
    } else {
      setCartItems (
        cartItems.map((pizza) => 
        pizza.id === product.id ? {...exist, qty: exist.qty - 1 } : pizza
        )
      )  
    }
  }

  return (
    <>
      <BrowserRouter>
        <Nvbar />
        <Routes>
          <Route path='/' element={<Navigate to="/Menu" />} />
          <Route path='/Menu' element={<Home onAdd={onAdd} menuCards={menuCards} />} />
          <Route path='/Pizza/:pizzaID' element={ <Pizza menuCards={menuCards}/> } />
          <Route path='/Cart' element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
        </Routes>
        <FooterComponent/>
      </BrowserRouter>

    </>
  );
}

export default App;
