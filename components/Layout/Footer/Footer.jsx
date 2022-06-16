import React from "react";
import styles from "./Footer.module.sass";

export default function Footer() {
  return (
    <header className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.AllRights}>2022 Все права защищены КР</span>
          <span className={styles.madeBy}>Разработано: Calipso</span>
        </div>
      </div>
    </header>
  );
}
