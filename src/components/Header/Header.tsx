"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const IMG_URL = "/kks_logo.png"; // 이미지 경로를 상수로 정의

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div
        className={`${styles.headerContent} ${scrolled ? styles.scrolled : ""}`}
      >
        <Link href="/" className={styles.logo}>
          <Image src={IMG_URL} alt="Logo" width={76} height={50} loading="eager" />
        </Link>

        <nav className={styles.nav}>
          <a href="#about" className={styles.link}>
            About
          </a>
          <a href="#projects" className={styles.link}>
            Projects
          </a>
          <a href="#contact" className={styles.cta}>
            Contact
            <span className={styles.arrow}>→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}