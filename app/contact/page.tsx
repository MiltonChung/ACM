import styles from "@/styles/contact.module.scss";
import BackgroundSVG from "@/components/BackgroundSvg";
import { ExternalLinkIcon, WebIcon } from "@/components/svg/icons";
import { DiscordIcon, InstagramIcon } from "@/components/svg/logos";

export default function ContactPage() {
  return (
    <div className={styles.contactContainer}>
      <BackgroundSVG />

      <div className={styles.contactContent}>
        <h2>
          Stay in <span>touch!</span>
        </h2>

        <div className={styles.socialContainer}>
          <a
            href="https://linktr.ee/ucscacm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WebIcon />
            <span>
              Linktree
              <ExternalLinkIcon />
            </span>
          </a>

          <a
            href="https://www.instagram.com/ucscacm/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
            <span>
              Instagram <ExternalLinkIcon />
            </span>
          </a>

          <a
            href="https://discord.gg/zxexESCz8N"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordIcon />
            <span>
              Discord <ExternalLinkIcon />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
