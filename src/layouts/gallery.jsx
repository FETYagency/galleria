import { Fragment, useContext } from "react";
import Thumb from "../components/thumbnail";
import articles from "../contexts/articlesProvider";

export default function Gallery() {
  const data = useContext(articles);
  let content = data.map((per) => {
    return (
      <Thumb
        name={per.name}
        artist={per.artist.name}
        imgUrl={per.images.thumbnail}
      />
    );
  });
  return (
    <section className="layout md:layout-md xl:layout-xl grid gap-[24px] py-[24px] md:grid-cols-2 xl:grid-cols-4">
      {content}
    </section>
  );
}
