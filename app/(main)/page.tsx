import styles from "@/styles/home.module.scss";
import BackgroundSVG from "@/components/BackgroundSvg";
import { WindowCards } from "@/components/WindowCards";
import { LogoLightIcon } from "@/components/svg/logos";
import { getHomepageWindows } from "@/sanity/sanity-utls";

export default async function Home() {
  const windowCards = await getHomepageWindows();

  return (
    <main className={styles.home}>
      <div className={styles.landing}>
        <div className={styles.landingContent}>
          <LogoLightIcon className={styles.logo} />
          <h1 className={styles.title}>
            UCSC <span>ACM</span>
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

      <a
        href="https://linktr.ee/ucscacm"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.joinButton}
      >
        Join Us
      </a>

      <div className={styles.windowCardsContainer}>
        <BackgroundSVG />
        <WindowCards windowCards={windowCards} />
      </div>
    </main>
  );
}
