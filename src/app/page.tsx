"use client";

import Image from "next/image";
import bgFull from "@/images/homepage/bgFull.png";
import bgPortrait from "@/images/homepage/bgPortrait.png";
import Logo from "@/components/logo";
import Content from "@/steps/welcome/content";

export default function Welcome() {
  return (
    <div className="p-10">
      <Logo />
      <Image
        src={bgFull}
        className="absolute top-0 right-0 w-[440px] h-full  portrait:hidden"
        alt="bg"
      />
      <Image
        src={bgPortrait}
        className="absolute top-0 right-0 w-full  landscape:hidden"
        alt="bg"
      />
      <div className="portrait:mt-[340px]">
        <Content />
      </div>
    </div>
  );
}
