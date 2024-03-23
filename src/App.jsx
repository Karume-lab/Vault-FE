import React from 'react';
import Sidebar from './Components/Sidebar'; // Importing Sidebar component
import Navbar from './Components/Navbar';
import Body from "./Components/Body";


function App() {
  return (
    <div className="flex flex-col content-between w-screen h-screen bg-customCactus-200">

      <Navbar />

      <div className=' flex flex-1 flex-row p-2 gap-2 '>
        <div className=' w-60 '>
          <Sidebar />
        </div>
        <div className='flex-1'>
          <Body />
        </div>
      </div>
    </div>
  );
}


export default App;
