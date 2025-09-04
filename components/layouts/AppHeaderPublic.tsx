"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavLinks from "../shared/NavLinkButton";

function AppHeaderPublic() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // You can adjust the scroll threshold (e.g., 50)
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 z-50 w-full py-6 px-32 flex justify-between items-center transition-all duration-500
        ${isScrolled ? "bg-primary" : "bg-transparent"}`}
    >
      <Image src="/logo.png" alt="Logo" width={100} height={100} className="" />
      <div className="text-white">
        <ul className="flex ">
          <li>
            <NavLinks title="Home" url="/" />
          </li>
          <li>
            <NavLinks title="Blog" url="/blog" />
          </li>
          <li>
            <NavLinks title="Pages" url="/pages" />
          </li>
          <li>
            <NavLinks title="contact" url="/contact" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default AppHeaderPublic;
