import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const getProducts = async () => {
      let data = await fetch("https://fakestoreapi.com/products?limit=12");
      let jsonData = await data.json();
      setProducts(jsonData);
    };
    getProducts();
  }, []);

  return (
    <div className="bg-zinc-900 text-white min-h-dvh">
      <Navbar />
      <div className="flex flex-wrap gap-4 p-6 items-center justify-center">
        {products ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h1>loading</h1>
        )}
      </div>
    </div>
  );
}

export default Home;
