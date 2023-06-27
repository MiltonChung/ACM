import dayjs from "dayjs";
import Image from "next/image";
import * as React from "react";
import { Event } from "@/types/Event";
import acm from "@/public/acm-highres.png";
import { FComponent } from "@/types/commons";
import styles from "@/styles/events.module.scss";
import { PortableText } from "@portabletext/react";

type EventsListProps = {
  events: Event[];
  title: string;
};

const EventsList: FComponent<EventsListProps> = ({ events, title }) => {
  return (
    <div className={styles.eventsList}>
      <h2>{title}</h2>

      <div className={styles.eventsListContainer}>
        {events.length > 0 ? (
          events.map((event) => (
            <div className={styles.eventCard} key={event._id}>
              <div className={styles.cardLeft}>
                <Image
                  src={event.image || acm}
                  alt={event.name}
                  width={150}
                  height={150}
                />
              </div>

              <div className={styles.cardRight}>
                <h3>{event.name}</h3>

                <div className={styles.subtitle}>
                  {event.location ? `${event.location} | ` : ""}
                  {dayjs(event.date).format("dddd MMMM D, YYYY h:mma")}
                </div>

                <PortableText value={event.summary} />
              </div>

              {event.buttonLink && event.buttonText ? (
                <a
                  href={event.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {event.buttonText}
                </a>
              ) : null}
            </div>
          ))
        ) : (
          <p className={styles.noEvents}>No events to show</p>
        )}
      </div>
    </div>
  );
};

export { EventsList };
