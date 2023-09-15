import { Link } from "react-router-dom";
export default function Thumb({ name, artist, imgUrl }) {
  return (
    <figure className="thumb-grid group relative">
      <span className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-100"></span>
      <Link
        to={`/${name}`}
        className="absolute inset-0 bg-brand-4 opacity-0 transition-opacity group-hover:opacity-50"
      ></Link>
      <img
        src={imgUrl}
        className="max-w-auto col-start-1 col-end-2 row-start-1 row-end-2 h-auto w-auto place-self-stretch object-cover"
      />
      <figcaption className="relative col-start-1 col-end-2 row-start-1 row-end-2 self-end">
        <article className="pb-[33px] px-[33px]">
          <h2 className="font-brand text-[24px] font-bold text-brand-4">
            {name}
          </h2>
          <p className="font-brand text-[13px] font-normal text-brand-4">
            {artist}
          </p>
        </article>
      </figcaption>
    </figure>
  );
}
