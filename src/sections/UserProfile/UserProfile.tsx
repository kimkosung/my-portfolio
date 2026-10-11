import styles from "./page.module.css";
import { profile } from "./data";

export default function UserProfile() {
  return (
    <section id="profile" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Profile</p>

        <div className={styles.layout}>
          {/* 왼쪽: 기본 정보 카드 */}
          <aside className={styles.card}>
            <h2 className={styles.name}>{profile.name}</h2>
            <p className={styles.role}>{profile.role}</p>

            <span className={styles.status}>
              <span className={styles.dot} />
              {profile.status[0]}
            </span>

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
          </aside>

          {/* 오른쪽: 소개 / 관심 분야 / 스킬 */}
          <div className={styles.content}>
            <p className={styles.intro}>{profile.intro}</p>

            <div className={styles.block}>
              <h3 className={styles.blockTitle}>관심 분야</h3>
              <ul className={styles.tags}>
                {profile.interests.map((interest) => (
                  <li key={interest} className={styles.tag}>
                    {interest}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.block}>
              <h3 className={styles.blockTitle}>기술 스택</h3>
              <div className={styles.skills}>
                {profile.skills.map((group) => (
                  <div key={group.category} className={styles.skillGroup}>
                    <span className={styles.skillCategory}>{group.category}</span>
                    <ul className={styles.tags}>
                      {group.items.map((skill) => (
                        <li key={skill} className={`${styles.tag} ${styles.skill}`}>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}