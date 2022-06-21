import React from "react";
import styles from "./About.module.sass";
import { motion, AnimatePresence } from "framer-motion";

function About() {
  //motion
  let firstTeamVar = {
    hidden: {
      x: -40,
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
  let secondTeamVar = {
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
    <div className={styles.container}>
      <div className={styles.flex}>
        <motion.div
          className={styles.company}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={firstTeamVar}
          custom={0}
        >
          <h3 className={styles.about}>О нас</h3>
          <div className={styles.block}>
            <h3 className={styles.companyNameOne}>Компания</h3>
            <h3 className={styles.companyName}>Ислам Курулуш</h3>
          </div>
          <motion.div
            className={styles.top}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={firstTeamVar}
            custom={1}
          >
            <p className={styles.parag}>
              Компания "Ислам Курулуш" по праву занимает пьедестал молодого
              строительного творчества в Бишкеке.
            </p>
            <p className={styles.parag2}>
              Пять лет на региональном рынке позволил пополнить активы компании
              сотнями крупных и средних проектов самого различного назначения
            </p>
          </motion.div>
        </motion.div>
        <div className={styles.deals}>
          <motion.div
            className={styles.deal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={hiddenVar}
            custom={1}
          >
            <h1 className={styles.deals__number}>200</h1>
            <h3 className={styles.deals__title}>Завершено крупных сделок</h3>
          </motion.div>
          <motion.div
            className={styles.deal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={hiddenVar}
            custom={2}
          >
            <h1 className={styles.deals__number}>200</h1>
            <h3 className={styles.deals__title}>Завершено крупных сделок</h3>
          </motion.div>
          <motion.div
            className={styles.deal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={hiddenVar}
            custom={3}
          >
            <h1 className={styles.deals__number}>5</h1>
            <h3 className={styles.deals__title}>Завершено крупных сделок</h3>
          </motion.div>
          <motion.div
            className={styles.deal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={hiddenVar}
            custom={4}
          >
            <h1 className={styles.deals__number}>5</h1>
            <h3 className={styles.deals__title}>Завершено крупных сделок</h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
