import { FC } from "react";
import { iIcon } from "../../interfaces/interfaces";

export const Icon: FC<iIcon> = ({ icon, bg, bg2, onClick }) => {
  return (
    <div
      className={`text-[20px] cursor-pointer hover:text-white hover:bg-purple-700 p-2 rounded-md 
        ${
          bg
            ? "text-[#414141] text-[20px] hover:text-[black] hover:bg-transparent bg-transparent"
            : "bg-purple-200"
        } 
        ${
          bg2
            ? "text-blue-500  text-[20px] bg-transparent hover:bg-transparent  group-hover:text-white hover:bg-"
            : "bg-purple-200"
        } 
        
        duration-300 transition-all`}
      onClick={onClick}
    >
      {icon}
    </div>
  );
};
