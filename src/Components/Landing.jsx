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
        <div className='bg-white w-full h-full text-customCactus-400 '>
            <div className='flex w-full justify-between px-28  '>
                <img src={files} alt="files" className=' md:size-10 size-4/5' />
                <div className=' place-content-center w-full'>
                    <div className='text-left'>
                        <h1 className='font-extrabold text-4xl'>VAULT - the future of file hosting</h1>
                        <p>Decentralized file storage powered by blockchain technology. Connect your wallet address today!</p>
                    </div>

                    <button onClick={connectWallet} className="mt-10 shadow-xl shadow- bg-customCactus-400 hover:bg-customCactus-300 text-white font-bold py-2 px-4 rounded w-fit m-auto">Connect MetaMask Wallet</button>
                </div>
            </div>
            <section id='services'>
                <h2 className='text-center font-bold text-xl'>SERVICES</h2>
                <div className=' flex items-center py-20 px-28 '>
                    <div className='text-left'>
                        <h3 className='text-4xl mb-3'>Security Matters</h3>
                        <p className='text-xl'>Fully enjoy the robust security measures implemented in VAULT, ensuring that your data remains safe and protected. With decentralized storage, you become the sole owner of your data, free from centralized control.</p>
                    </div>
                    <img src={security} alt="security of files" className='size-4/5' />
                </div>
                <div className='flex items-center pb-20 px-28 '>
                    <img src={wallet} alt="metamask wallet" className='size-4/5' />
                    <div>
                        <h3 className='text-4xl mb-3'>Seamless Integration with Your MetaMask Wallet Address</h3>
                        <p className='text-xl'>Experience effortless integration with your MetaMask wallet address. Connect your wallet address using MetaMask with ease - a simple one-tap operation. Enjoy the convenience of securely linking your wallet to access the full range of features.</p>
                    </div>

                </div>
            </section>

            <section id='features'>
                <h2 className='text-center font-bold text-xl'>FEATURES</h2>
                <div className='flex w-full justify-around  drop-shadow-2xl py-16 px-28 '>
                    <div className='flex justify-around'>
                        <div className='flex justify-around'>
                            <div className='rounded-xl mx-2 border-gray-50 shadow-xl shadow-customCactus-400 w-1/3 flex flex-col place-content-center p-2'>
                                <img src={upload} alt="upload files" className='size-80' />
                                <p className='text-sm'>Discover the seamless feature of uploading files to the blockchain via Pinata and IPFS, provided by Vault. With Pinata, a state-of-the-art decentralized file storage system, and IPFS (InterPlanetary File System), a peer-to-peer protocol for storing and sharing hypermedia, your files are securely stored and accessible from anywhere in the world. Experience the effortless integration of blockchain technology with traditional file storage, providing unparalleled security and accessibility for your data.</p>
                            </div>
                            <div className='rounded-xl mx-2 border-gray-50 shadow-xl shadow-customCactus-400 w-1/3 flex flex-col place-content-center p-2'>
                                <img src={sort} alt="sort files" className='size-80' />
                                <p className='text-sm'>Experience the convenience of efficient file organization with Vault's advanced tagging system. With intuitive categorization options, you can effortlessly organize your files based on various tags such as education, health, finance, business, family, and more. Say goodbye to cluttered file systems and embrace the ease of finding and accessing your files with Vault's robust tagging feature.</p>
                            </div>
                            <div className='rounded-xl mx-2 border-gray-50 shadow-xl shadow-customCactus-400 w-1/3 flex flex-col place-content-center p-2'>
                                <img src={find} alt="find files" className='size-80' />
                                <p className='text-sm'>Discover the power of seamless file retrieval with Vault's advanced search and filtering capabilities. Effortlessly locate your files using tailored search queries and intuitive filtering options. Whether you're searching by file name, tag, or upload date, Vault empowers you to swiftly find the files you need, when you need them. Say hello to enhanced productivity and efficiency with Vault's comprehensive search and filtering features.</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='flex flex-col justify-center px-28 mb-10'>
                    <div className='flex justify-center'>
                        <img src={own} alt="own your files" className='size-80' />
                    </div>
                    <p>Unlock the full potential of your files by joining Vault today! Experience the seamless integration of blockchain technology and enjoy the myriad benefits of secure file storage. Start uploading your files to the blockchain now and take control of your data like never before!</p>
                    <button onClick={connectWallet} className="mt-10 shadow-xl shadow-black bg-customCactus-400 hover:bg-customCactus-300 text-white font-bold py-2 px-4 rounded w-fit m-auto">Connect MetaMask Wallet</button>
                </div>
            </section >
            <footer className="bg-customCactus-400 text-white w-full h-16 flex justify-between items-center px-6">
                <div>
                    <p className="text-lg font-bold">© 2024 Vault. All rights reserved.</p>
                </div>
                <div>
                    <p className="text-sm">Contact Us: <a href="mailto:danielkarume@outlook.com" className="underline">danielkarume@outlook.com</a> | <a href="mailto:peacheswagithi16@gmail.com" className="underline">peacheswagithi16@gmail.com</a></p>
                </div>
            </footer>


        </div>
    )
}

export default Landing
