import styles from "./page.module.css";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className={styles.header}>
        <h1>
          ST<span>i</span>AC
        </h1>
        <h2>Study Timer Accuracy <br /> STiAC는 공부 시간 타이머와 정확도 계산기를 합친 형태의, 새로운 공부 시간 타이머입니다.</h2>
      </div>
    </main>
  );
}