import styles from "./styles/logo.module.css";
import { Imperial_Script } from "next/font/google";

const imperialScript = Imperial_Script({
  subsets: ["latin"],
  weight: ["400"],
});

const Logo = () => {
  return (
    <div className={`${styles.logo} ${imperialScript.className}`}>
      TetianaChehrina
    </div>
  );
};
export default Logo;
