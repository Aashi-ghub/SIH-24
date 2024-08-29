import { useState } from 'react';
import Navbar from './navbar';
import Hero from './hero';
import WhatUget from './whatUget';
import SignUp from './signup';
import './App.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [usersCount, setUsersCount] = useState(420); // Dummy number for users registered
  const [mentorsCount, setMentorsCount] = useState(100); // Dummy number for mentors available
  const [companiesCount, setCompaniesCount] = useState(69); // Dummy number for companies connected

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar onSignUpClick={handleButtonClick} />
      <div className='absolute top-0 w-full -z-10'> 
        <img src="bg.svg" alt="Background" />
      </div>
      <div>
        <br />
      <Hero usersCount={usersCount} mentorsCount={mentorsCount} companiesCount={companiesCount} />
        <br />
      <SignUp isOpen={isPopupOpen} onClose={closePopup}/>
        <br />
      <WhatUget/>
      </div>
    </div>
  );
}

export default App;
