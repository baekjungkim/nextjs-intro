import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const title: ITitleProps = {
  "/": "Home",
  about: "About",
  movies: "Movies",
};

const Seo = ({ titleName = "" }) => {
  const router = useRouter();
  const pathname = router.pathname.split("/")[1];

  return (
    <Head>
      <title>
        {titleName ? titleName : title[pathname ? pathname : "/"]} | Next Movies
      </title>
    </Head>
  );
};

interface ITitleProps {
  [key: string]: string;
}

export default Seo;
