import { memo, useMemo } from "react";
import tinycolor from "tinycolor2";
import { HouseType } from "../types";

const Card = ({ houseColours, name, animal, founder }: HouseType) => {
  const style = useMemo(() => {
    const colorCombination = houseColours?.split(" and ");
    const color1 = tinycolor(colorCombination?.[0] || "white").toString();
    const color2 = tinycolor(colorCombination?.[1] || "black").toString();

    const startColor = color1 === "#000000" ? "#fff" : color1;
    const endColor = color2;

    return {
      background: `linear-gradient(90deg, ${startColor}, ${endColor})`,
    };
  }, [houseColours]);

  return (
    <div className="shadow-md border border-gray-100 rounded-md p-4 w-[400px] flex flex-col gap-2 text-sm">
      <div className="flex items-center justify-between gap-4 ">
        <span className="text-xl font-bold">{name}</span>
        <span>{animal}</span>
      </div>
      <div
        className="h-4 w-full bg-gradient-to-tr rounded-[4px]"
        style={style}
      />
      <div className="flex items-center justify-between gap-4 ">
        <span>Founder: {founder}</span>
        <span></span>
      </div>
    </div>
  );
};

export default memo(Card);
