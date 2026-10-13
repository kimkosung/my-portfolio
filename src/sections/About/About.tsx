import styles from "./page.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.body}>
          <div className={styles.row}>
            <p className={styles.text}>
                고등학교 시절 대학 진학에 실패하며 자신감을 잃었지만, 목표를 세우고 꾸준히 노력한 끝에 원하는 대학에 진학했습니다. 대학에서도 진로를 찾지 못해 방황했지만, 프로젝트를 통해 프론트엔드 개발의 즐거움을 발견하고 스스로 배우며 성장해 왔습니다. 또한 다양한 프로젝트를 경험하며 좋은 결과는 개인의 역량만이 아니라 서로 다른 생각과 관점을 나누고 함께 문제를 해결하는 과정에서 만들어진다는 것을 배웠습니다. 저는 새로운 경험을 통해 부족한 점을 발견하고 이를 채워 나가는 과정에서 성장의 즐거움을 느낍니다. 앞으로도 다양한 사람들과 소통하며 제가 미처 보지 못했던 관점을 배우고, 더 넓은 시야로 세상을 바라보며 함께 성장하는 개발자가 되고 싶습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}