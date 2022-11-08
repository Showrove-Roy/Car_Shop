import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <div className='text-center'>
        <p className='text-2xl font-bold text-[#FF3811]'>Service</p>
        <h2 className='text-5xl font-bold py-5 text-[#151515]'>
          Our Service Area
        </h2>
        <p className='capitalize text-[#737373] w-1/2 mx-auto'>
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-3'>
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>

      <div className='my-12 w-1/3 mx-auto flex justify-center'>
        <button className='btn btn-outline font-semibold text-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811]'>
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
