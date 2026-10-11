import styles from "./page.module.css";
import {Footer, Header} from "@/components/index";
import UserProfile from "@/sections/UserProfile";

const projects = [
  { title: "프로젝트 1", description: "프로젝트 설명을 적어주세요.", link: "#" },
  { title: "프로젝트 2", description: "프로젝트 설명을 적어주세요.", link: "#" },
  { title: "프로젝트 3", description: "프로젝트 설명을 적어주세요.", link: "#" },
];

export default function Home() {
  return (
    <>
      <Header />
      <UserProfile />
      <main className={styles.main}>
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