import React from 'react'
import styles from "../../styles/Services.module.sass"

export default function index() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.title__srv}>Услуги</h1>
        <h1 className={styles.title__srv2}>компании</h1>
      </div>
      <div className={styles.card}>
        <div className={styles.img}>
          <img className={styles.image} src="images/img-servis.png" alt="" />
        </div>
        <div className={styles.info}>
          <p className={styles.info__srv}>Наш девиз - "Cоздание и мастерство на всех этапах строительных и монтажных работ, внимание к деталям и особым пожелания заказчиков. Умение совмещать несовместимое, находить и нестандартные и эффективные методы решения текущих задач, предлагать лучшие варианты реализации проектов в заданных условиях-умения которое дано не каждому"
          </p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.card2}`}>
        <div className={styles.info}>
          <p className={`${styles.info__srv} ${styles.info__srv2}`}>Наш девиз - "Cоздание и мастерство на всех этапах строительных и монтажных работ, внимание к деталям и особым пожелания заказчиков. Умение совмещать несовместимое, находить и нестандартные и эффективные методы решения текущих задач, предлагать лучшие варианты реализации проектов в заданных условиях-умения которое дано не каждому"
          </p>
        </div>
        <div className={styles.img}>
          <img className={styles.image} src="images/img-servis.png" alt="" />
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.img}>
          <img className={styles.image} src="images/img-servis.png" alt="" />
        </div>
        <div className={styles.info}>
          <p className={styles.info__srv}>Наш девиз - "Cоздание и мастерство на всех этапах строительных и монтажных работ, внимание к деталям и особым пожелания заказчиков. Умение совмещать несовместимое, находить и нестандартные и эффективные методы решения текущих задач, предлагать лучшие варианты реализации проектов в заданных условиях-умения которое дано не каждому"</p>
        </div>
      </div>
    </div>
  )
}

