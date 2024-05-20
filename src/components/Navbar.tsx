import React from "react"

const Navbar:React.FC = ()=>{
    return (<nav className="flex font-bold gap-3 justify-between md:justify-end z-[999] items-center md:flex-row flex-col text-white">
        <a href="#home">Home</a>
        <a href="#profile">Profile</a>
        <a href="#gallery">Gallery</a>
        <a href="#battles">Battles</a>
        <a href="#quotes">Quotes</a>
        <a href="#contact">Contact</a>
    </nav>);
}

export default Navbar;