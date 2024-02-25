"use client"
import React from 'react';
import anime from 'animejs/lib/anime.es.js';
import { getCookies } from "cookies-next";
import { jwtDecode } from "jwt-decode";

interface Product {
  idproduct: number;
  name: string;
  description: string;
  initalprice: number;
  category: string;
  imgproducts: { image: string }[];
  quantity: number;
}

export default function Cart() {
  const [products, setProducts] = React.useState<Product[]>([]);
  
  const token = getCookies('token');
  const decodedToken = jwtDecode(token.token);
  
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/panier/getAllcarts/${decodedToken.id}`);
      const data = await response.json();
      setProducts(data.map((product: Product) => ({ ...product, quantity: 1 })));
    }

    fetchData();
  }, []);

  function calculateSubtotal(product: Product): number {
    return product.initalprice * product.quantity;
  }

  const handleDelete = (productIdproduct: number) => {
    fetch(`http://localhost:3001/panier/deletecart/${decodedToken.id}/${productIdproduct}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) throw Error('Failed to delete');
        setProducts((products) => products.filter((product) => product.idproduct !== productIdproduct));
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteAll = () => {
    fetch(`http://localhost:3001/panier/deleteallfromcart/${decodedToken.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) throw Error('Failed to delete');
        setProducts([]);
      })
      .catch((error) => console.log(error));
  };

  const animateDeleteIcon = (button: HTMLElement, animate: boolean) => {
    if (animate) {
      anime({
        targets: button,
        rotate: '1turn',
        duration: 300,
        easing: 'easeInOutSine',
        loop: false,
      });
    } else {
      anime.set(button, { rotate: 0 });
    }
  };


  return (
    <div className="max-w-6xl mx-auto p-8 rounded-md shadow-md flex flex-col">
      <h2 className="text-3xl font-bold mb-6 text-[#3066be]">Your Cart</h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-800">Product</th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-[#3066be]">Price</th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-800">Quantity</th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-[#3066be]">Subtotal</th>
              <th className="px-20 py-3 text-left text-lg font-semibold text-gray-800">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: Product, index: number) => (
              <tr key={product.idproduct}>
                <td className="border px-6 py-4">
                  <div className="flex items-center">
                    <img
                      className="w-20 h-20 mr-4 rounded-lg"
                      src={product.imgproducts[0]?.image}
                      alt="Product Image"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                    </div>
                  </div>
                </td>
                <td className="border px-6 py-4 text-lg">{product.initalprice} $</td>
                <td className="border px-6 py-4">
                  <input
                    className="block w-20 bg-white border border-gray-300 px-4 py-2 rounded-md text-lg focus:outline-none focus:border-blue-500"
                    type="number"
                    defaultValue="1"
                    value={product.quantity}
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value);
                      setProducts((prevProducts) => {
                        const updatedProducts = [...prevProducts];
                        updatedProducts[index].quantity = newQuantity;
                        return updatedProducts;
                      });
                    }}
                  />
                </td>
                <td className="border px-6 py-4 text-lg">{calculateSubtotal(product)} $</td>
                <td className="border px-10 py-1">
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(product.idproduct)}
                    onMouseEnter={(e) => animateDeleteIcon(e.currentTarget, true)}
                    onMouseLeave={(e) => animateDeleteIcon(e.currentTarget, false)}
                 
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 mx-auto w-full md:w-1/2 border border-black rounded-md p-6">
        <h3 className="text-xl font-bold mb-2 text-center text-[#3066be]">Cart Total</h3>
        <div className="flex justify-between">
          <span className="text-lg font-semibold">Subtotal:</span>
          <span className="text-lg font-semibold">
            {products.reduce((acc, product) => acc + calculateSubtotal(product), 0)} $
          </span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-lg font-semibold">Shipping:</span>
          <span className="text-lg font-semibold text-[#3066be]">Free</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-lg font-semibold">
            {products.reduce((acc, product) => acc + calculateSubtotal(product), 0)} $
          </span>
        </div>
        <div className="mt-4 flex justify-center">
          <button className="bg-[#241C24] text-white px-14 py-3 rounded-md text-lg hover:bg-[#D0CFD0] focus:outline-none focus:bg-[#A4907C]"
           onClick={handleDeleteAll}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
