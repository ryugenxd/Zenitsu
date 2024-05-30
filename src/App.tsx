import React from 'react'
import { 
  Footer,QuotesSection,GallerySection,
  ContactSection, Header, HeroSection, 
  BattleSection,
  Sidebar ,Overlay,ProfileSection
} from './components'
import { BgHero } from './assets'



const App:React.FC = () => {


  return (
    <div className="flex flex-col justify-center w-full overflow-x-hidden max-w-[1599px] bg-no-repeat bg-cover relative scroll-smooth transition-all ease-in-out" style={{backgroundImage:`url(${BgHero})`}}>
      <Overlay/>
      <Header/>
      <Sidebar/>
      <HeroSection/>
      <ProfileSection/>
      <GallerySection/>
      <BattleSection/>
      <QuotesSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App