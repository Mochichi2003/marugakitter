import "../styles/globals.css";
import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <meta name="google-site-verification" content="72NDna3JeIzeiRmbkUH735GsR2d7uyByb-2JCs_jKA4" />
        {/* <link

          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        /> */}
      </Head>
      <Component {...pageProps} />{" "}
    </>
  );
}

export default MyApp;
