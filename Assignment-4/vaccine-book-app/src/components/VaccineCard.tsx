import styles from "./vaccinecard.module.css";
import Image from "next/image";

export default function VaccineCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image
          src={"/img/vaccine1.jpg"}
          alt="Vaccine Picture"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className={styles.cardtext}>"Vaccines save lives by training your immune system to fight diseases. Protect yourself and others – get vaccinated."</div>
    </div>
  );
}
