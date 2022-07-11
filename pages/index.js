import Head from "next/head";
import Services from "../components/Cards/Services";
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
        <meta
          name="description"
          content="Строительная компания 'Ислам Курулуш'"
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
