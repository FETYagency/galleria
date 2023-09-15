import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import articles from "../contexts/articlesProvider";
import View from "../components/view";
import max from "../../assets/shared/icon-view-image.svg";
import Controller from "../components/controller";
export function loader({ params }) {
  return params.articleName;
}
export default function Article() {
  const data = useContext(articles);
  const articleName = useLoaderData();
  const content = data.find((per) => per.name === articleName);
  const navigations = (function () {
    const i = data.findIndex((per) => per.name === content.name);
    return {
      number: i,
      totale: data.length,
      back: i === 0 ? data[i].name : data[i - 1].name,
      next: i === data.length - 1 ? data[i].name : data[i + 1].name,
    };
  })();
  let [viewMode, setViewMode] = useState(false);
  return (
    <div className=" layout md:layout-md xl:layout-xl pb-[195px] pt-[24px] md:pb-[150px] xl:flex xl:justify-between">
      {viewMode && (
        <View img={content.images.hero.large} undo={() => setViewMode(false)} />
      )}
      <div className="relative w-fit">
        <img
          className="max-w-full object-cover md:h-[560px] md:w-[475px] xl:h-[560px]"
          src={content.images.hero.small}
        />
        <button
          className="absolute left-[16px] top-[16px] flex items-center gap-[14px] bg-brand-0/70 px-[16px] py-[14px] font-brand text-[10px] font-bold tracking-[2.143px] text-brand-4 md:bottom-[75px] md:top-auto"
          onClick={() => setViewMode(!viewMode)}
        >
          <img src={max} />
          VIEW IMAGE
        </button>
        <div className="absolute bottom-[-20%] max-w-[280px] bg-brand-4 p-[24px] md:bottom-auto md:right-[-45%] md:top-0 md:w-[445px] md:max-w-full md:pb-[65px] md:pl-[65px] xl:right-[-60%]">
          <h2 className="font-brand text-[24px] font-bold leading-[29px] text-brand-0 md:text-[56px] md:leading-[64px]">
            {content.name}
          </h2>
          <p className="font-brand text-[15px] text-brand-1">
            {content.artist.name}
          </p>
          <img
            className="absolute left-0 top-[100%] h-[64px] w-[64px] object-cover md:left-auto md:right-0 md:h-[128px] md:w-[128px] xl:top-[170%]"
            src={content.artist.image}
          />
        </div>
      </div>
      <article className="relative mt-[172px] md:mx-auto md:max-w-[457px] xl:mx-0 xl:w-[476px]">
        <div className="absolute right-[0] top-[-70px] font-brand text-[100px] font-bold leading-[100px] text-brand-3 md:left-[-30%] md:right-auto md:text-[200px] xl:left-auto xl:right-0">
          {content.year}
        </div>
        <p className="relative font-brand text-[14px] font-bold leading-[28px] text-brand-1 xl:max-w-[350px]">
          {content.description}
        </p>
        <a
          href={content.source}
          target="_blank"
          className="mt-[68px] inline-block font-brand text-[9px] font-bold tracking-[1.929px] text-brand-1 underline decoration-solid"
        >
          GO TO SOURCE
        </a>
      </article>
      <Controller
        urls={navigations}
        name={content.name}
        artist={content.artist.name}
      />
    </div>
  );
}
