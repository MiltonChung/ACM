import Navbar from "@/components/Navbar";
import styles from "@/styles/about.module.scss";
import BackgroundSVG from "@/components/BackgroundSvg";
import { getBoardMembers } from "@/sanity/sanity-utls";
import BoardMemberBubble from "@/components/BoardMemberBubble";
import { BlackUsbIcon, PinkUsbIcon } from "@/components/svg/icons";

export default async function AboutPage() {
  const boardMembers = await getBoardMembers();

  return (
    <main>
      <Navbar />
      <div className={styles.about}>
        <BackgroundSVG />

        <div className={styles.aboutContent}>
          <h1>
            Our <span>mission</span> statement
          </h1>

          <div className={styles.bubbleContainer}>
            <BlackUsbIcon />

            <div className={styles.bubble}>
              <p>
                Our goal is to foster an inclusive and supportive environment
                for students interested in computer-related majors, with a focus
                on skill development beyond the classroom. Through cultivating
                abilities outside traditional academic settings, we aim to
                create a professional atmosphere that empowers students in their
                educational pursuits.
              </p>
            </div>
          </div>

          <h2>
            I&apos;m interested! How do I get <span>involved</span>?
          </h2>

          <div className={styles.bubbleContainer}>
            <div className={styles.bubble}>
              <p>
                That&apos;s great! To be more involved, click on our{" "}
                <a
                  href="https://linktr.ee/ucscacm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linktree
                </a>{" "}
                and follow us discord and instagram to stay updated about our
                events. If you have any questions, don&apos;t hesitate to
                contact us!
              </p>
            </div>

            <PinkUsbIcon />
          </div>

          <h2>
            Meet the <span>board</span>
          </h2>

          <BoardMemberBubble boardMembers={boardMembers} />
        </div>
      </div>
    </main>
  );
}
