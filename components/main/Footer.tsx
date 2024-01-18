import React from "react";
import StarsCanvas from "./StarBackground";


const Footer = () => {
  return (
    <div className="w-full h-full text-gray-200 shadow-lg shadow-[#2A0E61]/50  bg-[#03001417] backdrop-blur-md pt-10">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="mb-5 text-[15px] text-center">
                &copy; Victor Hugo Brito Dev 2023 Inc. All rights reserved.
            </div>
        </div>
    </div>
  )
}

export default Footer