import { Zen } from "../assets";
import CardProfile from "./CardProfile";
import HorizontalShadow from "./HorizontalShadow";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';


const ProfileSection = ()=>{
    return (<div className="flex md:mt-[3rem] md:pt-[2rem] flex-row-reverse justify-between items-center mx-0 px-0 text-white h-screen relative" id="profile">
        <HorizontalShadow top="0" left="0"/>
        <CardProfile/>
        <div className="p-5 m-5 rounded-[1rem] w-full backdrop-blur-sm bg-[rgba(2,3,3,0.48)]">
            <LiteYouTubeEmbed 
            id="uNvaiooJDRA"
            title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"/>
        </div>
    </div>);
}

export default ProfileSection;