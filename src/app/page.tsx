import styles from "./page.module.css";
import {Footer, Header} from "@/components/index";

const projects = [
  { title: "프로젝트 1", description: "프로젝트 설명을 적어주세요.", link: "#" },
  { title: "프로젝트 2", description: "프로젝트 설명을 적어주세요.", link: "#" },
  { title: "프로젝트 3", description: "프로젝트 설명을 적어주세요.", link: "#" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>안녕하세요, 김고성입니다.</h1>
          <p>프론트엔드 개발자를 꿈꾸고 있습니다.</p>
        </section>

        <section id="about" className={styles.section}>
          <h2>About</h2>
          <p>자기소개를 여기에 작성하세요.</p>
        </section>

        <section id="projects" className={styles.section}>
          <h2>Projects</h2>
          <div className={styles.grid}>
            {projects.map((p) => (
              <a key={p.title} href={p.link} className={styles.card}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <h2>Contact</h2>
          <p>
            이메일: <a href="mailto:iamgosung@gmail.com">iamgosung@gmail.com</a>
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}