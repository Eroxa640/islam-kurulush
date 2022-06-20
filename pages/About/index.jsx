import React from "react";
import Call from "../../components/Call/Call.jsx";
import styles from "../../styles/About.module.sass";

export default function About() {
  return (
    <div>
      <div className={styles.about}>
        <div className={styles.about_container}>
          <div className={styles.about_title}>
            <h1>
              Компания <span>Ислам Курулуш</span>
            </h1>
            <p>
              Компания "Ислам Курулуш" по праву занимает пьедестал молодого
              строительного творчества в Бишкеке.
            </p>
            <p>
              Пять лет на региональном рынке позволил пополнить активы компании
              сотнями крупных и средних проектов самого различного назначения
            </p>
          </div>
          <div className={styles.about_desc}>
            <h2>Наш девиз</h2>
            <p>
              Наш девиз - "Cоздание и мастерство на всех этапах строительных и
              монтажных работ, внимание к деталям и особым пожелания заказчиков.
              Умение совмещать несовместимое, находить и нестандартные и
              эффективные методы решения текущих задач, предлагать лучшие
              варианты реализации проектов в заданных условиях-умения которое
              дано не каждому"
            </p>
          </div>

          <div className={styles.about_desc}>
            <h2>Наша миссия</h2>
            <p>
              Миссия компания "Создание конечного строительного
              продукта,полностью отвечающего планам заказчика и его
              индивидуальным эстетическим ожиданиям."
            </p>
          </div>

          <div className={styles.about_desc}>
            <h2>Как мы работаем</h2>
            <p>
              Созидаем, строим и реализуем проекты любой степени сложности с
              полной отдачей сил, мастерства и опыта. Все работы выполняются на
              совесть Соблюдение сроков и обязательств Профессиональный подход к
              делу и высокий уровень ответственности позволяют в итоге создать
              строительный продукт.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}