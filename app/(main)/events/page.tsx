import * as React from "react";
import Navbar from "@/components/Navbar";
import { Calendar } from "@/components/Calendar";
import styles from "@/styles/events.module.scss";
import { EventsList } from "@/components/EventsList";
import { getFutureEvents, getPastEvents } from "@/sanity/sanity-utls";

export default async function EventsPage() {
  const futureEvents = await getFutureEvents();
  const pastEvents = await getPastEvents();

  return (
    <main>
      <Navbar />

      <div className={styles.eventsContainer}>
        <div className={styles.eventsContent}>
          <h1>
            Don&apos;t miss out! Stay <span>updated</span> here
          </h1>
          <Calendar />
        </div>

        <EventsList events={futureEvents} title="Upcoming Events" />
        <EventsList events={pastEvents} title="Past Events" />
      </div>
    </main>
  );
}
