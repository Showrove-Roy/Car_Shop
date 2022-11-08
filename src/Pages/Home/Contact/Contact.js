import React from "react";
import time_Date from "../../../assets/icons/contact_icon/time-date.svg";
import phone from "../../../assets/icons/contact_icon/phone.svg";
import location from "../../../assets/icons/contact_icon/location.svg";

const Contact = () => {
  return (
    <div className='flex justify-evenly bg-[#151515] my-32 py-24 rounded-xl text-white'>
      <div className='flex'>
        <img src={time_Date} alt='' />
        <div className='ml-3'>
          <p>We are open monday-friday</p>
          <p className='text-2xl font-bold'>7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className='flex'>
        <img src={phone} alt='' />
        <div className='ml-3'>
          <p>Have a question?</p>
          <p className='text-2xl font-bold'>+2546 251 2658</p>
        </div>
      </div>
      <div className='flex'>
        <img src={location} alt='' />
        <div className='ml-3'>
          <p>Need a repair? our address</p>
          <p className='text-2xl font-bold'>Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
