import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useContext } from "react";
import { DataContext } from "../services/provider/dataProvider";
import { handleOnSlider } from "../pages/root";
export default function Header() {
  const json = useContext(DataContext);
  const handler = useContext(handleOnSlider);
  const { arrow } = handler;
  return (
    <header className="font-design mb-[24px] flex h-[100px] w-full items-center justify-center border-b border-[#E5E5E5] md:mb-[40px] 2xl:mb-[100px]">
      <div className="flex w-[327px] items-center justify-between md:w-[688px] 2xl:w-[1360px]">
        <Link to={"/"} onClick={() => arrow(true)}>
          <img src={logo} className="h-[32px] w-[113px] object-contain" />
        </Link>
        <Link
          to={handler.value ? `/${json[0].name}` : "/"}
          onClick={() => arrow(!handler.value)}
          className="text-[9px] font-bold leading-normal tracking-[1.929px] text-[#7D7D7D]"
        >
          {handler.value ? "START SLIDESHOW" : "STOP SLIDESHOW"}
        </Link>
      </div>
    </header>
  );
}
