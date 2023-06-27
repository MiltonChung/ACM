"use client";
import * as React from "react";
import { RightArrowIcon } from "./svg/icons";
import styles from "@/styles/events.module.scss";

const Calendar = () => {
  const makeInvisible = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    const element = event.target as HTMLDivElement;
    element.style.opacity = "0";
    element.style.animation = "none";
  };

  return (
    <div className={styles.calendar}>
      <div
        className={styles.hintForScroll}
        onMouseEnter={makeInvisible}
        onClick={makeInvisible}
        onDrag={makeInvisible}
        onTouchStart={makeInvisible}
        onTouchMove={makeInvisible}
      >
        <p>
          Scroll <RightArrowIcon /> for more
        </p>
      </div>

      <iframe
        title="ACM google calendar"
        src="https://calendar.google.com/calendar/u/0/embed?src=c_1d01dcebf8b83f84aa2586d9509f3b58f36a7dc2e842c69bdc2ecf475c93281e@group.calendar.google.com&ctz=America/Los_Angeles"
      />
    </div>
  );
};

export { Calendar };
