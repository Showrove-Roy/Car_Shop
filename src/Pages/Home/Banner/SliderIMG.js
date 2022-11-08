import React from "react";
import "./Banner.css";
const SliderIMG = ({ slider }) => {
  const { image, prev, id, next } = slider;
  return (
    <div
      id={`slide${id}`}
      className='carousel-item relative w-full max-h-screen overflow-hidden'>
      <div className='carouselImage'>
        <img src={image} alt='' className='w-full' />
      </div>
      <div className='absolute flex justify-start transform -translate-y-1/2 left-24 top-1/3'>
        <h2 className='text-6xl text-white font-bold'>
          Affordable
          <br />
          Price For Car
          <br />
          Servicing
        </h2>
      </div>
      <div className='absolute flex justify-start transform -translate-y-1/2 left-24 top-1/2 mt-10'>
        <p className=' text-white capitalize text-lg'>
          There are many variations of passages of available, but <br /> the
          majority have suffered alteration in some form
        </p>
      </div>
      <div className='absolute flex justify-start transform -translate-y-1/2 left-24 bottom-1/4'>
        <button className='btn btn-outline text-base font-semibold mr-5 text-white bg-[#FF3811] border-[#FF3811] '>
          Discover More
        </button>
        <button className='btn btn-outline text-base font-semibold text-white'>
          Latest Project
        </button>
      </div>
      <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
        <a
          href={`#slide${prev}`}
          className='btn btn-circle border-2  border-[#FF3811] mr-5'>
          ❮
        </a>
        <a
          href={`#slide${next}`}
          className='btn btn-circle border-2  border-[#FF3811]'>
          ❯
        </a>
      </div>
    </div>
  );
};

export default SliderIMG;
