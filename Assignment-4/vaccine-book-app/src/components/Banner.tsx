import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image src={"/img/cover.jpg"} alt="cover" fill={true} objectFit="cover" />
      <div className={styles.bannerText}>
        <h1>Get vaccinated today to protect yourself and your community.</h1>
        <h3>Together, we can beat this pandemic.</h3>
      </div>
    </div>
  );
}