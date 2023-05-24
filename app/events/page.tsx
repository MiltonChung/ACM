"use client";
import styles from "@/styles/events.module.scss";
import BackgroundSVG from "@/components/BackgroundSvg";
import { RightArrowIcon } from "@/components/svg/icons";

export default function EventsPage() {
  const makeInvisible = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    const element = event.target as HTMLDivElement;
    element.style.opacity = "0";
    element.style.animation = "none";
  };

  return (
    <div className={styles.eventsContainer}>
      <BackgroundSVG />

      <div className={styles.eventsContent}>
        <h2>
          Don&apos;t miss out! Stay <span>updated</span> here
        </h2>

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
          <iframe src="https://calendar.google.com/calendar/u/0/embed?src=c_1d01dcebf8b83f84aa2586d9509f3b58f36a7dc2e842c69bdc2ecf475c93281e@group.calendar.google.com&ctz=America/Los_Angeles" />
        </div>
      </div>
    </div>
  );
}
