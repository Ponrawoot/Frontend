import Banner from "@/components/Banner";
import CarPanel from "@/components/CarPanel";
import ProductCard from "@/components/ProductCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
        <Banner/>
        <CarPanel/>
    </main>
  );
}
