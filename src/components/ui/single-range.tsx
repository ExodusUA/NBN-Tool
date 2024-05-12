"use client";

import { useState } from "react";
import Slider from "@mui/material/Slider";

interface SingleRangeProps {
  dataList: {
    text: string;
    correct: boolean;
  }[];
  selected: string | undefined;
  setSelected: (value: string | undefined) => void;
  setIsCorrect: (value: boolean | null) => void;
}

export default function SingleRange({ dataList, setSelected, selected, setIsCorrect }: SingleRangeProps) {
  

  let marksArray = [
    {
      value: 0,
      label: "0",
    },
  ];

  dataList.forEach((data, index) => {
    marksArray.push({
      value: (100 / (dataList.length - 1)) * index,
      label: data.text,
    });
  });

  return (
    <Slider
      className="portrait:!w-[630px] landscape:!w-[780px] landscape:air:w-[780px] m-auto portrait:flex  justify-center "
      aria-label="Temperature"
      valueLabelDisplay="auto"
      marks={marksArray}
      step={null}
      onChangeCommitted={(e, value) => {
        let label = marksArray.find((mark) => mark.value === value)?.label;
        setSelected(label);
        setIsCorrect(dataList.find((data) => data.text === label)?.correct || false);
      }}
    />
    
  );
}
