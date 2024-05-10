import React from "react";
import logo from "../images/homepage/logo-nbn.svg";
import Image from "next/image";

function Logo() {
  return (
    <div>
      <Image src={logo} className="w-[120px] z-20 relative" alt="Logo" />
    </div>
  );
}

export default Logo;
