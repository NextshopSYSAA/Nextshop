import React from "react";
import Hero from "../../components/hero";
import Sales from "../../components/sales";
import MyComponent from "../../components/categories";
import Product from "../../components/product";
import New from "../../components/new";
import Over from "../../components/over";
const First = () => {
  return (
    <div>
      <Hero/>
        <Sales/>
        <MyComponent/>  
        <Product/>
        <New/>
        <Over/>
    </div>
    
  );
};

export default First;
