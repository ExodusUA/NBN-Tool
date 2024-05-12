import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

interface SingleRangeProps {
  dataList: {
    text: string;
    correct: boolean;
  }[];
}

export default function SingleRange({dataList}: SingleRangeProps) {

  let marksArray = [
    {
      value: 0,
      label: "0",
    },
  ]
  
  dataList.forEach((data, index) => {
    marksArray.push({
      value: (100 / (dataList.length - 1) * index),
      label: data.text,
    });
  });


  return (
      <Slider
        className="portrait:w-[700px] landscape:w-[740px] landscape:air:w-[780px] m-auto portrait:flex  justify-center "
        aria-label="Temperature"
        valueLabelDisplay="auto"
        marks={marksArray}
        step={null}
      />
  );
}
