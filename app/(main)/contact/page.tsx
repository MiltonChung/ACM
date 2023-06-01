import { capitalizeFirstLetter } from "@/lib";
import styles from "@/styles/contact.module.scss";
import { SocialMedia } from "@/types/SocialMedia";
import BackgroundSVG from "@/components/BackgroundSvg";
import { getSocialMedias } from "@/sanity/sanity-utls";
import { ExternalLinkIcon, WebIcon } from "@/components/svg/icons";
import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  RedditIcon,
  SnapchapIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/svg/logos";

export default async function ContactPage() {
  const socialMedias = await getSocialMedias();

  return (
    <main className={styles.contactContainer}>
      <BackgroundSVG numOfIcons={8} />

      <div className={styles.contactContent}>
        <h1>
          Stay in <span>touch!</span>
        </h1>

        <div className={styles.socialContainer}>
          {socialMedias.map(({ socialMedia, _id: id, link }, index) => {
            const Icon = socialMediaIconMap[socialMedia];

            return (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={id}
                style={{
                  color: assignColorFromPosition(index),
                }}
              >
                {Icon}
                <span>
                  {capitalizeFirstLetter(socialMedia)} <ExternalLinkIcon />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}

const socialMediaIconMap: Record<SocialMedia["socialMedia"], JSX.Element> = {
  instagram: <InstagramIcon />,
  discord: <DiscordIcon />,
  linktree: <WebIcon />,
  linkedin: <LinkedinIcon />,
  facebook: <FacebookIcon />,
  twitter: <TwitterIcon />,
  youtube: <YoutubeIcon />,
  twitch: <TwitterIcon />,
  snapchat: <SnapchapIcon />,
  reddit: <RedditIcon />,
  other: <WebIcon />,
};

const assignColorFromPosition = (position: number) => {
  const colors = ["#ffbb43", "#0093d0", "#ea526f"];
  return colors[position % colors.length];
};
