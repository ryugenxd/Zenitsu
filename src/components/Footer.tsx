import React from "react";
import HorizontalShadow from "./HorizontalShadow";
import { FiZap } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub,FaFacebook} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer:React.FC = ()=>{
    return (<footer className="md:mt-[3rem] md:pt-[2rem] w-full grid grid-cols-1 md:grid-cols-3 relative backdrop-blur-[1rem]">
        <HorizontalShadow top="0" left="0"/>
        <div className="md:w[234px] flex justify-center items-center">
           <div className="flex flex-col items-center justify-center p-3">
            <div className="flex flex-col justify-center items-center">
                <h1 className="flex justify-center items-center p-3 font-zen text-3xl font-extrabold text-yellow-400  drop-shadow-md w-[240px] rounded-md">Zen<span><FiZap/></span>tsu</h1>
                <span className="font-zen text-white"> Page Powered By RyugenXD </span>
            </div>
             <div className="flex gap-3 justify-center items-center p-3">
                <FaGithub className="border border-white bg-white rounded-md"/><FaFacebook  className="border border-white bg-white rounded-md"/><IoMdMail  className="border border-white bg-white rounded-md"/><FaSquareXTwitter   className="border border-white bg-white rounded-md"/>
             </div>
           </div>
        </div>
        <div className="md:w[234px] flex flex-col justify-center items-center px-3 py-4">
            <ul className="w-full m-0 mb-2 text-white font-zen p-3 ">
                <li> <p className="font-bold text-white text-start">Navigation links : </p></li>
                <li>Home</li> 
                <li>Profile</li> 
                <li>Gallery</li> 
                <li>Battles</li> 
                <li>Quotes</li> 
                <li>Join Comunity</li>
            </ul>
        </div>
        <div className="md:w[234px] md:h-[40vh] flex flex-col justify-center items-center px-3 py-4">
            <ul className="w-full m-0 mb-2 text-white font-zen p-3 ">
                <li><p className="font-bold text-white">Thanks For : </p></li>
                <li className="md:text-end">Me 😏</li> 
                <li  className="md:text-end">Typescript</li> 
                <li  className="md:text-end">UI/UX Indonesia</li> 
                <li  className="md:text-end">Termux Indonesia Comunity</li> 
                <li  className="md:text-end">AnimeList</li> 
                <li  className="md:text-end">Programmer Indonesia Comunity</li>
            </ul>
        </div>
        <p className="text-white font-zen sm:text-sm p-2 whitespace-nowrap mx-0 w-full text-end max-[750px]:text-center">© 2024 Zenitsu Fan Site. All Rights Reserved.</p>
        <HorizontalShadow top="100%" left="0"/>
    </footer>);
}

export default Footer;