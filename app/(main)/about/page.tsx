import styles from "@/styles/about.module.scss";
import BackgroundSVG from "@/components/BackgroundSvg";
import { getBoardMembers } from "@/sanity/sanity-utls";
import BoardMemberBubble from "@/components/BoardMemberBubble";
import { BlackUsbIcon, PinkUsbIcon } from "@/components/svg/icons";

export default async function AboutPage() {
  const boardMembers = await getBoardMembers();

  return (
    <div className={styles.about}>
      <BackgroundSVG />

      <div className={styles.aboutContent}>
        <h2>
          Our <span>mission</span> statement
        </h2>

        <div className={styles.bubbleContainer}>
          <BlackUsbIcon />

          <div className={styles.bubble}>
            <p>
              We want to help students develop their technical and professional
              skills and create a supportive and inclusive environment for
              anyone interested in computer science. Furthermore, we want to
              give them the opportunity to learn beyond the classroom!
            </p>
          </div>
        </div>

        <h3>
          I&apos;m interested! How do I get <span>involved</span>?
        </h3>

        <div className={styles.bubbleContainer}>
          <div className={styles.bubble}>
            <p>
              That&apos;s great! To be more involved, click on our linktree and
              follow us discord and instagram to stay updated about our events.
              If you have any questions, don&apos;t hesitate to contact us!
            </p>
          </div>

          <PinkUsbIcon />
        </div>

        <h3>
          Meet the <span>board</span>
        </h3>

        <BoardMemberBubble boardMembers={boardMembers} />
      </div>
    </div>
  );
}
