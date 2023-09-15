import { Outlet, useLoaderData } from "react-router-dom";
import articles from "../contexts/articlesProvider";
import data from "../data.json";
import Header from "../components/header";
export default function Root() {
  return (
    <articles.Provider value={data}>
      <Header first={data[0].name} />
      <Outlet />
    </articles.Provider>
  );
}
