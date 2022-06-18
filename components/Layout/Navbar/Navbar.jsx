import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.sass";
import Image from "next/image";
import Logo from "./mainLogo.svg";
import nav from "../../../data/nav";
import contact from "../../../data/contact";
import Link from "next/link";
import { Slant as Hamburger } from "hamburger-react";
import cn from "classnames";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);
  // useEffect(() => {
  //   let elHeight = document.getElementById("container").clientHeight;
  //   console.log(elHeight);
  // }, []);
  return (
    <header className={styles.navbar}>
      <div id="container" className={styles.container}>
        <div className={styles.logoItem}>
          <Image
            src={Logo}
            alt="Ислам Курулуш"
            className={styles.logo__image}
          />
        </div>
        <div
          className={cn(styles.navList, {
            [styles.navListVisible]: isOpen,
          })}
        >
          <nav className={`${styles.navItem} ${styles.navContact}`}>
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
        <div className={styles.hamburger}>
          <Hamburger
            color="rgba(12,64,131,1)"
            size={30}
            toggled={isOpen}
            toggle={setOpen}
            onToggle={(setOpen) => !setOpen}
          />
        </div>
      </div>
    </header>
  );
}
