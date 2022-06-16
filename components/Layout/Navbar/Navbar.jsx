import React from "react";
import styles from "./Navbar.module.sass";
<<<<<<< HEAD
=======
// import Image from "next/image";
// import second from "first";
import Image from "next/image";
import Logo from "./mainLogo.png";
import nav from "../../../data/nav";
import contact from "../../../data/contact";
import Link from "next/link";
>>>>>>> 28b69d89b7da519a155a9c1609f8b58e7bb260f6

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
<<<<<<< HEAD
        {/* <Image src={Logo} alt="Ислам Курулуш" /> */}
=======
        <div className={styles.logoItem}>
          <Image
            src={Logo}
            alt="Ислам Курулуш"
            className={styles.logo__image}
          />
        </div>
        <div className={styles.navList}>
          <nav className={styles.navItem}>
            {contact.map(({ title, link, id }) => {
              return (
                <span key={id} className={styles.contact}>
                  <img
                    className={styles.contact__imgIcon}
                    src={`/images/icons/${link}`}
                    alt={title}
                  />
                  {title}
                </span>
              );
            })}
          </nav>
          <nav className={styles.navItem}>
            {nav.map(({ name, link, id }) => {
              return (
                <Link key={id} href={link}>
                  <a className={styles.nav__link}>{name}</a>
                </Link>
              );
            })}
          </nav>
        </div>
>>>>>>> 28b69d89b7da519a155a9c1609f8b58e7bb260f6
      </div>
    </header>
  );
}
