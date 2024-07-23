import React from "react";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import ChatIcon from "../icon/ChatIcon";

const Layout: React.FC<{ children?: React.ReactNode | JSX.Element }> = ({
  children,
}) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />    
      <button className="fixed active:scale-95 transition-all duration-200 right-8 bottom-5 flex items-center justify-center w-14 h-14 rounded-full bgPrimary shadow-md" >
        <ChatIcon />
      </button>
    </>
  );
};

export default Layout;
