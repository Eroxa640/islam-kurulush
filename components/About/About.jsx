import React from "react"
import styles from "./About.module.sass"

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div className={styles.company}>
          <h3 className={styles.about}>О нас</h3>
          <h3 className={styles.companyNameOne}>Компания</h3>
          <h3 className={styles.companyName}>Ислам Курулуш</h3>
          <div className={styles.top}>
            <p className={styles.parag}>Компания "Ислам Курулуш" по праву занимает пьедестал молодого строительного творчества в Бишкеке.</p>
            <p className={styles.parag2}>Пять лет на региональном рынке позволил пополнить активы компании сотнями крупных и средних проектов самого различного назначения</p>
          </div>
        </div>
        <div className={styles.deals}>
          <div className={styles.deal}>
            <h1 className={styles.deals__number}>200</h1>
            <h3 className={styles.deals__title}>Завершено крупных сделок</h3>
            <h3 className={styles.deals__case}>Все кейсы</h3>
          </div>
          <div className={styles.deal}>
            <h1 className={styles.deals__number}>200</h1>
            <h3 className={styles.deals__title}>Завершено крупных сделок</h3>
            <h3 className={styles.deals__case}>Все кейсы</h3>
          </div>
          <div className={styles.deal}>
            <h1 className={styles.deals__number}>5</h1>
            <h3 className={styles.deals__title}>Завершено крупных сделок</h3>
            <h3 className={styles.deals__case}>Все кейсы</h3>
          </div>
          <div className={styles.deal2}>
            <h1 className={styles.deals__number2}>5</h1>
            <h3 className={styles.deals__title2}>Завершено крупных сделок</h3>
            <h3 className={styles.deals__case2}>Все кейсы</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About