import React, { useEffect, useState } from "react";
import styles from "./Services.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { EffectCards, Pagination } from "swiper";

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
  return (
    <div className={styles.cards__container}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.about}>
            <p className={styles.about__uslugi}>Наши услуги</p>
            <h3 className={styles.about__title}>Мы специализируемся</h3>
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
              <div className={styles.card__bg}>
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
              </div>
              <div className={styles.card__bg}>
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
              </div>
              <div className={styles.card__bg}>
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
              </div>
              <div className={styles.card__bg}>
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
              </div>
              <div className={styles.card__bg}>
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
              </div>
              <div className={styles.card__bg}>
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
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
