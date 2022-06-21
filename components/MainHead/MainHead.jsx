import React from "react";
import styles from "./Head.module.sass";
import { motion, AnimatePresence } from "framer-motion";

export default function MainHead() {
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
  return (
    <div className={styles.main__header}>
      <div className={styles.container}>
        <div className={styles.block}>
          <motion.h3
            className={styles.companyNameOne}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 1,
            }}
            variants={firstTeamVar}
            custom={1}
          >
            Компания
          </motion.h3>
          <motion.h3
            className={styles.companyName}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 1,
            }}
            variants={firstTeamVar}
            custom={2}
          >
            Ислам Курулуш
          </motion.h3>
          <motion.p
            className={styles.parag}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 1,
            }}
            variants={secondTeamVar}
            custom={1}
          >
            Cоздание и мастерство на всех этапах строительных и монтажных работ,
            внимание к деталям и особым пожелания заказчиков. Умение совмещать
            несовместимое, находить и нестандартные и эффективные методы решения
            текущих задач, предлагать лучшие варианты реализации проектов в
            заданных условиях-умения которое дано не каждому
          </motion.p>
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
