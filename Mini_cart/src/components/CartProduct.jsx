import React, { useContext } from "react";
import { storeContext } from "../storeContext/StoreContext";

function CartProduct({ product }) {
  const { removeFromCart } = useContext(storeContext);
  return (
    <div className="w-3xl h-40 flex bg-white relative">
      <span className="w-40 h-full inline-block p-6">
        <img
          src={product.image}
          alt="product"
          className="w-full h-full object-contain object-center"
        />
      </span>
      <div className=" h-auto p-6 space-y-1 ">
        <span className="w-full flex flex-col gap-2 text-black">
          <h1>{product.title} </h1>
          <p className="text-sm text-gray-600">${product.price}</p>
        </span>

        <span className="flex w-full justify-end">
          <button
            className="border-none bg-red-700 text-white px-4 py-2 rounded-2xl absolute bottom-6 right-6 cursor-pointer active:text-black"
            onClick={() => {
              removeFromCart(product);
            }}
          >
            Delete
          </button>
        </span>
      </div>
    </div>
  );
}

export default CartProduct;
