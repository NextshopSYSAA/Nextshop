'use client'
import React from 'react';

interface Product {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  initalprice: number;
  category: string;
}

export default function Cart() {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [quantity, setQuantity] = React.useState<number>(1);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/panier/getAllcarts/1`);
      const data = await response.json();
      setProducts(data);
    }

    fetchData();
  }, []);

  console.log(products);

  return (
    <div className="max-w-6xl mx-auto p-8  rounded-md shadow-md flex flex-col">
      <br />
      <br />
      <h2 className="text-3xl font-bold mb-6 ">Your Cart</h2>
      <br />
      <br />
      <br />

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-6 py-10 text-left text-lg font-semibold text-gray-800">Product</th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-800">Price</th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-800">Quantity</th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-800">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: Product) => {
              return (
                <tr>
                  <td className="border px-6 py-4">
                    <div className="flex items-center justify-center">
                      <img
                        className="w-20 h-20 mr-40 rounded-lg fixed"
                        src="https://img.freepik.com/photos-gratuite/equilibrage-du-smartphone-fond-rose_23-2150271746.jpg?size=338&ext=jpg&ga=GA1.1.1788068356.1706832000&semt=sph"
                        alt="Product Image"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-center">{product.name}</h3>
                        <p className="text-gray-600 text-sm mt-2 text-center">{product.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="border px-6 py-4 text-lg">{product.initalprice} $</td>
                  <td className="border px-6 py-4">
                    <input
                      className="block w-20 bg-white border border-gray-300 px-4 py-2 rounded-md text-lg focus:outline-none focus:border-blue-500"
                      type="number"
                      defaultValue="1"
                    />
                  </td>
                  <td className="border px-6 py-4 text-lg">$40.00</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 mx-auto w-full md:w-1/2 border border-black rounded-md p-6">
        <h3 className="text-xl font-bold mb-2 text-center">Cart Total</h3>
        <div className="flex justify-between">
          <span className="text-lg font-semibold">Subtotal:</span>
          <span className="text-lg font-semibold">$70.00</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-lg font-semibold">Shipping:</span>
          <span className="text-lg font-semibold">Free</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-lg font-semibold">$100.00</span>
        </div>
        <div className="mt-4 flex justify-center">
          <button className="bg-[#8D7B68] text-white px-14 py-3 rounded-md text-lg hover:bg-[#A4907C] focus:outline-none focus:bg-[#A4907C]">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}