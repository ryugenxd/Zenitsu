import React from "react"
import { useNavbarContext } from "../context";
import { NavbarContextInterface } from "../interfaces";

const Navbar:React.FC = ()=>{
    const {navbar} :NavbarContextInterface|any = useNavbarContext();
    return (<nav className="flex font-bold gap-3 justify-between md:justify-end z-[999] items-center max-[766px]:absolute max-[766px]:top-[10vh] max-[766px]:w-[25%] max-[766px]:rounded-xl   max-[766px]:shadow-lg   max-[766px]:backdrop-blur-[2rem]  max-[766px]:p-3 md:flex-row flex-col text-white" style={{left:navbar?"75%":"100%"}} >
        <a href="#home" className="hover:underline underline-offset-1 p-3">Home</a>
        <a href="#profile" className="hover:underline underline-offset-1 p-3">Profile</a>
        <a href="#gallery" className="hover:underline underline-offset-1 p-3">Gallery</a>
        <a href="#battles" className="hover:underline underline-offset-1 p-3">Battles</a>
        <a href="#quotes" className="hover:underline underline-offset-1 p-3">Quotes</a>
        <a href="#contact" className="hover:underline underline-offset-1 p-3">Contact</a>
    </nav>);
}

export default Navbar;