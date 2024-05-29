import React from "react";
import HorizontalShadow from "./HorizontalShadow";
import { FiZap ,FiInstagram } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub,FaFacebook} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer:React.FC = ()=>{
    return (<footer className="md:mt-[3rem] md:pt-[4rem] w-full grid grid-cols-1 md:grid-cols-3 relative backdrop-blur-[1rem]">
        <HorizontalShadow top="0" left="0"/>
        <div className="md:w[234px] flex justify-center items-center bg-[rgba(2,3,3,0.48)] rounded-xl m-5 pt-2 max-[766px]:pt-[2rem] mb-5 shadow-lg">
           <div className="flex flex-col items-center justify-center p-3">
            <div className="flex flex-col justify-center items-center">
                <h1 className="flex justify-center items-center p-3 font-zen text-3xl font-extrabold text-yellow-400  drop-shadow-md w-[240px] rounded-md">Zen<span><FiZap/></span>tsu</h1>
                <span className="font-zen text-white underline underline-offset-4"> Page Powered By RyugenXD </span>
            </div>
             <div className="flex gap-3 justify-center items-center p-3">
                <FiInstagram className="border border-white bg-white rounded-md" /><FaGithub className="border border-white bg-white rounded-md"/><FaFacebook  className="border border-white bg-white rounded-md"/><IoMdMail  className="border border-white bg-white rounded-md"/><FaSquareXTwitter   className="border border-white bg-white rounded-md"/>
             </div>
           </div>
        </div>
        <div className="md:w[234px] flex flex-col justify-center items-center px-3 py-4 bg-[rgba(2,3,3,0.48)]  max-[766px]:mr-5 max-[766px]:rounded-xl rounded-l-xl m-5 mr-0 shadow-lg">
            <ul className="w-full m-0 mb-2 text-white font-zen p-3">
                <li> <p className="font-bold text-white text-start">Navigation links : </p></li>
                <li>Home</li> 
                <li>Profile</li> 
                <li>Gallery</li> 
                <li>Battles</li> 
                <li>Quotes</li> 
                <li>Join Comunity</li>
            </ul>
        </div>
        <div className="md:w[234px] md:h-[40vh] flex flex-col justify-center items-center px-3 py-4 bg-[rgba(2,3,3,0.48)] max-[766px]:ml-5 max-[766px]:rounded-xl rounded-r-xl ml-0 m-5 shadow-lg">
            <ul className="w-full m-0 mb-2 text-white font-zen p-3 ">
                <li><p className="font-bold text-white">Thanks For : </p></li>
                <li className="md:text-end  underline underline-offset-4">Me 😏</li> 
                <li  className="md:text-end  underline underline-offset-4">Typescript</li> 
                <li  className="md:text-end  underline underline-offset-4">UI/UX Indonesia</li> 
                <li  className="md:text-end  underline underline-offset-4">Termux Indonesia Comunity</li> 
                <li  className="md:text-end  underline underline-offset-4">AnimeList</li> 
                <li  className="md:text-end  underline underline-offset-4">Programmer Indonesia Comunity</li>
            </ul>
        </div>
        <p className="text-white font-zen sm:text-sm px-3 whitespace-nowrap mx-0 w-screen text-end max-[750px]:text-center">© 2024 Zenitsu Fan Site. All Rights Reserved.</p>
        <HorizontalShadow top="100%" left="0"/>
    </footer>);
}

export default Footer;