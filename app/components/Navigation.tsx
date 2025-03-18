"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import styles from "./styles/navigation.module.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navigation}>
      <button
        className={styles.menu_icon}
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen(true)}
      >
        <Menu />
      </button>

      <div className={`${styles.nav_container} ${isOpen ? styles.open : ""}`}>
        <button
          className={styles.close_icon}
          aria-label="Close navigation menu"
          onClick={() => setIsOpen(false)}
        >
          <X />
        </button>

        <ul className={styles.nav_links}>
          <li className={styles.menu_item}>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About me
            </a>
          </li>
          <li className={styles.menu_item}>
            <a href="#technologies" onClick={() => setIsOpen(false)}>
              Technologies
            </a>
          </li>
          <li className={styles.menu_item}>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li className={styles.menu_item}>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
          <li className={styles.themeToggle}>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
