import React from 'react'
import { Footer, Header, HeroSection, Sidebar } from './components'
import { BgHero } from './assets'

const App:React.FC = () => {
  return (
    <div className="overflow-x-hidden max-w-[1115px] bg-no-repeat bg-cover" style={{backgroundImage:`url(${BgHero})`}}>
      <Header/>
      <Sidebar/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default App