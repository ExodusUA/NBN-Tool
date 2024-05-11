"use client";
import React from "react";
import ButtonAnswer from "@/components/lib/button-answer";
import { Button } from "@/components/lib";
import { motion } from "framer-motion";

export function Question1() {
  const [selectedAnswer, setIsSelectedAnswer] = React.useState("");

  return (
    <div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="socialBold text-white text-[42px] leading-10 mt-20">
          What is the nbn network’s <br /> busiest data day of the year?
        </p>
      </motion.div>
      <div className="landscape:flex portrait:grid portrait:justify-center mt-16 items-center ">
        <div className="flex w-[400px] justify-between landscape:mr-2 air:landscape:mr-6">
          <div className="landscape:mr-2">
            <ButtonAnswer
              selectedAnswer={selectedAnswer}
              setIsSelectedAnswer={setIsSelectedAnswer}
            >
              Christmas
            </ButtonAnswer>
          </div>
          <ButtonAnswer
            selectedAnswer={selectedAnswer}
            setIsSelectedAnswer={setIsSelectedAnswer}
          >
            AFL Grand Finals
          </ButtonAnswer>
        </div>
        <div className="flex w-[400px] justify-between portrait:mt-6">
          <div className="landscape:mr-2">
            <ButtonAnswer
              selectedAnswer={selectedAnswer}
              setIsSelectedAnswer={setIsSelectedAnswer}
            >
              Fortnite Update
            </ButtonAnswer>
          </div>
          <ButtonAnswer
            selectedAnswer={selectedAnswer}
            setIsSelectedAnswer={setIsSelectedAnswer}
          >
            Australian Open Final Match
          </ButtonAnswer>
        </div>
        {/*
        <div className="portrait:flex justify-center landscape:ml-6  portrait:mt-6">
          <Button variant="blue" disabled>
            Check
          </Button>
        </div>
        <div className="portrait:flex justify-center landscape:ml-6  portrait:mt-6">
          <Button variant="white">Check</Button>
        </div>
        */}
        <div className="portrait:flex justify-center landscape:ml-6  portrait:mt-6">
          <Button variant="green">Next</Button>
        </div>
      </div>
    </div>
  );
}
