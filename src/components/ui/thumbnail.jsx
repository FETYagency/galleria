import { Link } from "react-router-dom";
import { handleOnSlider } from "../../pages/root";
import { useContext } from "react";
export default function Thumbnail({ data }) {
  const handler = useContext(handleOnSlider);
  const { arrow, value } = handler;
  return (
    <Link
      to={`/${data.name}`}
      onClick={() => arrow(!value)}
      className="group relative grid w-fit grid-cols-1 grid-rows-1"
    >
      <div className="absolute inset-0 bg-white/0 transition-colors group-hover:bg-white/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <img className="col-start-1 row-start-1" src={data.images.thumbnail} />
      <div className="relative col-start-1 row-start-1 mb-[33px] ml-[32px] max-w-[246px] self-end">
        <h2 className="text-[24px] font-bold leading-normal text-white">
          {data.name}
        </h2>
        <p className="text-[13px] font-normal leading-normal text-white/75">
          {data.artist.name}
        </p>
      </div>
    </Link>
  );
}
