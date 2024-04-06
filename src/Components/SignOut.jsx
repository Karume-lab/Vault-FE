import React from 'react';
import { BiLogOut } from 'react-icons/bi';

const SignOut = ({ setAccount }) => {
    const handleSignOut = async () => {
        setAccount(null);
    };

    return (
        <div className='flex items-center xs:text-xs lg:text-lg md:text-sm hover:bg-customCactus-300 rounded-xl p-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-20 duration-300 mt-3' onClick={handleSignOut}>
            <span className='mr-2'><BiLogOut /></span>
            <button>Sign Out</button>
        </div>
    );
};

export default SignOut;