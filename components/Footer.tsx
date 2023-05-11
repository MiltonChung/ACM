import { WebIcon } from "./svg/icons";
import styles from "../styles/footer.module.scss";
import { GithubIcon, LinkedinIcon, LogoDarkIcon } from "./svg/logos";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <LogoDarkIcon className={styles.logo} />

      <div className={styles.footerContent}>
        <p>Created by Milton Chung</p>

        <a
          href="https://github.com/MiltonChung"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/miltonchung/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedin}
        >
          <LinkedinIcon />
        </a>

        <a
          href="https://miltonchung.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WebIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
