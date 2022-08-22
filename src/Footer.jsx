import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import Twitter from "./src/assets/Twitter Icon.svg"
import Github from "./src/assets/Github Icon.svg"
import Linkedin from "./src/assets/Linkedin Icon.svg"
import Instagram from "./src/assets/Instagram Icon.svg"
import Facebook from "./src/assets/Facebook Icon.svg"

export default function Footer(){
    return (
        <div className="footer w-full space-x-6 flex justify-center py-4 rounded-b-lg">
            <a href="#" className='hover:bg-sky-300'>
                <img src={Twitter} alt="icon" />
            </a>

            <a href="#" className='hover:bg-sky-300'>
                <img src={Facebook} alt="icon" />
            </a>

            <a href="#" className='hover:bg-sky-300'>
                <img src={Instagram} alt="icon" />
            </a>

            <a href="#" className='hover:bg-sky-300'>
                <img src={Linkedin} alt="icon" />
            </a>

            <a href="#" className='hover:bg-sky-300'>
                <img src={Github} alt="icon" />
            </a>
    
        </div>
    )
}