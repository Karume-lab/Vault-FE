import React from "react";
import FileActions from "./FileActions";

const File = (props) => {
    return (
        <div className="w-full  h-20 p-3 bg-customCactus-100 hover:bg-customCactus-200 border-b
                        border-customCactus-400 flex flex-row justify-around items-center ">
            <p>{props.fileName}</p>
            <p>{props.tag}</p>
            <p>{props.date}</p>
            <p>{props.size}</p>
            <FileActions />
        </div>
    );
}

export default File;