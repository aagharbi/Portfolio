'use client'
import React, {useEffect, useState} from "react";
import Image from 'next/image';
import nextIcon from "../../images/next.svg";
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
                    <p className="pt-16 font-bold">
                        social media handles coming soon
                    </p>

                </div>
                <div className="p-8 self-center">
                    <div className={`h-min-48 w-min-48 h-64 w-64 blob-animate ${theme === 'dark' ? `bg-gray-200` : `bg-gray-800`} rotate-45`}>
                    <img className="h-min-48 w-min-48 h-64 w-64 blob-animate -rotate-45" src="/ayman.jpeg" alt="placeholder" />
                    </div>                
                </div>         
            </div>
            <div className="flex w-full justify-center">
                <p className="font-bold p-4 border-r-2">TECH STACK</p>

                <div className="flex flex-row ">
                    {/* JS */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                    <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                    </svg>
                    {/* Next JS */}
                    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 256"
      fill="currentColor"
    >
      <path

        d="M119.617.069c-.55.05-2.302.225-3.879.35-36.36 3.278-70.419 22.894-91.99 53.044-12.012 16.764-19.694 35.78-22.597 55.922C.125 116.415 0 118.492 0 128.025c0 9.533.125 11.61 1.151 18.64 6.957 48.065 41.165 88.449 87.56 103.411 8.309 2.678 17.067 4.504 27.027 5.605 3.879.425 20.645.425 24.524 0 17.192-1.902 31.756-6.155 46.12-13.486 2.202-1.126 2.628-1.426 2.327-1.677-.2-.15-9.584-12.735-20.845-27.948l-20.47-27.648-25.65-37.956c-14.114-20.868-25.725-37.932-25.825-37.932-.1-.025-.2 16.84-.25 37.431-.076 36.055-.1 37.506-.551 38.357-.65 1.226-1.151 1.727-2.202 2.277-.801.4-1.502.475-5.28.475h-4.33l-1.15-.725a4.679 4.679 0 01-1.677-1.827l-.526-1.126.05-50.166.075-50.192.776-.976c.4-.525 1.251-1.2 1.852-1.526 1.026-.5 1.426-.55 5.755-.55 5.105 0 5.956.2 7.282 1.651.376.4 14.264 21.318 30.88 46.514 16.617 25.195 39.34 59.599 50.5 76.488l20.27 30.7 1.026-.675c9.084-5.905 18.693-14.312 26.3-23.07 16.191-18.59 26.626-41.258 30.13-65.428 1.026-7.031 1.151-9.108 1.151-18.64 0-9.534-.125-11.61-1.151-18.641-6.957-48.065-41.165-88.449-87.56-103.411-8.184-2.652-16.892-4.479-26.652-5.58-2.402-.25-18.943-.525-21.02-.325zm52.401 77.414c1.201.6 2.177 1.752 2.527 2.953.2.65.25 14.562.2 45.913l-.074 44.987-7.933-12.16-7.958-12.16v-32.702c0-21.143.1-33.028.25-33.603.4-1.401 1.277-2.502 2.478-3.153 1.026-.525 1.401-.575 5.33-.575 3.704 0 4.354.05 5.18.5z"
      ></path>
    </svg>
                </div>
                <div>

                </div>
                </div>

        </div>
    )
}

export default Hero;