import React from "react";
import styles from "./Navbar.module.sass";
import Image from "next/image";
import Logo from "./mainLogo.png";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Image src={Logo} alt="Ислам Курулуш" />
      </div>
    </header>
  );
}
