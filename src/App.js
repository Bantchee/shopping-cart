import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from "./components/Home";
import Shop from "./components/Shop";
import { useState } from "react";
import menShirtImg from "./img/products/men-shirt.jpg";
import menShortsImg from "./img/products/men-shorts.jpg";
import menTankImg from "./img/products/men-tank.jpg";
import womenShirtImg from "./img/products/women-shirt.jpg";
import womenShortsImg from "./img/products/women-shorts.jpg";
import womenTankImg from "./img/products/women-tank.jpg";
import waterBottleImg from "./img/products/water-bottle.jpg";
import socksImg from "./img/products/socks.jpg";
import bagImg from "./img/products/bag.jpg";
import React from "react";
import Cart from "./components/Cart";

const App = () => {
  const [products, setProducts] = useState([
    {
      name: "Men's Shirt",
      img: menShirtImg,
      price: 22.00,
    },
    {
      name: "Men's Shorts",
      img: menShortsImg,
      price: 26.00,
    },
    {
      name: "Men's Tank",
      img: menTankImg,
      price: 28.00,
    },
    {
      name: "Men's Shirt",
      img: womenShirtImg,
      price: 30.00,
    },
    {
      name: "Men's Shorts",
      img: womenShortsImg,
      price: 40.00,
    },
    {
      name: "Men's Tank",
      img: womenTankImg,
      price: 40.00,
    },
    {
      name: "Men's Shirt",
      img: waterBottleImg,
      price: 20.00,
    },
    {
      name: "Men's Shorts",
      img: socksImg,
      price: 16.00,
    },
    {
      name: "Men's Tank",
      img: bagImg,
      price: 52.00,
    },
  ]);
  const [cartProducts, setCartProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addProductToCart = (name, img, price) => {
    //If product in cart
      // increase quantity of product by 1
    // else
      // add product to cart, set quantity to 1 {name, img, price, quantity}
  };

  const removeProductFromCart = (name) => {
    // find product by name
    // remove product from cart
    // setCartProducts
  };

  const incrementProductQuantity = (name) => {
    // find product by name
    // increase product quantity by 1
    // setCartProducts
  };

  const decrementProductQuantity = (name) => {
    // find product by name
    // decrease product quantity by 1
    // setCartProducts
  };

  return (
    <BrowserRouter>
      <Header showCart={showCart} setShowCart={setShowCart} />
      <Routes>
        <Route path="/shopping-cart" element={<Home />}/>
        <Route path="/shopping-cart/shop" element={<Shop products={products}/>}/>
      </Routes>
      {(showCart) ? <Cart products={cartProducts} setProducts={setCartProducts}/> : null}
      <Footer />
      </BrowserRouter>
  );
}

export default App;
