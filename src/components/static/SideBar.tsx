import { FC, useEffect, useState } from "react";
import { MdDashboard, MdMovieFilter } from "react-icons/md";
import { SideNav } from "../props/SideNav";
import { DropDown } from "../props/DropDown";
import { data, onChange } from "../props/SideNavData";
import { getDataByGenre, getGenre } from "../../APIs/API";
import { useDispatch } from "react-redux";
import { addGenres } from "../global/reduxState";

export const SideBar = () => {
  const [state, setState] = useState([{}]);

  const dispatch = useDispatch();

  useEffect(() => {
    getGenre().then((res: any) => {
      setState(res);

      // dispatch(addGenres(res));
      // getDataByGenre()
    });
  }, []);

  return (
    <div className="w-[220px] flex justify-center fixed h-[calc(100vh-70px)]  ">
      <div className=" w-[90%] overflow-y-auto ">
        {data.map((el) => (
          <SideNav
            text={el.title}
            content={el.content}
            icon={el.icon}
            line={el.line}
            drop={el?.drop}
            onClick={el?.onClick!}
          />
        ))}
        {/* {state
          .map((el: any) => <SideNav content="" Genre="1" text={el.name} />)
          .slice(13)} */}

        <SideNav
          content="Genres"
          Genre="1"
          text={state
            .map((el: any) => (
              <div
                onClick={() => {
                  getDataByGenre(el.id).then((res: any) => {
                    console.log(res);

                    dispatch(addGenres(res));
                  });
                }}
                className="mb-3 hover:bg-purple-200 transition-all duration-300 w-full py-2 px-4 rounded-md"
              >
                {el.name}
              </div>
            ))
            .slice(12)}
        />
      </div>
    </div>
  );
};
