import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ErrImg from "../../../assets/images/404Error.svg";

const Err404 = () => {
  return (
    <div>
      <Header></Header>
      <div className='w-1/2 mx-auto my-16 md:my-20 lg:my-24'>
        <img src={ErrImg} alt='' />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Err404;
