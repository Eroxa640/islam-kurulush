import React, { useEffect, useState } from "react";
import styles from "./Reviews.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import axios from "../../api/axios.base";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getReviews = async () => {
      try {
        const res = await axios.get(`/reviews?populate=image`);
        if (!res.data) {
          throw new Error();
        }
        setReviews(res.data.data);
      } catch (error) {
        setReviews(false);
      }
    };
    getReviews();
  }, []);

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
      scale: 0.8,
    },
    visible: (num) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: num * 0.1,
      },
    }),
  };
  return (
    <div className={styles.reviews}>
      <div className={styles.reviews_container}>
        <motion.div
          className={styles.reviews_description}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 1,
          }}
          variants={hiddenVar}
        >
          <h4 className={styles.reviews_title}>Отзывы</h4>
          <h2 className={styles.reviews_thanks}>Ваши благодарности</h2>
        </motion.div>
        <Swiper
          containerModifierClass="slider-"
          pagination={{
            type: "bullets",
            horizontalClass: styles.swiperPaginationHorizontal,
            modifierClass: styles.swiperPagination,
            clickable: true,
          }}
          className="slider"
          modules={[Pagination, Navigation]}
        >
          {reviews?.map((item) => {
            return (
              <SwiperSlide key={item.id} className={styles.grey_block}>
                <div className={styles.review__info}>
                  <motion.h2
                    className={styles.grey_description}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 1,
                    }}
                    variants={firstVar}
                  >
                    {item.description}
                  </motion.h2>
                  <div className={styles.photo_block}>
                    <div className={styles.image}>
                      <motion.img
                        className={styles.img}
                        src={item.image.formats.large.url}
                        alt={item.FIO}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                          once: true,
                          amount: 1,
                        }}
                        variants={hiddenVar}
                      />
                    </div>
                    <div className={styles.photo_description}>
                      <motion.h3
                        className={styles.photo_h3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                          once: true,
                          amount: 1,
                        }}
                        variants={secondVar}
                      >
                        {item.FIO}
                      </motion.h3>
                      <motion.h5
                        className={styles.photo_h5}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                          once: true,
                          amount: 1,
                        }}
                        variants={secondVar}
                      >
                        {item.proffesion}
                      </motion.h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
