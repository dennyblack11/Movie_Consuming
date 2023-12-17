import { FC } from "react";
import { dropDown } from "../../interfaces/interfaces";

export const DropDown: FC<dropDown> = ({ text }) => {
  return (
    <div className="w-full">
      <div className="ml-10 pl-3 border-l">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-black " />
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
};
