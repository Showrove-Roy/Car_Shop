import React from "react";
import { Link } from "react-router-dom";
import loginImage from "../../../assets/images/login/login.svg";
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const SignUp = () => {
  const loginSubmitHandel = (event) => {
    event.preventDefault();
  };
  return (
    <div className='hero-content flex-col lg:flex-row mb-10'>
      <div className='text-center lg:text-left w-1/2'>
        <img src={loginImage} alt='' className='w-3/5 mx-auto' />
      </div>
      <div className='w-1/2'>
        <div className='card max-w-sm border-2 rounded-lg bg-base-100 mx-auto'>
          <h1 className='text-5xl font-semibold text-center text-[#444444] mt-8'>
            Sign Up
          </h1>
          <form onSubmit={loginSubmitHandel} className='card-body pt-0 pb-3'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                placeholder='name'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='text'
                placeholder='email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='text'
                placeholder='password'
                className='input input-bordered'
              />
            </div>
            <div className='form-control mt-5'>
              <button
                type='submit'
                className='btn font-semibold  bg-[#FF3811] border-[#FF3811] hover:border-[#FF3811] hover:bg-transparent hover:text-[#FF3811] ease-in-out duration-500'>
                Sign Up
              </button>
            </div>
            <p className='text-center text-[#444444] text-lg font-medium'>
              Or Sign Up with
            </p>
            <div className='flex justify-evenly'>
              <span className='h-10 w-10 text-[#FF3811] bg-[#eaeaed] rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:border-2 border-[#FF3811] ease-linear duration-200 '>
                <FaFacebook></FaFacebook>
              </span>
              <span className='h-10 w-10 text-[#FF3811] bg-[#eaeaed] rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:border-2 border-[#FF3811] ease-linear duration-200 '>
                <FaGoogle></FaGoogle>
              </span>
              <span className='h-10 w-10 text-[#FF3811] bg-[#eaeaed] rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:border-2 border-[#FF3811] ease-linear duration-200 '>
                <FaLinkedinIn></FaLinkedinIn>
              </span>
            </div>
            <p className='text-center text-[#737373] text-lg mt-5 mb-0'>
              Already have an account?{" "}
              <Link to='/login' className='font-semibold text-[#FF3811]'>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
