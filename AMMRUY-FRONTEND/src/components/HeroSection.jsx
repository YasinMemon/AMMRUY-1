import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import ac from '../assets/Services-img/ac.png'

const HeroSection = () => {
  // Constants for styles and text sequences
  const heroImageSrc = {ac};
  const textSequences = [
    'We provide AC Repair Service',
    1000,
    'We provide Refrigerator Service',
    1000,
    'We provide Washing Machine Service',
    1000,
    'We provide LED Service',
    1000
  ];

  return (
    <section className="hero-content flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
      <div className="hero-content-left h-[400px] w-full md:w-[508px] m-auto">
        <img
          className='w-full h-full object-cover rounded-xl'
          src={ac}
          alt="Appliance Repair Services"
        />
      </div>
      <div className="hero-content-right w-full md:w-[32rem] p-4 text-center md:text-left text-xl leading-normal">
        <div className="font-serif">

        <h2 className='py-2'>Efficient and Effective</h2>
        <TypeAnimation
          sequence={textSequences}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block', minHeight: '3em' }}
          repeat={Infinity}
          />
          </div>
        <div className="mt-1">
          <Link to='/services'>
          <button className="BTN-color px-8 py-2 text-white font-bold rounded-full hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">Enquire Now</button>
          </Link>
        </div>
        <div className="trustedCustomers my-4 font-bold">
          <CountUp start={0} end={160526} />&nbsp;
          <span>+</span><br />
          <span>Trusted Customers</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
