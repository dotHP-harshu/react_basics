import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { storeContext } from "../storeContext/StoreContext";
import CartProduct from "../components/CartProduct";

function Cart() {
  const { productsInCart, totalPrice } = useContext(storeContext);
  return (
    <div className="bg-zinc-900 text-white min-h-dvh">
      <Navbar />

      <div className="flex justify-center items-center w-full flex-col gap-6">
        <div className="w-3xl h-10 flex justify-between items-center">
          <h1 className="text-lg font-bold ">Your Cart</h1>
          <p className="text-base font-semibold"> Total: ${totalPrice}</p>
        </div>

        {productsInCart.length === 0 ? (
          <p>Cart is Empty.</p>
        ) : (
          productsInCart.map((product, i) => (
            <CartProduct key={i} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
