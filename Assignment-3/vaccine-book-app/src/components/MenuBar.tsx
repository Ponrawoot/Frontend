import styles from "./menubar.module.css";
import Image from "next/image";
import MenuBarItem from "./MenuBarItem";

export default function MenuBar() {
  return (
    <div className={styles.menucontainer}>
      <Image
        src={"/img/logo.png"}
        className={styles.logoimg}
        alt="logo"
        width={0}
        height={0}
        sizes="100vh"
      />
      <MenuBarItem title="Booking" pageRef="/booking"/>
    </div>
  );
}
