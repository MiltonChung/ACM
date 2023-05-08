import styles from "../styles/home.module.scss";
import { LogoLightIcon } from "@/components/svg/logos";

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.landing}>
        <div className={styles.landingContent}>
          <LogoLightIcon className={styles.logo} />
          <h1 className={styles.title}>
            ucsc <span>acm</span>
          </h1>
          <p className={styles.subtitle}>
            the largest computer science community at uc santa cruz
          </p>
          <p className={styles.description}>
            We are a student run organization that strives to create a
            supportive and inclusive community for people of all backgrounds and
            skill levels who are passionate about computer science to learn and
            network.
          </p>
        </div>
      </div>
    </main>
  );
}
