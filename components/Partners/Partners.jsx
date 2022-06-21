import React from "react";
import styles from "./Partners.module.sass";
import { motion } from "framer-motion";

function Partners() {
  //motion
  let firstVar = {
    hidden: {
      x: -5,
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
      scale: 0.8,
    },
    visible: (num) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: num * 0.1,
      },
    }),
  };
  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <motion.h3
          className={styles.partnerName}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 1,
          }}
          variants={firstVar}
          custom={1}
        >
          Наш партнёр
        </motion.h3>
        <div className={styles.flex}>
          <div className={styles.partner}>
            <motion.h1
              className={styles.work}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 1,
              }}
              variants={firstVar}
              custom={1}
            >
              С нами работает
            </motion.h1>
            <motion.div
              className={styles.top}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 1,
              }}
              variants={hiddenVar}
              custom={1}
            >
              <img
                className={styles.euroasia__logo}
                src="images/euroasia-logo.png"
                alt=""
              />
            </motion.div>
          </div>
          <motion.div
            className={styles.partner__about}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 1,
            }}
            variants={hiddenVar}
            custom={1}
          >
            <p className={styles.parag}>
              Компания "Eurasia Kyrgyzstan" скупкой недвижимости.
            </p>
            <p className={styles.parag2}>
              4 года скупают и продают высококачественные квартиры. Опыт в этой
              сфере очень велик
              <span className={styles.partnerNumber__des}>
                Можете обращаться по номеру:
                <a href="number" className={styles.partner__number}>
                  +996 (700) 556 030
                </a>
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
