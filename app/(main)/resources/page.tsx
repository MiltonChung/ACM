import { getResources } from "@/sanity/sanity-utls";
import styles from "@/styles/resources.module.scss";
import BackgroundSVG from "@/components/BackgroundSvg";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";

const components: Partial<PortableTextReactComponents> = {
  marks: {
    link: ({ value, children }) => {
      const { blank, href } = value;
      return blank ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
  },
};

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
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
              <PortableText value={description} components={components} />
            </div>
          );
        })}
      </div>

      <h1>
        🎉<span>Congratulations!</span> You got the job 🎉
      </h1>
    </div>
  );
}
