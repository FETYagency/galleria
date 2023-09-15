import { useEffect } from "react";
import { Link } from "react-router-dom";
import next from "../shared/icon-next-button.svg";
import back from "../shared/icon-back-button.svg";
export default function Controller({ name, artist, urls }) {
  useEffect(() => {
    let value = ((urls.number + 1) * 100) / urls.totale;
    document.documentElement.style.setProperty("--contrast", `${value}%`);
  });
  return (
    <div className="fixed inset-x-0 bottom-0 bg-brand-4">
      <div className="tracker h-[3px]"></div>
      <div className="flex items-center justify-between px-[24px] py-[16px]">
        <div>
          <h3 className="font-brand text-[14px] font-bold text-brand-0">
            {name}
          </h3>
          <p className="font-brand text-[10px] font-normal text-brand-1 opacity-[0.75]">
            {artist}
          </p>
        </div>
        <div className="flex gap-[20px]">
          <Link to={`/${urls.back}`}>
            <img src={back} />
          </Link>
          <Link to={`/${urls.next}`}>
            <img src={next} />
          </Link>
        </div>
      </div>
    </div>
  );
}
