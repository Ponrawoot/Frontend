import Link from "next/link";
import styles from "./menubar.module.css"

export default function MenuBarItem({ title, pageRef } : { title:string, pageRef:string}) {
    return (
        <Link href={pageRef} className={styles.itemcontainer}>
            {title}
        </Link>
    );
}