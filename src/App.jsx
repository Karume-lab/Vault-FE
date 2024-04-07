import React, { useEffect, useState } from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import UploadModal from './Components/UploadModal';
import MainContent from './Components/MainContent';
import { ethers } from "ethers"
import abi from "./abi/Vault.json"
import { useSnackbar } from 'notistack';
import Landing from './Components/Landing';

const App = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [toggleFileUploadModal, setToggleFileUploadModal] = useState(false);
  const [toggleShareModal, setToggleShareModal] = useState(false);
  const [files, setFiles] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const [active, setActive] = useState(1);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
    const contractABI = abi.abi;

    const loadProvider = async () => {
      let address;
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        const signer = provider.getSigner();
        try {
          address = await signer.getAddress();

        } catch (error) {
          console.error("Connect MetaMask wallet", error);
        }
        setAccount(address);
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setContract(contract);
        setProvider(provider);
      } else {
        enqueueSnackbar('Metamask is not installed', { variant: 'error' });
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, [enqueueSnackbar]);

  return (
    <div>
      <div className="flex flex-col w-screen h-screen bg-customCactus-200">
        <Navbar account={account} />
        {account ?
          <div className='flex flex-1 flex-row p-2 gap-2 overflow-auto'>
            <div className='w-60'>
              <Sidebar provider={provider} files={files} setFiles={setFiles} account={account} setAccount={setAccount} contract={contract} toggleFileUploadModal={toggleFileUploadModal} setToggleFileUploadModal={setToggleFileUploadModal} active={active} setActive={setActive} toggleShareModal={toggleShareModal} setToggleShareModal={setToggleShareModal} />
            </div>
            <div className='flex-1 relative overflow-auto'>
              <UploadModal toggleFileUploadModal={toggleFileUploadModal} setToggleFileUploadModal={setToggleFileUploadModal} account={account} contract={contract} provider={provider} />
              <MainContent files={files} setFiles={setFiles} active={active} contract={contract} account={account} />
            </div>
          </div>
          :
          <Landing />
        }
      </div>
    </div>
  );
}


export default App;
