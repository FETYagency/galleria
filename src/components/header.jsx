import { Link } from "react-router-dom";
import logo from "../shared/logo.svg";
export default function Header({first}) {
  return (
    <header className="border-b-[1px] border-brand-2 py-[24px]">
      <div className="layout md:layout-md xl:layout-xl flex items-center justify-between">
        <Link to={"/"} className="grid h-[32px] w-[113px] place-items-center">
          <img src={logo} />
        </Link>
        <Link to={`/${first}`} className="font-brand text-[9px] text-brand-1">START SLIDESHOW</Link>
      </div>
    </header>
  );
}
