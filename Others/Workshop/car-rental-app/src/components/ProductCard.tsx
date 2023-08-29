import styles from "./productcard.module.css";
import Image from "next/image";

export default function ProductCard({ carName, imgSrc} : {carName:string,imgSrc:string}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image
          src={imgSrc}
          alt="Product Picture"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className={styles.cardtext}>{carName}</div>
    </div>
  );
}
