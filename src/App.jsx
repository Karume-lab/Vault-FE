import React from 'react';
import Sidebar from './Components/Sidebar'; // Importing Sidebar component
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="flex flex-col content-between w-screen h-screen">
      
         <Navbar />
      
      <div className=' flex flex-1 p-2 '>
        <div className=' flex flex-1 '>
        <Sidebar />
        </div>
        <div></div>
      </div>
    </div>
  );
}


export default App;
