import React from "react";
import { useState } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { TiWeatherCloudy } from "react-icons/ti";
import { FiLoader } from "react-icons/fi";

function NavDash() {
    const [open, setOpen] = useState(true);
    return (
        <>
            <div class={`bg-dark-purple fixed top-0 bottom-0 h-screen pt-8 ${open ? "w-60": "w-20"} duration-300`}>
                <div>
                    <HiArrowLongLeft className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-4 border
                    border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>
                </div>
                <ul class="m-5">
                    <li className="text-gray-300 flex items-center gap-x-4 p-2 hover:bg-light-white 
                    rounded-md mt-2 cursor-pointer">
                        <span className="text-3xl block float-left"><TiWeatherCloudy/></span>
                        <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>Atmosferica</span>
                    </li>
                </ul>
                <ul class="m-5">
                    <li className="text-gray-300 flex items-center gap-x-4 p-2 hover:bg-light-white 
                    rounded-md mt-2 cursor-pointer">
                        <span className="text-3xl block float-left"><FiLoader/></span>
                        <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>NuevoTema</span>
                    </li>
                </ul>
                <ul class="m-5">
                    <li className="text-gray-300 flex items-center gap-x-4 p-2 hover:bg-light-white 
                    rounded-md mt-2 cursor-pointer">
                        <span className="text-3xl block float-left"><FiLoader/></span>
                        <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>NuevoTema</span>
                    </li>
                </ul>
                <ul class="m-5">
                    <li className="text-gray-300 flex items-center gap-x-4 p-2 hover:bg-light-white 
                    rounded-md mt-2 cursor-pointer">
                        <span className="text-3xl block float-left"><FiLoader/></span>
                        <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>NuevoTema</span>
                    </li>
                </ul>
            </div> 
        </> 
    )
}

export default NavDash;