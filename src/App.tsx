import React from 'react'
import { Footer, Header, HeroSection, Sidebar ,Overlay} from './components'
import { BgHero } from './assets'

const App:React.FC = () => {
  return (
    <div className="flex flex-col justify-center   w-full overflow-x-hidden max-w-[1115px] bg-no-repeat bg-cover relative" style={{backgroundImage:`url(${BgHero})`}}>
      <Overlay/>
      <Header/>
      <Sidebar/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default App