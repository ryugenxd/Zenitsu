import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import {NavbarContextProvider} from "./context"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavbarContextProvider>
    <div className='flex justify-center items-center flex-col w-full bg-[#FF9D00]'>
         <App />
    </div>
    </NavbarContextProvider>
  </React.StrictMode>,
)
