import React from "react";
import styles from "./Call.module.sass";

export default function Call() {
  return (
    <div className={styles.call}>
      <div className={styles.image}>
        <img className={styles.call_bg} src="images/call_bg.png" alt="phone" />
      </div>
      <div className={styles.call_container}>
        <form className={styles.call_desc}>
          <div className={styles.call_left}>
            <h2>Связь с нами</h2>
            <h4>
              У вас остались вопросы? Напишите нам - мы ответим в ближайшее
              время!
            </h4>
            <div className={styles.left_desc}>
              <div className={styles.call_phone}>
                <div className={styles.phone__icon}>
                  <img className={styles.phone__img} src="images/phone.svg" alt="phone" />
                </div>
                <p>+996 (700) 556 030</p>
              </div>
              <div className={styles.call_email}>
                <div className={styles.email__icon}>
                  <img className={styles.phone__img} src="images/email.svg" alt="phone" />
                </div>
                <p>islam-kurulush.kg</p>
              </div>
            </div>
          </div>
          <div className={styles.call_right}>
            <div className={styles.top_input}>
              <div className={styles.first_input}>
                <span>Имя</span>
                <input placeholder="Имя" />
              </div>
              <div className={styles.second_input}>
                <span>Номер телефона</span>
                <input type='phone' placeholder="+996 123 456" />
              </div>
            </div>
            <div className={`${styles.first_input} ${styles.bottom_input}`}>
              <span>Сообщение</span>
              <input placeholder="Ваше сообщение" />
            </div>
            <button className={styles.submit}>Отправить сообщение</button>
          </div>
        </form>
      </div>
    </div>
  );
}
