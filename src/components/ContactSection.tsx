import React from "react"
import HorizontalShadow from "./HorizontalShadow";

const ContactSection:React.FC = ()=>{
   return (<div className="md:mt-[3rem] md:pt-[2rem] mx-0  px-0 text-white md:h-screen relative backdrop-blur-[1rem]">
      <HorizontalShadow top="0" left="0"/>
      <HorizontalShadow top="100%" left="0"/>
   </div>);
}

export default ContactSection;