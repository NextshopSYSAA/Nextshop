"use client"
import React, { useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

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
  promo: number;
}

export default function Wishlist() {
  const [products, setProducts] = React.useState<Product[]>([]);
  const promoRefs = useRef<Array<HTMLDivElement | null>>([]);
  const priceRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
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

  useEffect(() => {
    promoRefs.current.forEach((promoRef, index) => {
      if (promoRef) {
        anime({
          targets: promoRef,
          scale: [1, 1.2, 1], // Animate from original size to 120% and back to original size
          duration: 1000,
          easing: 'easeInOutQuad',
          delay: index * 100,
          loop: true,
        });
      }
    });

    priceRefs.current.forEach((priceRef, index) => {
      if (priceRef) {
        anime({
          targets: priceRef,
          translateX: ['10%', '100%'], // Animate translateX to move 20% to the right
          scale: [1, 1.4, 1], // Animate scale to 120% and back to original size
          duration: 1000,
          easing: 'easeInOutQuad',
          delay: index * 100,
          loop: true,
        });
      }
    });
  }, [products]);

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product: Product, index: number) => (
          <div key={product.idproduct} className="bg-white rounded-lg ring-1 ring-gray-300 overflow-hidden relative">
            {product?.promo > 0 && (
              <div className="bg-red-500 text-white px-2 py-1 rounded-t-md bg-[#3066be] absolute top-0 left-0" ref={(ref) => promoRefs.current[index] = ref}>
                {product?.promo}% OFF
              </div>
            )}
            <img
              className="w-full h-60 w-60  object-cover rounded-t-lg"
              src={product.imgproducts[0]?.image}
              alt="Product Image"
            />
            <div className="p-4 flex flex-col justify-center">
              <button className="p-2 rounded-full hover:bg-gray-200 absolute top-2 right-2" onClick={() => handleDelete(product.idproduct)}>
                <TrashIcon />
              </button>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">{product.name}</h2>
              <p className="text-base text-gray-600 mb-4 text-center">{product.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-lg text-gray-500 line-through mb-2">${product.initalprice}</span>
                  <span className="text-lg text-[#3066be] font-semibold" ref={(ref) => priceRefs.current[index] = ref}>
                    ${Math.floor(product.initalprice * (1 - product?.promo / 100))}
                  </span>
                </div>
                <button className="bg-[#d0cfd0] text-white px-3 py-2 rounded-md hover:bg-[#241c24] transition duration-300 text-sm" onClick={() => addToCart(product.idproduct)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
