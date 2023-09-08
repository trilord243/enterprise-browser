import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [product, setProduct] = useState({});
  const [render, setRender] = useState(false);



  const fetchProduct = async (id) => {
    try {
      const response = await axios.get(`http://192.168.1.120:6969/${id}`);
      console.log(response.data[0])
      setProduct(response.data[0]);
      setRender(true);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

  const updateQuantity = async (id, quantity) => {
    try {
      await axios.put(`http://192.168.1.120:6969/${id}`, { quantity });
      setProduct(prevState => ({ ...prevState, quantity }));
      //EB.Barcode.enable({}, myCallback);
      setRender(!render);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  }

  const myCallback = (params) => {
    console.log(params.data);
    fetchProduct(params.data);
    //EB.Barcode.disable();
  }



  if (!render) {
    EB.Barcode.enable({}, myCallback);
  } else {
    EB.Barcode.disable();
  }

  return (
    <>
      <Navbar />
      {!render && <Hero />}
      {render && (
        <div className='p-8 m-4 bg-white shadow-xl rounded-md'>
          <h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
          <p className='text-lg mb-4'>{product.description}</p>
          <div className='flex items-center space-x-4'>
            <input
              className='p-2 border rounded-md'
              type="number"
              value={product.quantity}
              onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
            />
            <button className='p-2 bg-sky-400 text-white rounded-md hover:bg-sky-500 focus:ring focus:ring-sky-200' onClick={() => updateQuantity(product.id, product.quantity)}>Update Quantity</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
