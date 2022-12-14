/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import "../styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
