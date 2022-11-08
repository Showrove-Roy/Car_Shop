import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className='hero my-32'>
      <div className='hero-content flex-col lg:flex-row'>
        <div className='w-1/2 relative'>
          <img
            src={person}
            alt=''
            className='h-full w-4/5 rounded-lg shadow-2xl'
          />
          <img
            src={parts}
            alt=''
            className='rounded-lg shadow-2xl w-3/5 absolute top-1/2 right-3 border-8'
          />
        </div>
        <div className='w-1/2'>
          <p className='text-2xl font-bold text-[#FF3811] mb-5'>About Us</p>
          <h1 className='text-5xl font-bold'>
            We are qualified <br />& of experience <br />
            in this field
          </h1>
          <p className='pt-6 text-[#737373] capitalize text-base'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which don't look even slightly
            believable.
          </p>
          <p className='py-6 text-[#737373] capitalize text-base'>
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which don't look even slightly
            believable.
          </p>
          <button className='btn bg-[#FF3811] border-[#FF3811] hover:border-[#FF3811] hover:bg-transparent hover:text-[#FF3811]'>
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
