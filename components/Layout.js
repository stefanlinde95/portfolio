import React from "react";
import Header from "../components/Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer className="bg-black text-center py-4">Stefan Linde 2023</footer>
    </>
  );
};

export default Layout;
