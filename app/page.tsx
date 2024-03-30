import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <div className={styles.launch}>
        <h1>
          현재 STiAC를 개발하고 있습니다. 곧 런칭될 예정입니다.
        </h1>
        <h2>런칭되면 해당 웹사이트에 바로 안내해드리겠습니다. 조금만 기다려주세요!</h2>
      </div>
      <Footer />
    </main>
  );
}