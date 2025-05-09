import React, { useContext } from "react";
import { storeContext } from "../storeContext/StoreContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(storeContext);

  return (
    <div className="w-80 h-96 bg-white text-black p-4 relative">
      <div className="w-full h-44 overflow-hidded">
        <img
          src={product.image}
          alt="image"
          className="w-full h-full object-center object-contain"
        />
      </div>
      <h1 className="mb-4 text-lg font-semibold mt-2 min-h-fit">
        {product.title}
      </h1>
      <p className="text-base font-medium">{product.price}</p>
      <button
        onClick={() => {
          addToCart(product);
        }}
        className="text-white text-base border-none outline-none rounded-2xl bg-rose-500 px-4 py-2 cursor-pointer mt-4 absolute bottom-6 right-6 cursor-pointer active:text-black"
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
