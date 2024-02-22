"use client"
import React from 'react';

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
console.log(products);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/panier/getAllcarts/1`);
      const data = await response.json();
      setProducts(data.map((product: Product) => ({ ...product, quantity: 1 })));
    }

    fetchData();
  }, []);

  function calculateSubtotal(product: Product): number {
    return product.initalprice * product.quantity;
  }

  const handleDelete = (productIdproduct: number) => {
    fetch(`http://localhost:3001/panier/deletecart/1/${productIdproduct}`, {
      method: 'DELETE',
    }).then((response) => {
      
      if (!response.ok) throw Error('Failed to delete');
      setProducts((products) => products.filter((product) => product.idproduct !== productIdproduct));
    }).catch((error) => console.log(error));
  };

  return (
    <div className="max-w-6xl mx-auto p-8 rounded-md shadow-md flex flex-col">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-800">Product</th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-800">Price</th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-800">Quantity</th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-800">Subtotal</th>
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
                      src={product.imgproducts[0].image}
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
                <td className="border px-1 py-1 ">
                  <button className="text-red-600 hover:text-red-800" onClick={() => handleDelete(product.idproduct)}>
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
        <h3 className="text-xl font-bold mb-2 text-center">Cart Total</h3>
        <div className="flex justify-between">
          <span className="text-lg font-semibold">Subtotal:</span>
          <span className="text-lg font-semibold">
            {products.reduce((acc, product) => acc + calculateSubtotal(product), 0)} $
          </span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-lg font-semibold">Shipping:</span>
          <span className="text-lg font-semibold">Free</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-lg font-semibold">
            {products.reduce((acc, product) => acc + calculateSubtotal(product), 0)} $
          </span>
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