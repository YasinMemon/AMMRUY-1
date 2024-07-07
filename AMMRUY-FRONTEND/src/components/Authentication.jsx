import React, { useState } from 'react';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { Link, useFetcher, useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useSelector } from 'react-redux';

function Authentication() {

  let [login, setLogin] = useState(false);
  let [clicked, setclicked] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const loginHandler = () => {
    setLogin((prev) => !prev);
    setclicked(!clicked);
  };

  const inputHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const url = login ? '/login' : '/signup';

    try {
      const response = await axios.post(`https://ammruy-1.onrender.com/${url}`, formData);
      console.log(response.data);
  
      if (login) {
        localStorage.setItem('token', response.data.token);  
        localStorage.setItem('email',response.data.email);

        setIsLoggedIn(true);
        alert("Login Success");
        window.location.href = '/';
      } else {
        alert("Signup success");
        [isLoggedIn, setIsLoggedIn] = useState(true);
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const logoutHandler = async () => {
    try {
      await axios.post(`https://ammruy-1.onrender.com/logout`);
      localStorage.removeItem('email'); 
            
      setIsLoggedIn(false);
      alert("Logged out successfully");
       
      navigate('/');   
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const {mode} = useSelector((state) => state.darkMode);

  return (
    
    <>
      <main className='md:flex md:justify-between md:items-center md:gap-24 max-h-full'>
        <div className={`signup text-center w-[100vw] mx-auto duration-500 ${clicked ? 'translate-x-[70%]' : 'translate-x-0'}`}>
          <div className="content md:ml-72 md:w-[60vmin] mx-auto w-[80%]">
            <div className="header text-center">
              {!login ? <h1 className='font-bold text-4xl'>Create Free Account</h1> : <h1 className='font-bold text-4xl'>Login Your Account</h1>}
            </div>
            <div className="google flex justify-center items-center gap-2 bg-sky-200 rounded-full py-2 my-4">
              <span><FcGoogle /></span>
              <span className='text-black'>Continue With Google</span>
            </div>
            <div className="or flex justify-center items-center gap-1">
              <div className='w-[80%] h-[0.1rem]' style={{background: mode? 'white':'black'}}></div>
              <span className='font-bold'>OR</span>
              <div className='w-[80%] h-[0.1rem]' style={{background: mode? 'white':'black'}}></div>
            </div>
            <form onSubmit={submitHandler}>
              <div className="inputs">
                <input
                  name="email"
                  className='bg-sky-200 w-full rounded-full my-2 py-2 px-2'
                  type="email"
                  placeholder='Email'
                  value={formData.email}
                  onChange={inputHandler}
                  required
                />
                <br />
                <input
                  name="password"
                  className='bg-sky-200 w-full rounded-full my-2 py-2 px-2'
                  type="password"
                  placeholder='Password'
                  value={formData.password}
                  onChange={inputHandler}
                  required
                />
                <br />
                {!login && <input
                  name="confirmPassword"
                  className='bg-sky-200 w-full rounded-full my-2 py-2 px-2'
                  type="password"
                  placeholder='Confirm Password'
                  value={formData.confirmPassword}
                  onChange={inputHandler}
                  required
                />}
              </div>
              <div className="submit">
                <button className='BTN-color roboto-thin text-white px-8 py-2 rounded-full'>
                  {!login ? 'Sign Up' : 'Login'}
                </button>
              </div>
            </form>
            <div className="already md:hidden flex gap-1">
              <p>{!login ? 'Already have an account?' : 'Don\'t have an account?'}</p>
              <span
                onClick={loginHandler}
                className='text-blue-600'>
                {!login ? 'Login' : 'Signup'}
              </span>
            </div>
          </div>
        </div>
        <div className={`login md:block hidden login-bg text-center h-screen duration-500 ${clicked ? 'transform translate-x-[-150%]' : 'transform translate-x-0'}`}>
          <div className='text-left'>
            <Link to="/" className="block w-max ml-auto text-white">
              {/* <XMarkIcon className="h-10 text-black/50 right-0 hover:text-black/80 md:text-white/50 md:hover:text-white/80" strokeWidth={1.5} /> */}
              X
            </Link>
          </div>
          <div className="content w-[40vw] my-[50%] ">
            <div className="header mx-auto text-white">

              <h1
                className='text-4xl font-bold'>
                {!login ? 'Already a member?' : 'New Here?'}
              </h1>
              <p className='mx-auto text-xl my-2 roboto-thin w-[80%]'>
                {!login ? 'If you already have an account, just sign in. We have missed you!' : 'Signup and use our service'}
              </p>
              <button
                onClick={loginHandler}
                className='btn-txt roboto-thin bg-white px-8 py-2 rounded-full '>
                {!login ? 'Login' : 'Signup'}
              </button>
            </div>
            
          </div>
        </div>
      </main>
    </>
  );
}

export default Authentication;
