import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const title: ITitleProps = {
  "/": "Home",
  "/about": "About",
};

const Seo = () => {
  const router = useRouter();

  return (
    <Head>
      <title>{title[router.pathname]} | Next Movies</title>
    </Head>
  );
};

interface ITitleProps {
  [key: string]: string;
}

export default Seo;
