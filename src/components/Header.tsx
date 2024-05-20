import React from "react";
import Navbar from "./Navbar";
import { FiAlignRight ,FiZap } from "react-icons/fi";

const Header:React.FC = ()=>{
    return(<header className="flex w-full p-3 backdrop-blur-[4px]">
        <div className="w-full">
            <h1 className="flex p-3 font-zen text-3xl font-extrabold text-yellow-400  drop-shadow-md w-[170px] rounded-md">Zenitsu <FiZap/></h1>
        </div>
        <FiAlignRight className="text-3xl md:hidden"/>
        <Navbar/>
    </header>);
}

export default Header;