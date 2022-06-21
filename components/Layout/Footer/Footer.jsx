import React from "react";
import styles from "./Footer.module.sass";
import { motion } from "framer-motion";

export default function Footer() {
  //motion
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
      x: 20,
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
    <header className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.AllRights}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 1,
            }}
            variants={firstVar}
          >
            2022 Все права защищены КР
          </motion.div>
          <motion.div
            className={styles.madeBy}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 1,
            }}
            variants={secondVar}
          >
            Разработано: Calipso
          </motion.div>
        </div>
      </div>
    </header>
  );
}
