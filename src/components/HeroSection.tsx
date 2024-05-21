import React from "react";
import {Hero} from "../assets"
import { FiFileText } from "react-icons/fi";
import HorizontalShadow from "./HorizontalShadow";
import {Element,Link} from 'react-scroll';

const HeroSection:React.FC = ()=>{
    return (<Element name="home"  className="flex justify-between items-center max-[766px]:items-end mx-0 px-0 text-white h-screen relative" id="home">
        <HorizontalShadow top="0" left="0"/>
        <div className="p-3 md:max-w-[450px] md:mx-4 rounded-md backdrop-blur-[5px] shadow-xl m-3 bg-[rgba(2,3,3,0.48)] font-zen  max-[766px]:z-[20]">
            
            <h2 className="font-bold underline underline-offset-1 underline-red-500"><span className="text-yellow-300">Zenitsu</span> Agatsuma.</h2>
            <article className="mt-2sss">
                <p className="text-bold">
                Zenitsu Agatsuma is one of the main characters in Kimetsu no Yaiba. He is a Demon Slayer who is very whiny and often scared. Despite this, he has an incredible natural talent for fighting, especially when he sleeps and his body takes over for battle.
                </p>
            </article>
            <div className="flex justify-end items-center w-full m-3">
                <Link to="profile" smooth={true} duration={500}  className="inline-flex items-center justify-center bg-[rgba(2,3,3,8)] p-3 w-[150px] rounded-md text-1xl font-bold gap-2 cursor-pointer hover:bg-[#0B4D81] transition ease-in-out  hover:shadow-xl delay-[160]  m-3"><FiFileText/> Detail</Link>
            </div>
        </div>
        <div className="p-0 m-0  rounded-[1rem] w-full backdrop-blur-sm max-[766px]:absolute">
            <img src={Hero} alt="zenitsu" className="w-full"/>
        </div>
        <HorizontalShadow top="100%" left="0"/>
    </Element>);
}

export default HeroSection;