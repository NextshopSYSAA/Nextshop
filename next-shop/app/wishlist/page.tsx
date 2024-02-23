"use client"
import React from 'react';

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

interface Product {
  idproduct: number;
  name: string;
  description: string;
  initalprice: number;
  category: string;
  imgproducts: { id: number, image: string }[];
  quantity: number;
}

export default function Wishlist() {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3001/wishlist/getAllwishlist/1`);
        const data = await response.json();
        setProducts(data.map((product: Product) => ({ ...product })));
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    }

    fetchData();
  }, []);


  const handleDelete = (productIdproduct: number) => {
    fetch(`http://localhost:3001/wishlist/deletewishlist/1/${productIdproduct}`, {
      method: 'DELETE',
    }).then((response) => {
      
      if (!response.ok) throw Error('Failed to delete');
      setProducts((products) => products.filter((product) => product.idproduct !== productIdproduct));
    }).catch((error) => console.log(error));
  };

  const addToCart = async (productId: number) => {
    const response = await fetch(`http://localhost:3001/panier/addtoCart/1/${productId}`, {
      method: 'POST',
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 border-b-4 border-blue-500 pb-2">Your Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product: Product, index: number) => (
          <div key={product.idproduct} className="bg-white rounded-lg shadow-md overflow-hidden flex relative">
            <img
              className="w-40 h-40 mr-4 rounded-lg"
              src={product.imgproducts[0].image}
              alt="Product Image"
            />
            <div className="flex-1">
              <div className="relative">
                <div className="absolute top-0 right-0 flex space-x-2">
                  <button  className="p-2 rounded-full hover:bg-gray-200" onClick={()=>{
                    handleDelete(product.idproduct)
                  }}>
                  <TrashIcon  />
                  </button>
                </div>
                {product?.promo > 0 && (
                  <div className="absolute top-0 left-40 bg-red-500 text-white px-2 py-1 rounded-md bg-[#3066be]">
                    {product?.promo}% OFF
                  </div>
                )}
              </div>
              <br />
              <div className="p-3">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-base text-gray-600 mb-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col"> 
                    <span className="text-lg text-gray-500 line-through mb-2">${product.initalprice}</span>
                    <span className="text-lg text-[#3066be] font-semibold">${Math.floor(product.initalprice * (1 - product.promo / 100))}</span>
                  </div>
                  <button className="bg-[#d0cfd0] text-white px-3 py-2 rounded-md hover:bg-[#241c24] transition duration-300 text-sm absolute bottom-4 right-4"
                  onClick={()=>{
                    addToCart(product.idproduct)
                  }}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
