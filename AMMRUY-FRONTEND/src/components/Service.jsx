import React from 'react'
import { Link } from 'react-router-dom';

function Service() {
  return (
    <div className='service flex flex-col md:flex-row justify-between items-center gap-4 min-h-screen mx-4 '>
      <div className="leftSide h-[400px] w-full md:w-[508px] m-auto">
        <img
          className='h-full w-full rounded-xl'
          src="https://electronicservices.co.in/wp-content/uploads/2023/01/istockphoto-1180607321-612x612-1.jpg" />
      </div>
      <div className="rightSide m-auto font-serif">
        <h1 className='text-2xl md:text-4xl my-4'>Explore Our <span className='btn-txt'>Services</span></h1>
        <p className='w-60 md:w-96 text-sm md:text-xl'>We offer top-notch repair services for a wide range of home appliances, including washing machines, refrigerators, air conditioners, and LED TVs, ensuring reliable and efficient solutions for all your needs.</p>
        <div className="explore_section text-center my-4">
          <Link to='/services'>
            <button className='BTN-color px-8 py-2 text-white font-bold rounded-full hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100'>
              Explore Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Service
