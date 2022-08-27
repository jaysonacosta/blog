import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <nav className="bg-blue-900 p-2">
        <ul className="flex justify-center items-center">
          <li className="p-2 select-none cursor-pointer">Home</li>
          <li className="p-2 select-none cursor-pointer">Posts</li>
          <li className="p-2 select-none cursor-pointer">About</li>
        </ul>
      </nav>
      <main className="p-5 flex flex-col items-center">{children}</main>
    </>
  );
};

export default Layout;
