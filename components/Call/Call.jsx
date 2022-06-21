import axios from "../../api/axios.base";
import React, { useEffect, useState } from "react";
import styles from "./Call.module.sass";
import { motion } from "framer-motion";

export default function Call({ margin }) {
  const [message, setMessage] = useState({
    name: "",
    message: "",
    phone: "",
  });
  const onChange = (e) => {
    setMessage((value) => {
      return {
        ...value,
        [e.target.name]: e.target.value,
      };
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const postCall = async () => {
      try {
        const res = await axios.post(`/obratnaya-svyazs`, { data: message });
        if (!res.data) {
          throw new Error();
        }
        setMessage(true);
        alert("Ваше сообщение отправлено");
      } catch (error) {
        setMessage(false);
      }
    };
    postCall();
  };
  const [screenWidth, setScreenWidth] = useState(false);
  const handleWidth = () => {
    const screenWidth = window.screen.width;
    if (screenWidth <= 500) {
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
  let firstVar = {
    hidden: {
      x: -10,
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
    <div style={{ margin: margin + "px auto 0" }} className={styles.call}>
      <div className={styles.image}>
        <img
          className={styles.call_bg}
          src="images/call_bg.png"
          alt="massage"
        />
      </div>
      <div className={styles.call_container}>
        <div className={styles.call_desc}>
          <div className={styles.call_left}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 1,
              }}
              variants={firstVar}
              custom={1}
            >
              Связь с нами
            </motion.h2>
            <motion.h4
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 1,
              }}
              variants={firstVar}
              custom={2}
            >
              У вас остались вопросы? Напишите нам - мы ответим в ближайшее
              время!
            </motion.h4>
            <div className={styles.left_desc}>
              <motion.div
                className={styles.call_phone}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 1,
                }}
                variants={firstVar}
                custom={1}
              >
                <div className={styles.phone__icon}>
                  <img
                    className={styles.phone__img}
                    src="images/phone.svg"
                    alt="phone"
                  />
                </div>
                <p>+996 (700) 556 030</p>
              </motion.div>
              <motion.div
                className={styles.call_email}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 1,
                }}
                variants={firstVar}
                custom={1}
              >
                <div className={styles.email__icon}>
                  <img
                    className={styles.phone__img}
                    src="images/email.svg"
                    alt="phone"
                  />
                </div>
                <p>islam-kurulush.kg</p>
              </motion.div>
            </div>
          </div>

          {screenWidth ? (
            <form onSubmit={onSubmit} className={styles.call_right}>
              <div className={styles.top_input}>
                <div className={styles.first_input}>
                  <span>Имя</span>
                  <input name="name" onChange={onChange} placeholder="Имя" />
                </div>
                <div className={styles.second_input}>
                  <span>Номер телефона</span>
                  <input
                    name="phone"
                    onChange={onChange}
                    type="phone"
                    placeholder="+996 123 456"
                  />
                </div>
              </div>
              <div className={`${styles.first_input} ${styles.bottom_input}`}>
                <span>Сообщение</span>
                <input
                  name="message"
                  onChange={onChange}
                  placeholder="Ваше сообщение"
                />
              </div>
              <button className={styles.submit}>Отправить сообщение</button>
            </form>
          ) : (
            <motion.form
              onSubmit={onSubmit}
              className={styles.call_right}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 1,
              }}
              variants={secondVar}
              custom={1}
            >
              <div className={styles.top_input}>
                <div className={styles.first_input}>
                  <span>Имя</span>
                  <input name="name" onChange={onChange} placeholder="Имя" />
                </div>
                <div className={styles.second_input}>
                  <span>Номер телефона</span>
                  <input
                    name="phone"
                    onChange={onChange}
                    type="phone"
                    placeholder="+996 123 456"
                  />
                </div>
              </div>
              <div className={`${styles.first_input} ${styles.bottom_input}`}>
                <span>Сообщение</span>
                <input
                  name="message"
                  onChange={onChange}
                  placeholder="Ваше сообщение"
                />
              </div>
              <button className={styles.submit}>Отправить сообщение</button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
}
