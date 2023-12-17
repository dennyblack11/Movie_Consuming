import { useEffect, useState } from "react";
import { IoAnalytics, IoStatsChartOutline } from "react-icons/io5";
import { MdDashboard, MdMovieFilter } from "react-icons/md";

export const onChange = () => {
  const [state, setState] = useState(false);
  const Document: any = document;

  if (!Document.startViewTransition!) {
    setState(!state);
  } else {
    Document.startViewTransition(() => {
      setState(!state);
    });
  }
};

export const data = [
  {
    title: "Default",
    icon: <MdDashboard />,
    content: "Dashboard",
  },
  {
    title: "Analytics",
    icon: <IoAnalytics />,
    line: "2",
  },
  {
    title: "Statistics",
    icon: <IoStatsChartOutline />,
    content: "Widget",
    drop: "1",
    line: "2",
    onClick: onChange,
  },
];
