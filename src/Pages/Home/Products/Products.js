import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className='text-center my-5'>
        <p className='text-2xl font-bold text-[#FF3811]'>Popular Products</p>
        <h2 className='text-5xl font-bold py-5 text-[#151515]'>
          Browse Our Products
        </h2>
        <p className='capitalize text-[#737373] w-1/2 mx-auto'>
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>

      <div className='my-12 w-1/3 mx-auto flex justify-center'>
        <button className='btn btn-outline font-semibold text-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811]'>
          More Products
        </button>
      </div>
    </div>
  );
};

export default Products;
