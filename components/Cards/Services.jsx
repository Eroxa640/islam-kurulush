import React from 'react'
import styles from "./Services.module.sass"

export default function Services() {
    return (
    <div className={styles.container}>
        <h5 className={styles.h5__service}>Наши услуги</h5>
        <h1 className={styles.h1__service}>Мы специализируемся</h1>
        <div className={styles.cards}>
          <div className={styles.card}>
                <img src="images/img-services.png" alt="" className={styles.img__service} />
                <h2 className={styles.h2__service}>Строительстве нового поколения жилых домов</h2>
          </div>
          <div className={styles.card}>
                          <img src="images/img-services.png" alt="" className={`${styles.img__service} ${styles.img__srv}`} />
                          <h2 className={`${styles.h2__service} ${styles.h2__srv}`}>Строительстве нового поколения жилых домов</h2>
                    </div>
                    <div className={styles.card}>
                          <img src="images/img-services.png" alt="" className={`${styles.img__service} ${styles.img__srv}`} />
                          <h2 className={`${styles.h2__service} ${styles.h2__srv}`}>Строительстве нового поколения жилых домов</h2>
                    </div>
                  <div className={styles.card}>
                            <img src="images/img-services.png" alt="" className={`${styles.img__service} ${styles.img__srv}`} />
                            <h2 className={`${styles.h2__service} ${styles.h2__srv}`}>Строительстве нового поколения жилых домов</h2>
                      </div>
                      <div className={styles.card}>
                            <img src="images/img-services.png" alt="" className={`${styles.img__service} ${styles.img__srv}`} />
                            <h2 className={`${styles.h2__service} ${styles.h2__srv}`}>Строительстве нового поколения жилых домов</h2>
                      </div>
                  
                      <div className={styles.card}>
                            <img src="images/img-services.png" alt="" className={`${styles.img__service} ${styles.img__srv}`}/>
                            <h2 className={`${styles.h2__service} ${styles.h2__srv}`}>Строительстве нового поколения жилых домов</h2>
                      </div>         
              </div>
        </div>
    )
}
