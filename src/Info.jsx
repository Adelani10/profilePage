import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'

export default function Info(){
    return (
        <div className="w-full flex flex-col text-center text-white">
            <div className="h-56 w-full rounded-t-lg">
                <img src="./src/assets/img_5708.jpg" className='h-full block w-full object-cover rounded-t-lg' alt="" />
            </div>
            
            <div className='space-y-1 px-5'>
                <h1 className="font-bold mt-3 text-2xl text-white tracking-wider">Adelani Bello</h1>
                <p className="tracking-wider text-zinc-300">Frontend Developer</p>
                <a href="#" className='text-sky-200 text-sm hover:text-sky-400 inline-block pb-2'>adelanibello.website</a>
                <button className='w-full flex items-center justify-center space-x-2 px-3 py-1 text-black bg-white tracking-wider font-bold rounded-sm hover:bg-sky-200 '>
                    <img src="./src/assets/Mail.svg" alt="" />
                    <p>Email</p>
                </button>
            </div>
        </div>
    )
}