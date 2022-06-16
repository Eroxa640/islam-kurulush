import React from "react";
import styles from "./Head.module.sass";

export default function MainHead() {
  return (
    <div className={styles.main__header}>
      <div className={styles.container}></div>
      <img
        className={styles.main__photo}
        src="/images/mainPhoto.jpg"
        alt="islamPhoto"
      />
    </div>
  );
}
