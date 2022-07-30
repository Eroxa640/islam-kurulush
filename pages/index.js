import Head from "next/head";
import Services from "../components/Services/Services";
import Reviews from "../components/Reviews/Reviews";
import About from "../components/About/About";
import Partners from "../components/Partners/Partners";
import styles from "../styles/Home.module.sass";
import Call from "../components/Call/Call";
import MainHead from "../components/MainHead/MainHead";
import { useEffect, useState } from "react";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(130);
  const handleWidth = () => {
    const screenWidth = window.screen.width;
    if (screenWidth >= 900) {
      setScreenWidth(130);
    } else if (screenWidth <= 900) {
      setScreenWidth(80);
    }
  };
  useEffect(() => {
    handleWidth();
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Главная</title>
        <meta name="title" content="Ислам Курулуш - строительная компания" />
        <meta
          name="description"
          content="Cоздание и мастерство на всех этапах строительных и монтажных работ, внимание к деталям и особым пожелания заказчиков. Умение совмещать несовместимое, находить и нестандартные и эффективные методы решения текущих задач, предлагать лучшие варианты реализации проектов в заданных условиях-умения которое дано не каждому"
        />
        <meta
          name="keywords"
          content="Ислам Курулуш - строительная компания, Ислам Курулуш строительная компания, квартиры, ислам курулуш, строительная компания, квартиры бишкек"
        />
        <meta
          name="google-site-verification"
          content="FLObvqR9hln9l2KXxP4JCIdK5dJG7-CMNngQ9jmY67Q"
        />
        <meta
          name="robots"
          content="Ислам Курулуш - строительная компания, Ислам Курулуш строительная компания, квартиры, Квартиры Бишкек строительная компания, квартиры бишкек"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHead />
      <Services />
      <About />
      <Partners />
      <Reviews />
      <Call margin={screenWidth} />
    </div>
  );
}
