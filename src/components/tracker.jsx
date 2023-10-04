import next from "../assets/icon-next-button.svg";
import back from "../assets/icon-back-button.svg";
import { useContext, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../services/provider/dataProvider";
export default function Tracker({ name, artistName }) {
  const json = useContext(DataContext);
  let index = json.findIndex((per) => per.name === name);
  let value = ((index + 1) * 100) / json.length;
  useLayoutEffect(() => {
    document.documentElement.style.setProperty("--contrast", `${value}%`);
  }, [value]);
  return (
    <div className="bg-brand-4 fixed z-40 inset-x-0 bottom-0 bg-white">
      <div className="tracker h-[3px]"></div>
      <div className="flex items-center justify-between px-[24px] py-[16px]">
        <div>
          <h3 className="font-brand text-brand-0 text-[14px] font-bold">
            {name}
          </h3>
          <p className="font-brand text-brand-1 text-[10px] font-normal opacity-[0.75]">
            {artistName}
          </p>
        </div>
        <div className="flex gap-[20px]">
          <Link
            to={index === 0 ? `/${json[0].name}` : `/${json[index - 1].name}`}
          >
            <img src={back} />
          </Link>
          <Link
            to={
              index === json.length - 1
                ? `/${json[json.length - 1].name}`
                : `/${json[index + 1].name}`
            }
          >
            <img src={next} />
          </Link>
        </div>
      </div>
    </div>
  );
}
