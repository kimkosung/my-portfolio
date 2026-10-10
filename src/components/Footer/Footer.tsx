import styles from "./page.module.css";

const menus = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/kimkosung" },
  { label: "Velog", href: "https://velog.io/@kando/posts" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ko-kim-5392893b4" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3 className={styles.name}>김고성</h3>
            <p className={styles.tagline}>
              꾸준히 배우고, 성장하는 프론트엔드 개발자입니다.
              <br />
              새로운 기술과 도전을 즐기며, 소통을 최우선으로 생각합니다.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.title}>Menu</h4>
            <ul className={styles.list}>
              {menus.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={styles.link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.title}>Social</h4>
            <ul className={styles.list}>
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.title}>Contact</h4>
            <ul className={styles.list}>
              <li>
                <a href="mailto:your@email.com" className={styles.link}>
                  iamgosung@gmail.com
                </a>
              </li>
              <li className={styles.text}>Seongdoung-gu, Seoul, Korea</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`${styles.container} ${styles.bottomInner}`}>
          <span>© 2026 김고성. All rights reserved.</span>
          <a href="#" className={styles.top}>
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}