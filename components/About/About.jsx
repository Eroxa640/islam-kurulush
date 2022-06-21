import React from "react"
import styles from "./About.module.sass"

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div className={styles.company}>
          <h3 className={styles.about}>О нас</h3>
          <div className={styles.block}>
            <h3 className={styles.companyNameOne}>Компания</h3>
            <h3 className={styles.companyName}>Ислам Курулуш</h3>
          </div>
          <div className={styles.top}>
            <p className={styles.parag}>Компания "Ислам Курулуш" по праву занимает пьедестал молодого строительного творчества в Бишкеке.</p>
            <p className={styles.parag2}>Пять лет на региональном рынке позволил пополнить активы компании сотнями крупных и средних проектов самого различного назначения</p>
          </div>
        </div>
        <div className={styles.deals}>
          <div className={styles.deal}>
            <h1 className={styles.deals__number}>200</h1>
            <h3 className={styles.deals__title}>Завершено крупных сделок</h3>
          </div>
          <div className={styles.deal}>
            <h1 className={styles.deals__number}>200</h1>
            <h3 className={styles.deals__title}>Завершено крупных сделок</h3>
          </div>
          <div className={styles.deal}>
            <h1 className={styles.deals__number}>5</h1>
            <h3 className={styles.deals__title}>Завершено крупных сделок</h3>
          </div>
          <div className={styles.deal}>
            <h1 className={styles.deals__number}>5</h1>
            <h3 className={styles.deals__title}>Завершено крупных сделок</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About