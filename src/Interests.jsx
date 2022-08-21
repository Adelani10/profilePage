import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'

export default function Interests(){
    return (
        <div className="space-y-2 px-5 text-white">
            <h1 className="text-2xl font-bold">
                Interests
            </h1>
            <p className="text-[11px] leading-4">
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
            </p>
        </div>
    )
}