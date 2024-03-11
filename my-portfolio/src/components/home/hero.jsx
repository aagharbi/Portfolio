import React from "react";

const Hero = () => {
    return (
        <div className="flex flex-col
        h-full w-full 
        justify-center text-center">
            <div className="flex flex-col md:flex-row justify-center">
                <div className="p-8 md:text-left">
                    <h1 className="text-6xl font-extrabold">
                        Front-End Developer
                    </h1>
                    <p className="text-lg font-light">
                        Hi, my name is Ayman Agharbi.  Feel free to look around!
                    </p>
                </div>

                    <img className="h-64 blob-animate" src="https://placehold.co/600x400" alt="placeholder" />

                
            </div>
            

        </div>
    )
}

export default Hero;