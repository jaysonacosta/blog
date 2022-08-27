import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <nav className="bg-blue-900 p-2">
      <ul className="flex justify-center items-center">
        <li className="p-2">Home</li>
        <li className="p-2">Posts</li>
        <li className="p-2">About</li>
      </ul>
    </nav>
    <main>{children}</main>
  </>
);

export default Layout;
