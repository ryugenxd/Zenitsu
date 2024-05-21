import React from "react"
import { Profile } from "../assets";

const CardProfile:React.FC = ()=>{
    return (
        <div className="p-3 md:max-w-[450px] md:mx-4 rounded-md backdrop-blur-[5px] shadow-xl m-3 bg-[rgba(2,3,3,0.48)] font-zen">
            <div className="w-full mb-3">
                <img src={Profile} className="w-full h-full object-cover rounded-md"/>
            </div>
            <div className="w-full">
            Name: Zenitsu Agatsuma
            </div>
            <div className="w-full">
            Age: Approximately 16-17 years old
            </div>
            <div className="w-full">
            Gender: Male
            </div>
            <div className="w-full">
            Height: Around 165 cm
            </div>
            <div className="w-full">
            Weight: Not precisely known
            </div>
            <div className="w-full">
            Profession: Demon Slayer
            </div>
            <div className="w-full">
            Weapon: Yellow Nichirin Sword
            </div>
            <div className="w-full">
            Blood Type: Unknown
            </div>
            <div className="w-full">
            First Appearance: Chapter 18 of the Kimetsu no Yaiba manga
            </div>
        </div>
    )
}

export default CardProfile;