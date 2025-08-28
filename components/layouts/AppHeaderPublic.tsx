import Image from "next/image";
import React from "react";
import NavLinks from "../shared/NavLinkButton";

function AppHeaderPublic() {
  return (
    <header className="flex justify-between items-center py-6 px-32 top-0 mx-auto fixed w-full scr">
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
