import React from "react";
import { SlOptions } from "react-icons/sl";


const File = (props) => {
    return (
        <div className="w-full h-16 shadow-xl bg-customCactus-100 rounded-lg hover:bg-customCactus-200 border
                        border-customCactus-400 flex flex-row justify-around items-center ">
            <p>{props.fileName}</p>
            <p>{props.tag}</p>
            <p>{props.date}</p>
            <p>{props.size}</p>
            <div className="size-8 hover:bg-customCactus-100 rounded-full flex justify-center items-center">
            <SlOptions/>
            </div> 
        </div>
    );
}

export default File;