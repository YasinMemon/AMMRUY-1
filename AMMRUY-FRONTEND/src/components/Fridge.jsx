import React, { useState } from 'react';
import fridgeImage from "../assets/Services-img/fridge.png";
<<<<<<< HEAD
import { NavBar } from '../reusable components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { showPopup } from '../Redux/slices/popupSlice';

export default function FridgeRepair() {
  const bookHandler = () => {
    dispatch(showPopup());
    setTimeout(() => {
      dispatch(showPopup());
    }, 5000);
  }
  const dispatch = useDispatch();
  const status = useSelector((state) => state.popup.show);
  return (
    <>
      <div className="pop h-screen w-full fixed duration-500" style={{
        visibility: status ? 'visible' : 'hidden',
        opacity: status ? 1 : 0
      }}>
        <div className="popup absolute w-full items-center flex justify-center h-screen">
          <div className="content w-[90%] md:w-[70%] h-[95%] p-2 md:h-[50%] bg-white mx-auto rounded-xl text-black">
            <div className="para w-[95%] md:w-[80%] md:py-10 py-2 mx-auto">
              <p>Thank you for booking a service with us!</p><br />
=======
import { useDispatch, useSelector } from 'react-redux';
import { showPopup } from '../Redux/slices/popupSlice';
import { NavBar } from '../reusable components/NavBar'; // Ensure NavBar component path is correct

export default function FridgeRepair() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.popup.show);

  const [selectedServices, setSelectedServices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [serviceBooked, setServiceBooked] = useState(false);

  const services = {
    "Fridge Installation": 500,
    "Fridge Maintenance": 400,
    "Fridge Repair": 1000,
    "Thermostat Check": 300,
    "Compressor Replacement": 800
  };

  const handleServiceChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedServices(selectedOptions);
  };

  const getTotalCost = () => {
    return selectedServices.reduce((acc, service) => acc + services[service], 0);
  };

  const bookHandler = () => {
    setShowModal(true);
  };

  const confirmBooking = () => {
    setShowModal(false);
    setServiceBooked(true);
    dispatch(showPopup());
    setTimeout(() => {
      dispatch(showPopup());
      setServiceBooked(false);
    }, 5000);
  };

  const closePopup = () => {
    setServiceBooked(false);
  };

  return (
    <>
      {serviceBooked && (
        <div className="fixed inset-0 bg-lime-100 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2">
            <div className="para w-full md:w-4/5 md:py-10 py-2 mx-auto text-center">
              <p className="text-xl md:text-2xl font-bold">Thank you for booking a service with us!</p><br />
>>>>>>> pr/20
              <p>
                We have received your service request and will be in touch shortly to confirm your appointment. Our team of skilled technicians is committed to providing you with the best possible service. Please ensure that your contact details are accurate, so we can reach you easily.
              </p><br />
              <p>
                If you have any urgent questions or need immediate assistance, feel free to call us at <a className='text-blue-500' href="tel:+912345678903">2345678903</a> or email us at <a className='text-blue-500' href="mailto:sharpcarrer5@gmail.com">sharpcarrer5@gmail.com</a>. We look forward to helping you with your electronics repair needs and appreciate your trust in our services!
              </p>
<<<<<<< HEAD
            </div>
          </div>
        </div>
      </div>
      <main className="w-full h-screen">
        <NavBar />
        <section className="items-center justify-center h-full bg-gray-100">
          <div className="flex flex-col md:flex-row w-full h-full bg-white shadow-md">
            <div className="w-1/2 h-full mx-auto">
              <img className="w-full h-full object-cover object-center" src={fridgeImage} alt="Fridge Repair" />
            </div>
            <div className="md:w-1/2 w-full flex flex-col justify-center p-6">
=======
              <div className="flex justify-center mt-4">
                <button onClick={closePopup} className="bg-blue-500 text-white py-2 px-4 rounded-md">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 max-h-full overflow-y-auto">
            <h2 className="text-2xl mb-4">Choose Services</h2>
            <select multiple value={selectedServices} onChange={handleServiceChange} className="mb-4 p-2 border rounded-md bg-gray-50 w-full">
              {Object.keys(services).map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
            {selectedServices.length > 0 && (
              <div className="text-xl text-gray-800 mb-6">
                <p>Total Cost: ₹{getTotalCost()}</p>
              </div>
            )}
            <div className="flex justify-end">
              <button onClick={() => setShowModal(false)} className="bg-red-500 text-white py-2 px-4 rounded-md mr-2">Cancel</button>
              {selectedServices.length > 0 && (
                <button onClick={confirmBooking} className="bg-green-500 text-white py-2 px-4 rounded-md">Confirm</button>
              )}
            </div>
          </div>
        </div>
      )}
      <main className="w-full h-screen bg-gradient-to-r from-blue-100 to-teal-100">
        <NavBar /> {/* Include NavBar component */}
        <section className="flex items-center justify-center h-full">
          <div className="flex flex-col md:flex-row w-full h-full bg-white shadow-md rounded-lg overflow-hidden">
            <div className="w-full md:w-1/2 h-full">
              <img className="w-full h-full object-cover object-center opacity-80" src={fridgeImage} alt="Fridge Repair" />
            </div>
            <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-6">
>>>>>>> pr/20
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 text-center">Fridge Repair</h2>
              <p className="text-lg lg:text-xl text-gray-600 mb-6">
                Our technicians are dedicated to fixing your fridge issues promptly and effectively. We offer comprehensive repair services to ensure your fridge operates efficiently.
              </p>
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Services Offered:</h3>
              <ul className="list-disc list-inside text-lg lg:text-xl text-gray-600 mb-6">
                {Object.keys(services).map((service) => (
                  <li key={service}>{service} - ₹{services[service]}</li>
                ))}
              </ul>
              <div className="flex justify-center">
                <button 
<<<<<<< HEAD
                onClick={bookHandler}
                className="bg-gradient-to-r from-teal-500 to-lime-400 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-200 hover:shadow-md">
=======
                  onClick={bookHandler}
                  className="bg-gradient-to-r from-teal-500 to-lime-400 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-200 hover:shadow-md">
>>>>>>> pr/20
                  Book a Service
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
