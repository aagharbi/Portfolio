'use client'
import React, {useEffect, useState} from "react";
import useSystemTheme from "../themeRef";

const Hero = () => {
    const theme = useSystemTheme();

    return (
        <div className="flex flex-col
        h-full w-full 
        justify-center">
            <div className="flex flex-col lg:flex-row justify-center w-full">
                <div className="p-8 text-center lg:text-left">
                    <h1 className="text-6xl font-extrabold">
                        Front-End Developer
                    </h1>
                    <p className="text-lg font-light">
                        Hi, my name is Ayman Agharbi.  Feel free to look around!
                    </p>

                </div>
                <div className="p-8 self-center">
                    <div className={`h-min-48 w-min-48 h-64 w-64 blob-animate ${theme === 'dark' ? `bg-gray-200` : `bg-gray-800`}`}>
                    <img className="h-min-48 w-min-48 h-64 w-64 blob-animate" src="/ayman.jpeg" alt="placeholder" />
                    </div>                
                </div>                
            </div>
            

        </div>
    )
}

export default Hero;