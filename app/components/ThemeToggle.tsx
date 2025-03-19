"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import styles from "./styles/themeToggle.module.css";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className={`${styles.toggle_button} ${
        theme === "light" ? styles.light : styles.dark
      }`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className={styles.icon_container}>
        {theme === "light" ? (
          <Sun size={20} className={styles.icon} />
        ) : (
          <Moon size={20} className={styles.icon} />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
