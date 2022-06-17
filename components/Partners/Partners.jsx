import React from 'react'
import styles from './Partners.module.sass'

function Partners() {
  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <h3 className={styles.partnerName}>Наш партнёр</h3>
        <div className={styles.flex}>
          <div className={styles.partner}>
            <h1 className={styles.work}>С нами работает</h1>
            <div className={styles.top}>
              <img className={styles.euroasia__logo} src="images/euroasia-logo.png" alt="" />
            </div>
          </div>
          <div className={styles.partner__about}>
            <p className={styles.parag}>Компания "Eurasia Kyrgyzstan" скупкой недвижимости.</p>
            <p className={styles.parag2}>4 года скупают и продают высококачественные квартиры. Опыт в этой сфере очень велик
Можете обращаться по адресу номеру 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners