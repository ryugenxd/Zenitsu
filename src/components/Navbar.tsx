import React from "react"
import { useNavbarContext } from "../context";
import { NavbarContextInterface } from "../interfaces";
import { Link} from 'react-scroll';

const Navbar:React.FC = ()=>{
    const {navbar} :NavbarContextInterface|any = useNavbarContext();
    return (<nav className="flex ease-in-out duration-300 font-bold gap-3 justify-between md:justify-end z-[999] items-center max-[766px]:absolute max-[766px]:top-[10vh] max-[766px]:w-[25%] max-[766px]:rounded-xl   max-[766px]:shadow-lg   max-[766px]:backdrop-blur-[2rem]  max-[766px]:p-3 md:flex-row flex-col text-white" style={{left:navbar?"75%":"100%"}} >
        <Link to="home" smooth={true} duration={500} className="hover:underline underline-offset-1 p-3 cursor-pointer">Home</Link>
        <Link to="profile" smooth={true} duration={500} className="hover:underline underline-offset-1 p-3 cursor-pointer">Profile</Link>
        <Link to="gallery" className="hover:underline underline-offset-1 p-3 cursor-pointer">Gallery</Link>
        <Link to="battles" className="hover:underline underline-offset-1 p-3 cursor-pointer">Battles</Link>
        <Link to="quotes" className="hover:underline underline-offset-1 p-3 cursor-pointer">Quotes</Link>
        <Link to="contact" className="hover:underline underline-offset-1 p-3 cursor-pointer">Contact</Link>
    </nav>);
}

export default Navbar;