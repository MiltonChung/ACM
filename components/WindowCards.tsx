import * as React from "react";
import { FComponent } from "@/types/commons";
import styles from "../styles/home.module.scss";
import { PortableText } from "@portabletext/react";
import { HomepageWindow } from "@/types/HomepageWindow";

type WindowCardsProps = {
  windowCards: HomepageWindow[];
};

const WindowCards: FComponent<WindowCardsProps> = ({ windowCards }) => {
  return (
    <>
      {windowCards.map(
        ({ _id: id, description, title, buttonLink, buttonText }) => (
          <article className={styles.windowCard} key={id}>
            <div className={styles.windowCardHeader}>
              <div />
              <div />
              <div />
            </div>

            <div className={styles.windowCardContent}>
              <h2>{title}</h2>
              <PortableText value={description} />
            </div>

            {buttonLink && buttonText ? (
              <div className={styles.windowCardButton}>
                <a
                  title={`Learn more about ${title}`}
                  href={buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {buttonText}
                </a>
              </div>
            ) : null}
          </article>
        )
      )}
    </>
  );
};

export { WindowCards };
