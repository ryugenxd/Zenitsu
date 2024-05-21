import React from "react";
import Navbar from "./Navbar";
import { FiAlignRight ,FiZap,FiX } from "react-icons/fi";
import { useNavbarContext } from "../context";
import { NavbarContextInterface } from "../interfaces";


const Header:React.FC = ()=>{
    const {navbar,setNavbar}:NavbarContextInterface|any = useNavbarContext();

    const toggleNavbar = () => {
        setNavbar((prevNavbar:boolean) => !prevNavbar);
    };
    
    return(<header className="flex justify-center  items-center w-full p-3 fixed top-0 left-0 z-[999] bg-[rgba(2,3,3,8)]">
        <div className="flex justify-center px-3 w-full max-w-[1115px]">
            <div className="w-full">
                <h1 className="flex p-3 font-zen text-3xl font-extrabold text-yellow-400  drop-shadow-md w-[240px] rounded-md">Zen<span><FiZap/></span>tsu</h1>
            </div>
            <FiAlignRight className="text-3xl min-[766px]:hidden min-[766px]:opacity-0   text-white" onClick={toggleNavbar} style={{display:navbar?'none':'block'}}/>
            <FiX className="text-3xl min-[766px]:hidden min-[766px]:opacity-0  text-white" onClick={toggleNavbar} style={{display:navbar?'block':'none'}}/>
            <Navbar/>
        </div>
    </header>);
}

export default Header;