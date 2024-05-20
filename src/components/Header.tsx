import React from "react";
import Navbar from "./Navbar";
import { FiAlignRight ,FiZap } from "react-icons/fi";

const Header:React.FC = ()=>{
    return(<header className="flex justify-center w-full p-3 fixed top-0 left-0 z-[999] bg-[rgba(2,3,3,8)]">
        <div className="flex justify-center px-3 w-full max-w-[1115px]">
            <div className="w-full">
                <h1 className="flex p-3 font-zen text-3xl font-extrabold text-yellow-400  drop-shadow-md w-[240px] rounded-md">Zen<span><FiZap/></span>tsu</h1>
            </div>
            <FiAlignRight className="text-3xl md:hidden"/>
            <Navbar/>
        </div>
    </header>);
}

export default Header;