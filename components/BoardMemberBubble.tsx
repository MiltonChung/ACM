import { FComponent } from "@/lib/types/commons";
import Image from "next/image";
import styles from "@/styles/about.module.scss";
import { classNames } from "@/lib";

type BoardMemberBubbleProps = {
  name: string;
  title: string;
  avatarImg: string;
  message: string;
  id: number;
  avatarLocation: "left" | "right";
};

const BoardMemberBubble: FComponent<BoardMemberBubbleProps> = ({
  name,
  title,
  avatarImg,
  message,
  id,
  avatarLocation,
}) => {
  return (
    <div className={styles.boardMemberContainer} key={id}>
      {avatarLocation === "left" ? (
        <Image className="avatar" src={avatarImg} alt={name} />
      ) : null}

      <div className={styles.memberContent}>
        <p>
          {name}, {title}
        </p>
        <div
          className={classNames(
            styles.bubble,
            avatarLocation === "left" ? styles.left : styles.right
          )}
        >
          {message}
          Hey everyone! My name is Harish and I&apos;m the Instructional Lead
          for ACM this year! I&apos;m currently a proposed Computer Engineering
          student and some things I like to do outside of academia are PC
          gaming, hiking across campus and spending time in coffee shops
          downtown. I&apos;m really excited to meet you all and create a
          supporting community so we can all excel together in our CS endeavors!
        </div>
      </div>

      {avatarLocation === "right" ? (
        <Image className="avatar" src={avatarImg} alt={name} />
      ) : null}
    </div>
  );
};

export default BoardMemberBubble;
