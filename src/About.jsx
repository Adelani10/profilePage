import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'

export default function About(){
    return (
        <div className="space-y-2 px-5 text-white">
            <h1 className="text-2xl font-bold">
                About
            </h1>
            <p className="text-[11px] md:leading-4">
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
            </p>
        </div>
    )
}