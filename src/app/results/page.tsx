"use client";

import React from "react";
import Image from "next/image";
import bgFull from "../../images/result/bgFull.png";
import bgPortrait from "../../images/result/bgPortrait.png";
import Logo from "@/components/logotype";
import { ResultNumber } from "@/components/ui/result-number";
import LogoMark from "@/components/logo-mark";
import { motion } from "framer-motion";
import progressStore from "@/stores/progressStore";
import { useRouter } from "next/navigation";
import Link from "next/link";

function page() {
  const navigate = useRouter();

  const restart = progressStore((state) => state.restart);
  const answers = progressStore((state) => state.answers);

  const wellDone = answers.filter((answer) => answer === true).length > 3;

  const handleRestart = () => {
    restart();
    navigate.push("/");
  };

  return (
    <div className="p-10 h-screen bg-greenQuestions relative">
      <Logo />
      <ResultNumber />

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
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <p className="supreme uppercase text-[128px] font-black leading-[110px] mt-6">
            {wellDone === true ? (
              <span>
                well <br /> done
              </span>
            ) : (
              <span>
                not <br /> bad
              </span>
            )}
          </p>
        </motion.div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-[28px] socialBold mt-14">
            Are you getting the best at work?
          </p>
          <p className="text-[28px] socialBook mt-2 w-[600px] leading-8">
            Ensuring optimal broadband speeds and connection types can
            significantly enhance a business’s operational efficiency and
            digital competitiveness.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="flex items-center mt-12">
            <Link
              href="https://www.nbnco.com.au/connect-home-or-business/check-your-address"
              target="_blank"
            >
              <button className="socialBold text-[24px] text-white checkAdressBtn bg-blue rounded-[72px] py-3 w-[360px]  text-center  active:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-100 duration-200 outline-none">
                Check your address
              </button>
            </Link>

            <p
              onClick={handleRestart}
              className="text-[28px] socialBold ml-12 cursor-pointer active:underline duration-200"
            >
              Restart
            </p>
          </div>
        </motion.div>
      </div>
      <LogoMark mt={"portrait:bottom-[30px]"} />
    </div>
  );
}

export default page;
