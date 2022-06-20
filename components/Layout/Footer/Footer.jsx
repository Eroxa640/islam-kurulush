import React from "react";
import styles from "./Footer.module.sass";

export default function Footer() {
  return (
    <header className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.AllRights}>2022 Все права защищены КР</div>
          <div className={styles.madeBy}>Разработано: Calipso</div>
        </div>
      </div>
    </header>
  );
}
