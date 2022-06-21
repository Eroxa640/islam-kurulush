import React from 'react'
import styles from "../../styles/Services.module.sass"
import { motion, AnimatePresence } from "framer-motion";

export default function index() {
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
    <div className={styles.container}>
      <motion.div
        className={styles.title}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        variants={firstVar}
        custom={0}
      >
        <h1 className={styles.title__srv}>Услуги</h1>
        <h1 className={styles.title__srv2}>компании</h1>
      </motion.div>
      <div className={styles.card}>
        <motion.div
          className={styles.img}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={secondVar}
          custom={0}
        >
          <img className={styles.image} src="images/img-servis.png" alt="" />
        </motion.div>
        <motion.div
          className={styles.info}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={hiddenVar}
          custom={0}
        >
          <p className={styles.info__srv}>Наш девиз - "Cоздание и мастерство на всех этапах строительных и монтажных работ, внимание к деталям и особым пожелания заказчиков. Умение совмещать несовместимое, находить и нестандартные и эффективные методы решения текущих задач, предлагать лучшие варианты реализации проектов в заданных условиях-умения которое дано не каждому"
          </p>
        </motion.div>
      </div>
      <div className={`${styles.card} ${styles.card2}`}>
        <motion.div
          className={styles.info}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={secondVar}
          custom={0}
        >
          <p className={`${styles.info__srv} ${styles.info__srv2}`}>Наш девиз - "Cоздание и мастерство на всех этапах строительных и монтажных работ, внимание к деталям и особым пожелания заказчиков. Умение совмещать несовместимое, находить и нестандартные и эффективные методы решения текущих задач, предлагать лучшие варианты реализации проектов в заданных условиях-умения которое дано не каждому"
          </p>
        </motion.div>
        <motion.div
          className={styles.img}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={firstVar}
          custom={0}
        >
          <img className={styles.image} src="images/img-servis.png" alt="" />
        </motion.div>
      </div>
      <div className={styles.card}>
        <motion.div
          className={styles.img}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={firstVar}
          custom={0}
        >
          <img className={styles.image} src="images/img-servis.png" alt="" />
        </motion.div>
        <motion.div
          className={styles.info}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={secondVar}
          custom={0}
        >
          <p className={styles.info__srv}>Наш девиз - "Cоздание и мастерство на всех этапах строительных и монтажных работ, внимание к деталям и особым пожелания заказчиков. Умение совмещать несовместимое, находить и нестандартные и эффективные методы решения текущих задач, предлагать лучшие варианты реализации проектов в заданных условиях-умения которое дано не каждому"</p>
        </motion.div>
      </div>
    </div>
  )
}

