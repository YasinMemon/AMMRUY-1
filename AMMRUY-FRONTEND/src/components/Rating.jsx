import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactStars from 'react-rating-stars-component';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Rating = () => {
  const [ratings, setRatings] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [newRating, setNewRating] = useState(0);

  useEffect(() => {
    fetchRatings();
  }, []);

  const fetchRatings = async () => {
    try {
      const response = await axios.get('https://ammruy-1.onrender.com/ratings');
      setRatings(response.data);
    } catch (error) {
      console.error('Error fetching ratings:', error);
    }
  };

  const handleRatingChange = (newRating) => {
    setNewRating(newRating);
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const submitRating = async () => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
         
          return alert("Please Login First to Give Rating")
        }

      await axios.post('https://ammruy-1.onrender.com/ratings', { service: selectedService, rating: newRating },{
        headers: {
            Authorization: `Bearer ${token}`
          }
      });
      fetchRatings();
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  const settings = {
    infinite: ratings.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <FaArrowRight className="text-blue-500 absolute right-0 top-1/2 transform -translate-y-1/2" />,
    prevArrow: <FaArrowLeft className="text-blue-500 absolute left-0 top-1/2 transform -translate-y-1/2" />,
    dots: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white-100">
      <h1 className="text-5xl font-bold mb-6 text-center">Rate Our Services</h1>
      <select
        value={selectedService}
        onChange={handleServiceChange}
        className="px-4 py-2 mb-4 border border-gray-300 rounded-md bg-gradient-to-tr from-green-gradient from-30% to-dark-green-gradient text-white"
      >
        <option value="" className='text-black'>Select a Service</option>
        <option value="AC Repair"className='text-black'>AC Repair</option>
        <option value="Fridge Repair"className='text-black'>Fridge Repair</option>
        <option value="Microwave Repair"className='text-black'>Microwave Repair</option>
        <option value="RO Repair"className='text-black'>RO Repair</option>
        <option value="TV Repair"className='text-black'>TV Repair</option>
        <option value="Washing Machine Repair"className='text-black'>Washing Machine Repair</option>
      </select>
      <ReactStars
        count={5}
        onChange={handleRatingChange}
        size={24}
        activeColor="#ffd700"
        className="mb-4"
      />
      <button
        onClick={submitRating}
        className="BTN-color px-4 py-2 bg-gradient-to-tr from-green-gradient from-30% to-dark-green-gradient text-white rounded-md shadow hover:scale-105 focus:outline-none    "
      >
        Submit Rating
      </button>

      <h2 className="text-3xl font-bold mt-8 mb-4">Ratings</h2>

      <div className="w-full max-w-5xl">
        {ratings.length > 3 ? (
          <Slider {...settings} className="w-full">
            {ratings.map((rating) => (
              <div key={rating._id} className="p-4 border border-gray-300 rounded-lg bg-gradient-to-tr from-green-gradient from-30% to-dark-green-gradient text-center  transition-transform duration-300 hover:scale-105 sm:w-64 md:w-1/2 lg:w-1/3 h-30">
                <h3 className="text-xl font-semibold text-white">{rating.service}</h3>
                <div className="mt-2 flex justify-center items-center">
                  <ReactStars
                    count={5}
                    value={rating.rating}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                    className="mx-auto"
                  />
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="w-full flex justify-center">
            {ratings.map((rating) => (
              <div key={rating._id} className="p-4 border border-gray-300 rounded-lg bg-gradient-to-tr from-green-gradient from-30% to-dark-green-gradient text-center transition-transform duration-300 hover:scale-105 mx-2 sm:w-64 md:w-1/2 lg:w-1/3 h-30">
                <h3 className="text-xl font-semibold text-white">{rating.service}</h3>
                <div className="mt-2 flex justify-center items-center">
                  <ReactStars
                    count={5}
                    value={rating.rating}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                    className="mx-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Rating;
