import Navbar from "@/components/Navbar";
import { PortableText } from "@portabletext/react";
import { getResources } from "@/sanity/sanity-utls";
import styles from "@/styles/resources.module.scss";
import BackgroundSVG from "@/components/BackgroundSvg";
import { ExternalLink } from "@/components/ExternalLink";

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <main>
      <Navbar />
      <div className={styles.resourcesContainer}>
        <BackgroundSVG />

        <h1>
          Curated resources list -- just for <span>you</span>
        </h1>

        <div className={styles.resourcesContent}>
          {resources.map(({ _id: id, title, description }) => {
            return (
              <div className={styles.resourcesSection} key={id}>
                <PortableText value={title} />
                <PortableText value={description} components={ExternalLink} />
              </div>
            );
          })}
        </div>

        <h1>
          🎉<span>Congratulations!</span> You got the job 🎉
        </h1>
      </div>
    </main>
  );
}
