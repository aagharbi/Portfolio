'use client'
import React, { useEffect, useState} from "react";
import useSystemTheme  from "@/components/themeRef.jsx";

const Navbar = ({homeRef, aboutRef, projectsRef, contactRef}) => {

  const [curRef, setCurRef] = useState(null);
  const theme = useSystemTheme();

  useEffect(() => {
    setCurRef(homeRef);
  }, []);

  const createNavItem = (ref, text) => (
    <div className={`p-4 flex-wrap ${curRef === ref ? `` : ``}`}>
        <button
            className="hover:text-gray-600 flex lg:space-x-2"
            onClick={(e) => handleScrollTo(e,ref)}
        >
            <span>{text}</span>
        </button>
    </div>

  )

  const handleScrollTo = (e, ref) => {
    e.preventDefault(); // Prevent the default behavior of the anchor tag
    setCurRef(ref);

    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
        <nav
        className={`z-50 flex justify-between items-center px-4 fixed py-2 w-full
        drop-shadow-md h-14 ${theme === 'dark' ? `bg-black` : `bg-white`}
        `}> 
            <a href="" className="font-extrabold text-lg">AYMAN</a>
              
            <div className="flex space-x-4">
              {/* Home */}
              {createNavItem(homeRef, "Home")}
              {/* About */}
              {createNavItem(homeRef, "About")}
  
              {/* Projects */}
              {createNavItem(homeRef, "Projects")}

              {/* Contact */}
              {createNavItem(homeRef, "Contact")}
            </div>
    
        </nav>
  )
}

export default Navbar;