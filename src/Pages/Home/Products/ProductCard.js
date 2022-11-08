import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const ProductCard = ({ product }) => {
  const { title, price, rating, product_URL } = product;
  const ratingCount = () => {
    if (rating === 5) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
        </>
      );
    } else if (rating >= 4.5) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarHalf></BsStarHalf>
        </>
      );
    } else if (rating >= 4) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStar></BsStar>
        </>
      );
    }
  };
  return (
    <div className='card bg-base-100 shadow-xl border-2 rounded-xl cursor-pointer hover:scale-105 ease-in duration-300'>
      <figure className='px-10 pt-10 bg-[#F3F3F3] h-2/3 mx-5 mt-5 rounded-xl'>
        <img src={product_URL} alt={title} className='rounded-xl' />
      </figure>
      <div className='card-body items-center text-center p-2'>
        <p className='text-[#FF912C] flex'>{ratingCount()}</p>
        <h2 className='card-title text-[#444444] text-xl font-bold'>{title}</h2>
        <p className='text-[#FF3811] text-lg font-semibold'>${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
