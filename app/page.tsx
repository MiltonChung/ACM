import BackgroundSVG from "@/components/BackgroundSvg";
import styles from "../styles/home.module.scss";
import { LogoLightIcon } from "@/components/svg/logos";

export default function Home() {
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

        <article className={styles.windowCard}>
          <div className={styles.windowCardHeader}>
            <div />
            <div />
            <div />
          </div>

          <div className={styles.windowCardContent}>
            <h3>Workshops</h3>
            <p>
              We know how hard it can be to learn new skills and technologies
              apart from those taught in classes. That’s why we host a variety
              of workshops for different career paths in computer science. In
              the past we’ve held workshops on preparing for coding interviews,
              getting familiar with machine learning, and building your own
              portfolio website.we’ve held workshops on preparing for coding
              interviews, getting familiar with machine learning, and building
              your own portfolio website.we’ve held workshops on preparing for
              coding interviews, getting familiar with machine learning, and
              building your own portfolio website.
            </p>
          </div>
        </article>

        <article className={styles.windowCard}>
          <div className={styles.windowCardHeader}>
            <div />
            <div />
            <div />
          </div>

          <div className={styles.windowCardContent}>
            <h3>Workshops</h3>
            <p>
              We know how hard it can be to learn new skills and technologies
              apart from thwe’ve held workshops on preparing for coding
              interviews, getting familiar with machine learning, and building
              your own portfolio website.ose taught in classes. That’s why we
              host a variety of workshops for different career paths in computer
              science. In the past we’ve held workshops on preparing for coding
              interviews, getting familiar with machine learning, and building
              your own portfolio website.
            </p>
          </div>
        </article>

        <article className={styles.windowCard}>
          <div className={styles.windowCardHeader}>
            <div />
            <div />
            <div />
          </div>

          <div className={styles.windowCardContent}>
            <h3>Workshops</h3>
            <p>
              We know how hard it can be to learn new skills and technologies
              apart from those taught in classes. That’s why we host a variety
              of workshops for different career paths in computer science. In
              the past we’ve held workshops on preparing for coding interviews,
              getting familiar with machine learning, and building your own
              portfolio website.we’ve held workshops on preparing for coding
              interviews, getting familiar with machine learning, and building
              your own portfolio website.
            </p>
          </div>
        </article>

        <article className={styles.windowCard}>
          <div className={styles.windowCardHeader}>
            <div />
            <div />
            <div />
          </div>

          <div className={styles.windowCardContent}>
            <h3>Workshops</h3>
            <p>
              We know how hard it can be to learn new skills and technologies
              apart from those taught in classes. That’s why we host a variety
              of workshops for different career paths in computer science. In
              the past we’ve held workshops on preparing for coding interviews,
              getting familiar with machine learning, and building your own
              portfolio website. We know how hard it can be to learn new skills
              and technologies apart from those taught in classes. That’s why we
              host a variety of workshops for different career paths in computer
              science. In the past we’ve held workshops on preparing for coding
              interviews, getting familiar with machine learning, and building
              your own portfolio website.
            </p>
          </div>

          <div className={styles.windowCardButton}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd2Q7O4nZEUfmQaCFXWaSSCW2mnpMoz56xwA8r9daFD0PZlVQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
