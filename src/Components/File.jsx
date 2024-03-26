import React from "react";

function File(props) {
    return (
        <div className="w-full h-16 shadow-xl bg-customCactus-100 rounded-lg hover:bg-customCactus-200 border
                        border-customCactus-400 flex flex-row justify-around ">
            {/* <div className="bg-purple-800 "> */}
            <p>{props.fileName}</p>
            {/* </div> */}
            {/* <div className="flex flex-row bg-red-400 w-40"> */}
            <p>{props.tag}</p>
            <p>{props.date}</p>
            <p>{props.size}</p>
            </div>
        // </div>

    );
}

export default File;