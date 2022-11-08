import React from "react";

const SliderIMG = ({ slider }) => {
  const { image, prev, id, next } = slider;
  return (
    <div id={`slide${id}`} className='carousel-item relative w-full'>
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
      <div className='absolute flex justify-start transform -translate-y-1/2 left-24 top-2/4'>
        <p className=' text-white capitalize text-lg'>
          There are many variations of passages of available, but <br /> the
          majority have suffered alteration in some form
        </p>
      </div>
      <div className='absolute flex justify-start transform -translate-y-1/2 left-24 bottom-1/3'>
        <button className='btn btn-outline text-base font-semibold mr-5 text-white bg-[#FF3811] border-[#FF3811] '>
          Discover More
        </button>
        <button className='btn btn-outline text-base font-semibold text-white'>
          Latest Project
        </button>
      </div>
      <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5'>
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