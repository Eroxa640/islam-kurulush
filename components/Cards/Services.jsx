import React, { useEffect, useState } from "react";
import styles from "./Services.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { EffectCards, Pagination } from "swiper";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [screenWidth, setScreenWidth] = useState(false);
  const handleWidth = () => {
    const screenWidth = window.screen.width;
    if (screenWidth <= 900) {
      setScreenWidth(true);
    } else {
      setScreenWidth(false);
    }
  };
  useEffect(() => {
    handleWidth();
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

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
        duration: 0.5,
        delay: num * 0.1,
      },
    }),
  };
  return (
    <div className={styles.cards__container}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.about}>
            <motion.p
              className={styles.about__uslugi}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 1,
              }}
              variants={firstTeamVar}
              custom={1}
            >
              Наши услуги
            </motion.p>
            <motion.h3
              className={styles.about__title}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 1,
              }}
              variants={firstTeamVar}
              custom={1}
            >
              Мы специализируемся
            </motion.h3>
          </div>
          {screenWidth ? (
            <Swiper
              pagination={{
                clickable: true,
              }}
              effect={"cards"}
              modules={[Pagination, EffectCards]}
              className={styles.cards}
            >
              <SwiperSlide className={styles.card__bg}>
                <img
                  src="images/img-services.png"
                  alt="Строительстве нового поколения жилых домов"
                  className={styles.card__image}
                />
                <div className={styles.titleItem}>
                  <h3 className={styles.card__title}>
                    Строительстве нового поколения жилых домов
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.card__bg}>
                <img
                  src="images/img-services.png"
                  alt="Строительстве нового поколения жилых домов"
                  className={styles.card__image}
                />
                <div className={styles.titleItem}>
                  <h3 className={styles.card__title}>
                    Строительстве нового поколения жилых домов
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.card__bg}>
                <img
                  src="images/img-services.png"
                  alt="Строительстве нового поколения жилых домов"
                  className={styles.card__image}
                />
                <div className={styles.titleItem}>
                  <h3 className={styles.card__title}>
                    Строительстве нового поколения жилых домов
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.card__bg}>
                <img
                  src="images/img-services.png"
                  alt="Строительстве нового поколения жилых домов"
                  className={styles.card__image}
                />
                <div className={styles.titleItem}>
                  <h3 className={styles.card__title}>
                    Строительстве нового поколения жилых домов
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.card__bg}>
                <img
                  src="images/img-services.png"
                  alt="Строительстве нового поколения жилых домов"
                  className={styles.card__image}
                />
                <div className={styles.titleItem}>
                  <h3 className={styles.card__title}>
                    Строительстве нового поколения жилых домов
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.card__bg}>
                <img
                  src="images/img-services.png"
                  alt="Строительстве нового поколения жилых домов"
                  className={styles.card__image}
                />
                <div className={styles.titleItem}>
                  <h3 className={styles.card__title}>
                    Строительстве нового поколения жилых домов
                  </h3>
                </div>
              </SwiperSlide>
            </Swiper>
          ) : (
            <div className={styles.cards}>
              <motion.div
                className={styles.card__bg}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                variants={secondTeamVar}
                custom={1}
              >
                <img
                  src="images/img-services.png"
                  alt="Строительстве нового поколения жилых домов"
                  className={styles.card__image}
                />
                <div className={styles.titleItem}>
                  <h3 className={styles.card__title}>
                    Строительстве нового поколения жилых домов
                  </h3>
                </div>
              </motion.div>
              <motion.div
                className={styles.card__bg}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                variants={secondTeamVar}
                custom={2}
              >
                <img
                  src="images/img-services.png"
                  alt="Строительстве нового поколения жилых домов"
                  className={styles.card__image}
                />
                <div className={styles.titleItem}>
                  <h3 className={styles.card__title}>
                    Строительстве нового поколения жилых домов
                  </h3>
                </div>
              </motion.div>
              <motion.div
                className={styles.card__bg}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                variants={secondTeamVar}
                custom={3}
              >
                <img
                  src="images/img-services.png"
                  alt="Строительстве нового поколения жилых домов"
                  className={styles.card__image}
                />
                <div className={styles.titleItem}>
                  <h3 className={styles.card__title}>
                    Строительстве нового поколения жилых домов
                  </h3>
                </div>
              </motion.div>
              <motion.div
                className={styles.card__bg}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                variants={secondTeamVar}
                custom={4}
              >
                <img
                  src="images/img-services.png"
                  alt="Строительстве нового поколения жилых домов"
                  className={styles.card__image}
                />
                <div className={styles.titleItem}>
                  <h3 className={styles.card__title}>
                    Строительстве нового поколения жилых домов
                  </h3>
                </div>
              </motion.div>
              <motion.div
                className={styles.card__bg}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                variants={secondTeamVar}
                custom={5}
              >
                <img
                  src="images/img-services.png"
                  alt="Строительстве нового поколения жилых домов"
                  className={styles.card__image}
                />
                <div className={styles.titleItem}>
                  <h3 className={styles.card__title}>
                    Строительстве нового поколения жилых домов
                  </h3>
                </div>
              </motion.div>
              <motion.div
                className={styles.card__bg}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                variants={secondTeamVar}
                custom={6}
              >
                <img
                  src="images/img-services.png"
                  alt="Строительстве нового поколения жилых домов"
                  className={styles.card__image}
                />
                <div className={styles.titleItem}>
                  <h3 className={styles.card__title}>
                    Строительстве нового поколения жилых домов
                  </h3>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
