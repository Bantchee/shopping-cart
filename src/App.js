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
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop products={products}/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
