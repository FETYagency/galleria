import Hero from "../components/hero";
import { selector } from "../utils/selectData";
import { DataContext } from "../services/provider/dataProvider";
import { useLoaderData } from "react-router-dom";
import { Fragment, useContext, useState } from "react";
import Article from "../components/article";
import Tracker from "../components/tracker";
import View from "../components/imageView";
export function loader({ params }) {
  return params.id;
}
export default function Art() {
  let [showView, setShowView] = useState(false);
  const json = useContext(DataContext);
  const key = useLoaderData();
  const result = selector(json, key);
  return (
    <div className="relative 2xl:flex 2xl:items-stretch 2xl:gap-[30px] 2xl:justify-between">
      {showView && (
        <View
          img={result.images.gallery}
          handler={(Boolean) => setShowView(Boolean)}
        />
      )}
      <Hero
        artist={result.artist}
        artName={result.name}
        artImg={result.images.hero}
        handler={(Boolean) => setShowView(Boolean)}
      />
      <Article
        year={result.year}
        desc={result.description}
        source={result.source}
      />
      <Tracker name={key} artistName={result.artist.name} />
    </div>
  );
}
