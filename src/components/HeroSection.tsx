import React from "react";
import {Hero} from "../assets"
import { FiFileText } from "react-icons/fi";

const HeroSection:React.FC = ()=>{
    return (<div className="flex justify-between items-center mx-0 px-0 text-white">
        <div className="p-3 md:max-w-[450px] backdrop-blur-[5px] shadow-md m-3">
            
            <h2 className="font-bold underline underline-offset-1 underline-red-500"><span className="text-yellow-300">Zenitsu</span> Agatsuma.</h2>
            <article>
                <p>
                    Zenitsu Agatsuma adalah salah satu karakter utama dalam Kimetsu no Yaiba. Dia adalah seorang Demon Slayer yang sangat cengeng dan sering kali ketakutan. Meskipun begitu, dia memiliki bakat alami yang luar biasa dalam pertempuran, terutama ketika dia tidur dan tubuhnya mengambil alih untuk bertarung.
                </p>
            </article>
            <div className="flex justify-end items-center w-full">
                <a href="#profile" className="inline-flex items-center justify-center bg-[rgba(2,3,3,8)] p-3 w-[150px] rounded-md text-1xl font-bold gap-2 cursor-pointer"><FiFileText/> Detail</a>
            </div>
        </div>
        <div className="p-0 m-0 backdrop-blur-[4px] rounded-[1rem] w-full">
            <img src={Hero} alt="zenitsu" className="w-full"/>
        </div>
    </div>);
}

export default HeroSection;