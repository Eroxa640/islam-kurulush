import React from "react";
import styles from "./Head.module.sass";

export default function MainHead() {
  return (
    <div className={styles.main__header}>
      <div className={styles.container}>
        <div className={styles.block}>
          <h3 className={styles.companyNameOne}>Компания</h3>
          <h3 className={styles.companyName}>Ислам Курулуш</h3>
          <p className={styles.parag}>Cоздание и мастерство на всех этапах строительных и монтажных работ, внимание к деталям и особым пожелания заказчиков. Умение совмещать несовместимое, находить и нестандартные и эффективные методы решения текущих задач, предлагать лучшие варианты реализации проектов в заданных условиях-умения которое дано не каждому</p>
        </div>
      </div>
      <div className={styles.main}>
        <img
          className={styles.main__photo}
          src="/images/MainPhoto.png"
          alt="islamPhoto"
        />
      </div>
    </div>
  );
}
