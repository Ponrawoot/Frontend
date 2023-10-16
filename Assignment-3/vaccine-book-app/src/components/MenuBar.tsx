import styles from "./menubar.module.css";
import Image from "next/image";
import MenuBarItem from "./MenuBarItem";
import { getServerSession } from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

export default async function MenuBar() {

  const session = await getServerSession(authOptions)

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
      {
          session? <Link href="/api/auth/signout">
            <div className="flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm">
            Sign-Out of {session.user?.name}</div></Link> 
          : <Link href="/api/auth/signin">
            <div className="flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm">
            Sign-In</div></Link>
      }
    </div>
  );
}
