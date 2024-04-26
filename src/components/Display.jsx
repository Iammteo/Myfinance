import  { useState } from 'react';
import Container from './Container'; // Importing  the first component
import Dashboard from '../pages/Dashboard'; // Importing  the second component

function Display() {
  const [showComponent1, setShowComponent1] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);

  const handleToggleComponent1 = () => {
    setShowComponent1(true);
    setShowComponent2(false);
  };

  const handleToggleComponent2 = () => {
    setShowComponent1(false);
    setShowComponent2(true);
  };

  return (
    <>
      <button className='text-white bg-blue-500' onClick={handleToggleComponent1}>
      component 1   
      </button>
      <button className='text-white bg-green-500' onClick={handleToggleComponent2}>
       Component 2
      </button>
      
      {showComponent1 && (<Container/>)} 
      {showComponent2 && (<Dashboard/>) } 
   </>
  );
}

export default Display;
