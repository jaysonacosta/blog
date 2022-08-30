import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const path = useRouter().asPath;
  const style = "p-2 select-none cursor-pointer";

  return (
    <>
      <nav className="bg-blue-900 p-2">
        <ul className="flex justify-center items-center">
          <Link href="/">
            <a>
              <li
                className={
                  path === "/" ? `${style} bg-blue-600 rounded` : style
                }
              >
                Home
              </li>
            </a>
          </Link>
          <Link href="/posts">
            <a>
              <li
                className={
                  path === "/posts" ? `${style} bg-blue-600 rounded` : style
                }
              >
                Posts
              </li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li
                className={
                  path === "/about" ? `${style} bg-blue-600 rounded` : style
                }
              >
                About
              </li>
            </a>
          </Link>
        </ul>
      </nav>
      <main className="p-5 flex flex-col">{children}</main>
    </>
  );
};

export default Layout;
