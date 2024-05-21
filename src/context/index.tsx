import React, { useContext, useState, createContext, ReactNode } from "react";
import {NavbarContextInterface} from "../interfaces"


export const NavbarContext = createContext<NavbarContextInterface | null>(null);

export const NavbarContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [navbar, setNavbar] = useState<boolean>(false);

  return (
    <NavbarContext.Provider value={{ navbar, setNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () =>  useContext<NavbarContextInterface | null>(NavbarContext);

export default NavbarContextProvider;
