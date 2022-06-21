import React from "react";
import Call from "../../components/Call/Call.jsx";
import styles from "../../styles/About.module.sass";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  let firstVar = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: (num) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: num * 0.1,
      },
    }),
  };
  let secondVar = {
    hidden: {
      x: 40,
      opacity: 0,
    },
    visible: (num) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: num * 0.1,
      },
    }),
  };
  let hiddenVar = {
    hidden: {
      opacity: 0,
    },
    visible: (num) => ({
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: num * 0.1,
      },
    }),
  };
  return (
    <div>
      <div className={styles.about}>
        <div className={styles.about_container}>
          <div className={styles.about_title}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={firstVar}
              custom={0}
            >
              Компания <h3>Ислам Курулуш</h3>
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={secondVar}
              custom={0}
            >
              Компания "Ислам Курулуш" по праву занимает пьедестал молодого
              строительного творчества в Бишкеке.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={secondVar}
              custom={0}
            >
              Пять лет на региональном рынке позволил пополнить активы компании
              сотнями крупных и средних проектов самого различного назначения
            </motion.p>
          </div>
          <div className={styles.about_desc}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={firstVar}
              custom={0}
            >Наш девиз</motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={secondVar}
              custom={0}
            >
              Наш девиз - "Cоздание и мастерство на всех этапах строительных и
              монтажных работ, внимание к деталям и особым пожелания заказчиков.
              Умение совмещать несовместимое, находить и нестандартные и
              эффективные методы решения текущих задач, предлагать лучшие
              варианты реализации проектов в заданных условиях-умения которое
              дано не каждому"
            </motion.p>
          </div>

          <div className={styles.about_desc}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={firstVar}
              custom={0}
            >Наша миссия</motion.h2>
            <p>
              Миссия компания "Создание конечного строительного
              продукта,полностью отвечающего планам заказчика и его
              индивидуальным эстетическим ожиданиям."
            </p>
          </div>

          <div className={styles.about_desc}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={firstVar}
              custom={0}
            >Как мы работаем</motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={secondVar}
              custom={0}
            >
              Созидаем, строим и реализуем проекты любой степени сложности с
              полной отдачей сил, мастерства и опыта. Все работы выполняются на
              совесть Соблюдение сроков и обязательств Профессиональный подход к
              делу и высокий уровень ответственности позволяют в итоге создать
              строительный продукт.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
