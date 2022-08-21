import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'

export default function Footer(){
    return (
        <div className="footer w-full space-x-6 flex justify-center py-4 rounded-b-lg">
            <a href="#" className='hover:bg-sky-300'>
                <img src="./src/assets/twitter Icon.svg" alt="icon" />
            </a>

            <a href="#" className='hover:bg-sky-300'>
                <img src="./src/assets/facebook icon.svg" alt="icon" />
            </a>

            <a href="#" className='hover:bg-sky-300'>
                <img src="./src/assets/instagram icon.svg" alt="icon" />
            </a>

            <a href="#" className='hover:bg-sky-300'>
                <img src="./src/assets/linkedin icon.svg" alt="icon" />
            </a>

            <a href="#" className='hover:bg-sky-300'>
                <img src="./src/assets/github icon.svg" alt="icon" />
            </a>
    
        </div>
    )
}