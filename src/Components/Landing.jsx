import React from 'react'
import { ethers } from "ethers"
import files from "../assets/img/files.png"
import security from "../assets/img/security.png"
import wallet from "../assets/img/wallet.png"
import upload from "../assets/img/upload.png";
import find from "../assets/img/find.png";
import sort from "../assets/img/sort.png"
import own from "../assets/img/own.png"

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
    /*
    HERO SECTION:
        IMAGE
        TAGLINE
        CTA -> CONNECT METAMASK WALLET
    ABOUT VAULT
    FEATURES
    SERVICES
    */

    return (
        <div className='bg-white w-full h-full'>
            <div>
                <img src={files} alt="files" />
                <div>
                    
                    <button onClick={connectWallet} className="bg-customCactus-400 hover:bg-customCactus-300 text-white font-bold py-2 px-4 rounded w-fit m-auto">Connect MetaMask Wallet</button>
                </div>
            </div>
            <div>
                <img src={security} alt="security of files" />

            </div>
            <div>
                <img src={wallet} alt="" />
            </div>
            <div className='flex'>
                <img src={upload} alt="upload files" />
                <img src={sort} alt="sort files" />
                <img src={find} alt="find files" />
            </div>
            <div>
                <img src={own} alt="own your files" />
            </div>


        </div>
    )
}

export default Landing
