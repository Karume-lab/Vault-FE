import React from "react";

const File = (props) => {
    return (
        <div className="w-full h-16 shadow-xl bg-customCactus-100 rounded-lg hover:bg-customCactus-200 border
                        border-customCactus-400 flex flex-row justify-around items-center ">
            <p className="">{props.fileName}</p>
            <p>{props.tag}</p>
            <p>{props.date}</p>
            <p>{props.size}</p>
        </div>

    );
}

export default File;