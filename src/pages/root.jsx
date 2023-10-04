import { Fragment, createContext, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
export const handleOnSlider = createContext(null);
export default function Root() {
  let [onSlider, setOnSlider] = useState(true);
  return (
    <handleOnSlider.Provider
      value={{
        arrow: (value) => setOnSlider(value),
        value: onSlider,
      }}
    >
      <Fragment>
        <Header />
        <section className="font-design m-auto w-[327px] max-w-full md:w-[688px] 2xl:w-[1360px]">
          <Outlet />
        </section>
      </Fragment>
    </handleOnSlider.Provider>
  );
}
