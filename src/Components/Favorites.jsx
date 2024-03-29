import React from 'react'

const Favorites = () => {
    return (
        <div className="rounded-2xl bg-customCactus-100  h-full overflow-hidden flex flex-col p-2 text-customCactus-400">
            <div className="pt-1 pl-2 rounded-r-2xl-2xl rounded-t-2xl ">
                <p className="ml-2 font-bold text-center text-3xl">FAVOURITES</p>
            </div>
            <div className='border-t border-1 w-11/12 self-center border-customCactus-400'></div>
            <div className="flex flex-row justify-around text-xs pt-2">
                <p>Name</p>
                <p>Tag</p>
                <p>Date Added</p>
                <p>Size</p>
            </div>
        </div>
    )
}

export default Favorites
