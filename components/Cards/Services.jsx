import React from "react";
import styles from "./Services.module.sass";

export default function Services() {
  return (
    <div className={styles.cards__container}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.about}>
            <p className={styles.about__uslugi}>Наши услуги</p>
            <h3 className={styles.about__title}>Мы специализируемся</h3>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.card__bg}>
                <img
                  src="images/img-services.png"
                  alt="Строительстве нового поколения жилых домов"
                  className={styles.card__image}
                />
                <h3 className={styles.card__title}>
                  Строительстве нового поколения жилых домов
                </h3>
              </div>
            </div>
            {/* <div className={styles.card}>
              <div className={styles.card__bg}>
                <img
                  src="images/img-services.png"
                  alt="Строительстве нового поколения жилых домов"
                  className={styles.card__image}
                />
              </div>
              <div>
                <h3 className={styles.card__title}>
                  Строительстве нового поколения жилых домов
                </h3>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card__bg}>
                <img
                  src="images/img-services.png"
                  alt="Строительстве нового поколения жилых домов"
                  className={styles.card__image}
                />
              </div>
              <div>
                <h3 className={styles.card__title}>
                  Строительстве нового поколения жилых домов
                </h3>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card__bg}>
                <img
                  src="images/img-services.png"
                  alt="Строительстве нового поколения жилых домов"
                  className={styles.card__image}
                />
              </div>
              <div>
                <h3 className={styles.card__title}>
                  Строительстве нового поколения жилых домов
                </h3>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card__bg}>
                <img
                  src="images/img-services.png"
                  alt="Строительстве нового поколения жилых домов"
                  className={styles.card__image}
                />
              </div>
              <div>
                <h3 className={styles.card__title}>
                  Строительстве нового поколения жилых домов
                </h3>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card__bg}>
                <img
                  src="images/img-services.png"
                  alt="Строительстве нового поколения жилых домов"
                  className={styles.card__image}
                />
              </div>
              <div>
                <h3 className={styles.card__title}>
                  Строительстве нового поколения жилых домов
                </h3>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
