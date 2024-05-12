import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}°C`;
}

export default function SingleRange() {
  return (
      <Slider
        className="portrait:w-[700px] landscape:w-[740px] landscape:air:w-[780px] m-auto portrait:flex  justify-center "
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={10}
        marks
        min={0}
        max={50}
      />
  );
}
