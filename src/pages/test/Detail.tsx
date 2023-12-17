import { useParams } from "react-router-dom";
import bg from "../../Assets/775118.jpg";
import { useEffect, useState } from "react";
import { getData, getOneByID } from "../../APIs/API";

export const Detail = () => {
  const [state, setState]: any = useState({});

  const { id } = useParams();

  useEffect(() => {
    getOneByID(id!).then((res) => {
      if (!document.startViewTransition) {
        setState(res);
      } else {
        document.startViewTransition(() => {
          setState(res);
        });
      }
    });
  }, []);

  console.log(state);

  return (
    <div>
      <div
        className="w-full justify-center items-center h-screen flex bg-no-repeat bg-cover  bg-center "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${state?.backdrop_path})`,
        }}
      >
        <div className="w-full justify-center flex items-center bg-[#000001a4] h-full text-white">
          <div className="w-[70%] justify-between  flex  ">
            <div className="text-white text-[85px] w-[50%]  ">
              <div className="mb-2 font-bold">{state?.title}</div>
              <div className="text-[18px]">{state?.overview}</div>
            </div>
            <div className="w-[50%] h-full items-center flex justify-end ">
              <img
                src={`https://image.tmdb.org/t/p/w500/${state?.poster_path}`}
                alt=""
                className=" w-full h-[600px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
