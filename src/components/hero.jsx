import view from "../assets/icon-view-image.svg";
export default function Hero({ artist, artImg, artName, handler }) {
  return (
    <figure className="relative flex-1">
      <div className="relative">
        <button
          className="absolute left-[14px] top-[16px] flex items-center gap-[16px] bg-black/75 p-[16px] uppercase text-white md:bottom-[16px] md:top-auto"
          onClick={() => handler(true)}
        >
          <img src={view} />
          <span>view image</span>
        </button>
        <img
          src={artImg.small}
          className="md:h-[560px] md:w-[475px] md:object-cover"
        />
      </div>
      <figcaption className="absolute bottom-[-125px] md:bottom-auto md:right-0 md:top-0 2xl:static">
        <div className="w-[280px] bg-white p-[24px] md:w-[445px] md:pb-[67px] md:pl-[64px] md:pr-[40px] md:pt-0 2xl:absolute 2xl:right-0 2xl:top-0">
          <h3 className="text-[24px] font-bold leading-[29px] text-black md:text-[56px] md:leading-[64px]">
            {artName}
          </h3>
          <p className="text-[15px] font-normal leading-normal text-[#7D7D7D]">
            {artist.name}
          </p>
        </div>
        <img
          className="h-[64px] w-[64px] object-cover md:ml-auto md:h-[128px] md:w-[128px] 2xl:absolute 2xl:bottom-[-64px] 2xl:left-[510px]"
          src={artist.image}
        />
      </figcaption>
    </figure>
  );
}
