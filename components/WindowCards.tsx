import * as React from "react";
import styles from "../styles/home.module.scss";
import { FComponent } from "@/lib/types/commons";
import { HomepageWindow } from "@/types/HomepageWindow";
import { PortableText } from "@portabletext/react";

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
              <h3>{title}</h3>
              <PortableText value={description} />
            </div>

            {buttonLink && buttonText ? (
              <div className={styles.windowCardButton}>
                <a href={buttonLink} target="_blank" rel="noopener noreferrer">
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
