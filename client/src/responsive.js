import React from "react";
import { useMediaQuery } from "react-responsive";

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return <>{isMobile && children}</>;
};

export const Pc = ({ children }) => {
  const isTablet = useMediaQuery({
    query: "(min-width:769px)",
  });
  return <>{isTablet && children}</>;
};
