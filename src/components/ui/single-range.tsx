"use client";

import { useEffect, useState } from "react";
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

export default function SingleRange({
  dataList,
  setSelected,
  selected,
  setIsCorrect,
}: SingleRangeProps) {
  const [value, setValue] = useState<number | number[]>(0);

  useEffect(() => {
    setValue(0);
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

  return (
    <Slider
      className="portrait:!w-[630px] landscape:!w-[780px] landscape:air:w-[780px] m-auto portrait:flex  justify-center "
      aria-label="Temperature"
      valueLabelDisplay="auto"
      value={value}
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
      }}
    />
  );
}
