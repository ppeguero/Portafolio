import React from "react";

function NavDash() {
    return (
        <>
            <div class="bg-[#212121] border-r border-[#e5e5e5] fixed top-0 bottom-0 h-full w-[160px]">
                <ul class="m-5">
                    <li>
                        <a class="flex items-center space-x-2 py-2 px-4 hover:bg-black cursor-pointer"> 
                            <span class="text-white">Atmosferica</span>
                        </a>
                    </li>
                </ul>
                <ul class="m-5">
                    <li>
                        <a class="flex items-center space-x-2 py-2 px-4 hover:bg-black cursor-pointer">
                            <span class="text-white">NuevoTema</span>
                        </a>
                    </li>
                </ul>
                <ul class="m-5">
                    <li>
                        <a class="flex items-center space-x-2 py-2 px-4 hover:bg-black cursor-pointer">
                            <span class="text-white">NewTheme</span>
                        </a>
                    </li>
                </ul>
                {/* <ul class="m-5 absolute bottom-0 left-0">
                    <li>
                        <a class="flex items-center space-x-2 py-2 px-4 hover:bg-black">
                            <span class="text-white">Logout</span>
                        </a>
                    </li>
                </ul> */}
            </div> 
        </> 
    )
}

export default NavDash;