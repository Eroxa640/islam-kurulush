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
        const res = await axios.get(`/reviews`);
        if (!res.data) {
          throw new Error();
        }
        setReviews(res.data.data);
      } catch (error) {
        setReviews(false);
      }
    };
    getReviews();
    console.log(reviews);
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
          {/* {reviews.map(item => {
            return (
              <SwiperSlide className={styles.grey_block}>
                <div className={styles.review__info}>
                  <h2 className={styles.grey_description}>
                    Спасибо вам за качествунную квартиру. Живем более 3х лет на
                    квартире которая построила компания "Ислам Курулуш"{" "}
                  </h2>
                  <div className={styles.photo_block}>
                    <div className={styles.image}>
                      <img className={styles.img} src="images/Gulmira-Asanova.png" alt="Гульмира Асанова" />
                    </div>
                    <div className={styles.photo_description}>
                      <h3 className={styles.photo_h3}>Гульмира Асанова</h3>
                      <h5 className={styles.photo_h5}>Домохозяйка</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })} */}
          {/* <SwiperSlide className={styles.grey_block}>
            <div className={styles.review__info}>
              <h2 className={styles.grey_description}>
                Спасибо вам за качествунную квартиру. Живем более 3х лет на
                квартире которая построила компания "Ислам Курулуш"{" "}
              </h2>
              <div className={styles.photo_block}>
                <div className={styles.image}>
                  <img className={styles.img} src="images/Gulmira-Asanova.png" alt="Гульмира Асанова" />
                </div>
                <div className={styles.photo_description}>
                  <h3 className={styles.photo_h3}>Гульмира Асанова</h3>
                  <h5 className={styles.photo_h5}>Домохозяйка</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.grey_block}>
            <div className={styles.review__info}>
              <h2 className={styles.grey_description}>
                Спасибо вам за качествунную квартиру. Живем более 3х лет на
                квартире которая построила компания "Ислам Курулуш"{" "}
              </h2>
              <div className={styles.photo_block}>
                <div className={styles.image}>
                  <img className={styles.img} src="images/Gulmira-Asanova.png" alt="Гульмира Асанова" />
                </div>
                <div className={styles.photo_description}>
                  <h3 className={styles.photo_h3}>Гульмира Асанова</h3>
                  <h5 className={styles.photo_h5}>Домохозяйка</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.grey_block}>
            <div className={styles.review__info}>
              <h2 className={styles.grey_description}>
                Спасибо вам за качествунную квартиру. Живем более 3х лет на
                квартире которая построила компания "Ислам Курулуш"{" "}
              </h2>
              <div className={styles.photo_block}>
                <div className={styles.image}>
                  <img className={styles.img} src="images/Gulmira-Asanova.png" alt="Гульмира Асанова" />
                </div>
                <div className={styles.photo_description}>
                  <h3 className={styles.photo_h3}>Гульмира Асанова</h3>
                  <h5 className={styles.photo_h5}>Домохозяйка</h5>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}
