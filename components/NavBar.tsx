import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const router = useRouter();
  console.log(router);

  return (
    <nav>
      <Link href="/">
        <a
          className={`${styles.link} ${
            router.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? styles.active : ""}>
          About
        </a>
      </Link>
    </nav>
  );
};

export default NavBar;
