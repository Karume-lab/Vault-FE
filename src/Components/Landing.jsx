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
        <div className='bg-white w-full h-full text-customCactus-400 px-28 '>
            <div className='flex w-full justify-between '>
                <img src={files} alt="files" className=' md:size-10 size-4/5'/>
                <div className=' place-content-center w-full'>
                    <div className='text-left'>
                        <h1 className='font-extrabold text-4xl'>LOREM IPSUM DOLOREM IST.</h1>
                        <p className='font-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, labore!</p>
                    </div>
                    <button onClick={connectWallet} className="mt-10 shadow-xl shadow-customCactus-400 bg-customCactus-400 hover:bg-customCactus-300 text-white font-bold py-2 px-4 rounded w-fit m-auto">Connect MetaMask Wallet</button>
                </div>
            </div>
            <div className=' flex items-center py-20 '>
                <div >
                    <h3 className='text-4xl mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nam reiciendis veniam harum. Illo, recusandae?</h3>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, veniam provident impedit odit officia et rerum voluptates veritatis consectetur harum labore accusamus dolorem consequuntur quam!</p>
                </div>
                <img src={security} alt="security of files" className='size-4/5' />
            </div>
            <div className='flex items-center pb-20'>
                <img src={wallet} alt="metamask wallet" className='size-4/5'/>
                <div >
                    <h3 className='text-4xl mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nam reiciendis veniam harum. Illo, recusandae?</h3>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, veniam provident impedit odit officia et rerum voluptates veritatis consectetur harum labore accusamus dolorem consequuntur quam!</p>
                </div>
            </div>
            <div className="border-b border-customCactus-400"></div>
            <div className='flex w-full justify-around  drop-shadow-2xl gap-3 py-16'>
                <div className='rounded-xl border-gray-50 shadow-xl shadow-customCactus-400 size-1/3 flex flex-col place-content-center p-2'>
                <img src={upload} alt="upload files" className='size-80'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veniam.</p>
                </div>
                <div className='rounded-xl border-gray-50 shadow-xl shadow-customCactus-400 size-1/3 flex flex-col place-content-center p-2'>
                <img src={sort} alt="sort files" className='size-80'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eaque.</p>
                </div>
                <div className='rounded-xl border-gray-50 shadow-xl shadow-customCactus-400 size-1/3 flex flex-col place-content-center p-2'>
                <img src={find} alt="find files" className='size-80'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aliquid.</p>
                </div>
            </div>
            <div className=''>
                <img src={own} alt="own your files" />
            </div>


        </div>
    )
}

export default Landing
