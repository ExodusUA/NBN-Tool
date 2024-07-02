"use client";

import Image from "next/image";
import bgFull from "@/images/homepage/bgFull.png";
import bgFullDesk from "@/images/homepage/bgFullDesk.png";
import bgPortrait from "@/images/homepage/bgPortrait.png";
import Logo from "@/components/logotype";
import Content from "@/steps/welcome/content";
import { useEffect } from "react";

export default function Welcome() {

  return (
    <div className="p-10">
      <Logo />
      <Image
        src={bgFull}
        className="absolute top-0 right-0 w-[500px] xl:hidden h-full  portrait:hidden"
        alt="bg"
      />
      <Image
        src={bgFullDesk}
        className="absolute top-0 right-0 hidden xl:block xl:w-[750px] h-full  portrait:hidden"
        alt="bg"
      />
      <Image
        src={bgPortrait}
        className="absolute top-0 right-0 w-full  landscape:hidden"
        alt="bg"
      />
      <div className="portrait:mt-[340px] portrait:customDes:mt-[600px]">
        <Content />
      </div>
    </div>
  );
}
