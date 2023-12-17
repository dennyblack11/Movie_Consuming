import React from "react";
import { Header } from "../static/Header";
import { Outlet } from "react-router-dom";
import { SideBar } from "../static/SideBar";

export const Layout = () => {
  return (
    <div>
      <Header />
      <div className="flex  ">
        <SideBar />
        <div className="flex justify-end w-full">
          <div className="w-[calc(100vw-220px)] ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
