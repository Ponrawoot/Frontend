import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <Banner/>
        <div style={{margin:"20px",display:"flex",flexDirection:"row",alignContent:"space-around",justifyContent:"space-around",flexWrap:"wrap"}}>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
    </main>
  );
}
