import React from "react";
import styles from "./Reviews.module.sass";

export default function Reviews() {
  return (
    <div className={styles.reviews}>
      <div className={styles.reviews_container}>
        <div className={styles.reviews_description}>
          <h4 className={styles.reviews_title}>Отзывы</h4>
          <h2 className={styles.reviews_thanks}>Ваши благодарности</h2>
        </div>
        <div className={styles.grey_block}>
          <h2 className={styles.grey_description}>
            Спасибо вам за качествунную квартиру. Живем более 3х лет на квартире
            которая построила компания "Ислам Курулуш"{" "}
          </h2>
          <div className={styles.photo_block}>
            <img src="images/Gulmira-Asanova.png" alt="Гульмира Асанова" />
            <div className={styles.photo_description}>
              <h3 className={styles.photo_h3}>Гульмира Асанова</h3>
              <h5 className={styles.photo_h5}>Домохозяйка</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
