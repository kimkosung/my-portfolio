import styles from "./page.module.css";
import {Footer, Header} from "@/components/index";
import {About, UserProfile} from "@/sections";

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
      <About />
      <main className={styles.main}>
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
      </main>
      <Footer />
    </>
  );
}