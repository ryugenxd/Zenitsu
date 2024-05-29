import CardProfile from "./CardProfile";
import HorizontalShadow from "./HorizontalShadow";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const ProfileSection = ()=>{
    return (<div className="flex max-[750px]:flex-col md:mt-[3rem] md:pt-[2rem] flex-row-reverse justify-between items-center mx-0  px-0 text-white md:h-screen relative backdrop-blur-[1rem]" id="profile">
        <HorizontalShadow top="0" left="0"/>
        <CardProfile/>
        <div className="p-5 m-5 rounded-[1rem] w-full backdrop-blur-sm bg-[rgba(2,3,3,0.48)]">
            <LiteYouTubeEmbed 
            id="uNvaiooJDRA"
            title="⚡Zenitsu Profile"/>
        </div>
        <HorizontalShadow top="100%" left="0"/>
    </div>);
}

export default ProfileSection;