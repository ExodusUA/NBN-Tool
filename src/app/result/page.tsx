"use client";
import React from "react";
import Image from "next/image";
import bgFull from "../../images/result/bgFull.png";
import bgPortrait from "../../images/result/bgPortrait.png";
import Logo from "../../components/logo";
import Link from "next/link";
import { StepNumber } from "@/components/ui";
import { ResultNumber } from "@/components/ui/result-number";
import LogoMark from "@/components/logo-mark";
import AddressModal from "@/components/ui/address-modal";

function page() {
  return (
    <div className="p-10 h-screen bg-greenQuestions relative">
      <Logo />
      <ResultNumber />
      
        <LogoMark mt={'portrait:bottom-[30px]'} />
      

      <Image
        src={bgFull}
        className="absolute top-0 right-0 w-[340px] h-full  portrait:hidden"
        alt="bg"
      />
      <Image
        src={bgPortrait}
        className="absolute top-0 right-0 w-full  landscape:hidden"
        alt="bg"
      />
      <div className="portrait:mt-[340px]">
        <p className="supreme uppercase text-[128px] font-black leading-[110px] mt-6">
          well <br /> done
        </p>
        <p className="text-[28px] socialBold mt-14">
          Are you getting the best at work?
        </p>
        <p className="text-[28px] socialBook mt-2 w-[600px] leading-8">
          Ensuring optimal broadband speeds and connection types can
          significantly enhance a business’s operational efficiency and digital
          competitiveness.
        </p>
        <div className="flex items-center mt-12">
          <Link href="/steps">
            <button className="socialBold text-[24px] text-white checkAdressBtn bg-blue rounded-[72px] py-3 w-[360px]  text-center  active:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-100 duration-200 outline-none">
              Check your address
            </button>
          </Link>
          <p className="text-[28px] socialBold ml-12 cursor-pointer active:underline duration-200">
            Restart
          </p>
        </div>
      </div>
      {/*<AddressModal />*/}
    </div>
  );
}

export default page;
