"use client";

import { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";

interface SingleRangeProps {
  dataList: {
    text: string;
    correct: boolean;
  }[];
  isCorrect: boolean | null;
  selected: string | undefined;
  setSelected: (value: string | undefined) => void;
  setIsCorrect: (value: boolean | null) => void;
}

export default function SingleRange({
  dataList,
  setSelected,
  selected,
  setIsCorrect,
  isCorrect,
}: SingleRangeProps) {
  const [value, setValue] = useState<number | number[]>(0);
  const [correctAnswerPosition, setCorrectAnswerPosition] = useState<
    number | null
  >(null);
  const [firstInput, setFirstInput] = useState<boolean>(false);

  useEffect(() => {
    setValue(0);
    const correctIndex = dataList.findIndex((data) => data.correct);
    setCorrectAnswerPosition(correctIndex !== -1 ? correctIndex : null);
  }, [dataList]);

  let marksArray = [
    {
      value: 0,
      label: "",
    },
  ];

  const firstValue = 100 / (dataList.length + 1);

  dataList.forEach((data, index) => {
    marksArray.push({
      value: firstValue * (index + 1),
      label: data.text,
    });
  });

  marksArray.push({
    value: 100,
    label: "",
  });

  const handleInput = () => {
    if (!firstInput) {
      setFirstInput(true);
    }
  };

  useEffect(() => {
    setFirstInput(false);
  }, [dataList]);

  return (
    <>
      <style>
        {`
          .MuiSlider-mark[data-index="0"],
          .MuiSlider-mark[data-index="${dataList.length + 1}"] {
            display: none;
          }
          .MuiSlider-root {
            height: 40px !important;
          }
          
          .MuiSlider-track {
            background-color: #4CE88F !important;
            border-radius: 40px !important;
            border: none !important;
            transition: all 0.3s ease 0s !important;
          }
          
          .MuiSlider-rail {
            background-color: #5F98FF !important;
            border-radius: 40px !important;
          }
          
          .MuiSlider-thumb {
            width: 64px !important;
            height: 64px !important;
            background-color: white !important;
            transition: all 0.3s ease 0s !important;
          }
          
          .MuiSlider-thumb.Mui-active {
            box-shadow: 0px 0px 0px 6px rgba(255, 255, 255, 0.16), 0px 0px 0px 12px rgba(255, 255, 255, 0.16) !important;
          }
          
          .MuiSlider-thumb:hover {
            box-shadow: 0px 0px 0px 6px rgba(255, 255, 255, 0.16), 0px 0px 0px 12px rgba(255, 255, 255, 0.16) !important;
          }
          
          .MuiSlider-valueLabel {
            background-color: #5F98FF !important;
            font-family: SocialBold, sans-serif;
            border-radius: 20px !important;
            top: -15px !important;
            padding: 0.25rem 1rem !important;
          }
          
          .MuiSlider-mark {
            height: 60px !important;
            top: 60% !important;
          }
          
          .MuiSlider-root {
            height: 40px !important;
          }
          
          .MuiSlider-markLabel {
            font-family: SocialBold, sans-serif !important;
            font-size: 26px !important;
            color: white !important;
            top: 90px !important;
            white-space: unset !important;
            width: 150px !important;
            text-align: center !important;
            line-height: 1.3 !important;
          }
          
          .MuiSlider-markLabel {
            font-family: SocialBold, sans-serif !important;
            font-size: 26px !important;
            color: white !important;
            top: 90px !important;
            white-space: unset !important;
            width: 150px !important;
            text-align: center !important;
            line-height: 1.3 !important;
          }
          .MuiSlider-mark[data-index="0"],
          .MuiSlider-mark[data-index="last"] {
            display: none;
          }
          .MuiSlider-mark {
            height: 60px !important;
            top: 60% !important;
            background-color: white !important;
          }
        `}
      </style>
      <div style={{ position: "relative" }}>
        {" "}
        <Slider
          className="portrait:!w-[630px] landscape:!w-[780px] landscape:air:w-[780px] m-auto portrait:flex  justify-center"
          aria-label="Temperature"
          value={value}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => {
            let label = marksArray.find((mark) => mark.value === value)?.label;
            return label;
          }}
          marks={marksArray}
          step={null}
          onChange={(e, value) => {
            setValue(value);
          }}
          onChangeCommitted={(e, value) => {
            let label = marksArray.find((mark) => mark.value === value)?.label;
            setSelected(label);

            setIsCorrect(
              dataList.find((data) => data.text === label)?.correct || false
            );

            if (
              !firstInput &&
              selected !== label &&
              dataList.find((data) => data.text === label)?.correct
            ) {
              const correctIndex = dataList.findIndex(
                (data) => data.text === label
              );
              setCorrectAnswerPosition(correctIndex);
              setFirstInput(true);
            }
          }}
          onClick={handleInput}
        />
        {firstInput === true && correctAnswerPosition !== null && (
          <span
            onClick={(e) => {
              //set correct value
              setValue(marksArray[correctAnswerPosition + 1].value);
              setSelected(marksArray[correctAnswerPosition + 1].label);
              setIsCorrect(true);
            }}
            style={{
              position: "absolute",
              cursor: "pointer",
              left: `${marksArray[correctAnswerPosition + 1].value}%`,
              transform: "translateX(-50%)",
              backgroundColor: isCorrect === true ? "#FFFFFF" : "#FF2A57",
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              zIndex: 1,
              opacity: isCorrect === true ? 0.5 : 1,
            }}
          ></span>
        )}
      </div>
    </>
  );
}
