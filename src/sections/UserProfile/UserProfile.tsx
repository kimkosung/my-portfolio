import styles from "./page.module.css";
import { profile } from "./data";

export default function UserProfile() {
  return (
    <section id="profile" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            {profile.status[0]}
          </p>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.role}>{profile.role}</p>
        </header>

        <div className={styles.body}>
          <div className={styles.lead}>
            <p className={styles.intro}>{profile.intro}</p>

            <dl className={styles.info}>
              {profile.info.map((item) => (
                <div key={item.label} className={styles.infoRow}>
                  <dt>{item.label}</dt>
                  <dd>
                    {item.href ? (
                      <a href={item.href}>{item.value}</a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={styles.row}>
            <h2 className={styles.rowTitle}>관심 분야</h2>
            <ul className={styles.interests}>
              {profile.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </div>

          <div className={styles.row}>
            <h2 className={styles.rowTitle}>기술 스택</h2>
            <div className={styles.skills}>
              {profile.skills.map((group) => (
                <div key={group.category} className={styles.skillGroup}>
                  <h3 className={styles.skillCategory}>{group.category}</h3>
                  <ul className={styles.skillList}>
                    {group.items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}