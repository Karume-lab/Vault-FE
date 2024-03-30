import React from 'react'
import { ethers } from "ethers"

const Landing = () => {

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                console.log('Connected to MetaMask with address:', address);
            } catch (error) {
                console.error('Error connecting to MetaMask:', error);
            }
        } else {
            console.error('MetaMask is not installed');
        }
    };

    return (
        <div className='bg-white w-full h-full'>


            <button onClick={connectWallet} className="bg-customCactus-400 hover:bg-customCactus-300 text-white font-bold py-2 px-4 rounded w-fit m-auto">Connect MetaMask Wallet</button>
        </div>
    )
}

export default Landing
