import React, { createContext, useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import raw from "./data.json";
// Create a context
export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://demo5847051.fffmockable.io/art");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("error happened so we are using raw data");
        setData(raw)
      }

    };
    setTimeout(fetchData,3500);
  }, []);
  if (!data) {
    return (
      <div className="grid h-screen animate-bouncy place-items-center">
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
    );
  }
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
