import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className='card card-compact w-96 bg-base-100 shadow-xl rounded-xl'>
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-[#444444] text-2xl font-bold'>
          {title}
        </h2>

        <div className='card-actions justify-between items-center text-[#FF3811]'>
          <p className=' text-lg font-semibold'>Price: ${price}</p>
          <Link to='#' className='text-xl'>
            <BsArrowRight></BsArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
