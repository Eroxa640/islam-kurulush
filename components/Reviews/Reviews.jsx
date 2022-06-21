import React, { useEffect, useState } from "react";
import styles from "./Reviews.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import axios from "../../api/axios.base";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

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
  return (
    <div className={styles.reviews}>
      <div className={styles.reviews_container}>
        <div className={styles.reviews_description}>
          <h4 className={styles.reviews_title}>Отзывы</h4>
          <h2 className={styles.reviews_thanks}>Ваши благодарности</h2>
        </div>
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
                  <h2 className={styles.grey_description}>
                    {item.description}
                  </h2>
                  <div className={styles.photo_block}>
                    <div className={styles.image}>
                      <img
                        className={styles.img}
                        src={item.image.formats.large.url}
                        alt={item.FIO}
                      />
                    </div>
                    <div className={styles.photo_description}>
                      <h3 className={styles.photo_h3}>{item.FIO}</h3>
                      <h5 className={styles.photo_h5}>{item.proffesion}</h5>
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
