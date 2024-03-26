import React, {useState} from 'react';
import Sidebar from './Components/Sidebar'; // Importing Sidebar component
import Navbar from './Components/Navbar';
import Body from "./Components/Body";
import UploadModal from './Components/UploadModal';

function App() {
  const [toggleFileUploadModal, setToggleFileUploadModal] = useState(false);
  const [toggleShareModal, setToggleShareModal] = useState(false);
   
  return (
    <div>
      <div className="flex flex-col content-between w-screen h-screen bg-customCactus-200">
        <Navbar />
        <div className=' flex flex-1 flex-row p-2 gap-2 '>
          <div className=' w-60 '>
            <Sidebar toggleFileUploadModal={toggleFileUploadModal} setToggleFileUploadModal={setToggleFileUploadModal} toggleShareModal={toggleShareModal} setToggleShareModal={setToggleShareModal} />
          </div>
          <div className='flex-1 relative'>
            <Body />
            <UploadModal toggleFileUploadModal={toggleFileUploadModal} setToggleFileUploadModal={setToggleFileUploadModal} />

          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
