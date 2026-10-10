"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

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
          KOSUNG
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