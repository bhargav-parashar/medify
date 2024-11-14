import React, { useContext, useState } from "react";
const MainContext = React.createContext();

export function useMainContext() {
  return useContext(MainContext);
}

export function MainContextProvider  ({ children }){
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <MainContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </MainContext.Provider>
  );
};

