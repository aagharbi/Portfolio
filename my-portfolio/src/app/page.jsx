'use client'

import Navbar from "@/components/home/nav.jsx"
import Hero from "@/components/home/hero.jsx"
import React, {useRef} from "react";

export default function Home() {

    // Add Sections To Navbar
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <div className="overflow-x-hidden">
            <Navbar>
                homeRef=(homeRef)
                aboutRef=(aboutRef)
                projectsRef=(projectsRef)
                contactRef=(contactRef)
            </Navbar>

            <main className="flex flex-col justify-center">
                <section
                ref={homeRef}
                className="h-screen w-screen"
                >
                   <Hero/>
                </section>
            </main>

        </div>

        
    )
}