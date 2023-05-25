import { classNames } from "@/lib";
import { FComponent } from "@/lib/types/commons";
import Image, { StaticImageData } from "next/image";
import styles from "@/styles/boardMemberBubble.module.scss";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";

type BoardMemberBubbleProps = {
  name: string;
  title: string;
  avatarImg: string | StaticImageData;
  message: PortableTextBlock[];
  id: number | string;
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
    <div
      className={classNames(
        styles.boardMemberContainer,
        avatarLocation === "left" ? styles.left : styles.right
      )}
      key={id}
    >
      {avatarLocation === "left" ? (
        <Image
          width={130}
          height={130}
          className={classNames(styles.avatar, styles.left)}
          src={avatarImg}
          alt={name}
        />
      ) : null}

      <div className={styles.memberContent}>
        <h4>
          {name}, {title}
        </h4>
        <div
          className={classNames(
            styles.bubble,
            avatarLocation === "left" ? styles.left : styles.right
          )}
        >
          <PortableText value={message} />
        </div>
      </div>

      {avatarLocation === "right" ? (
        <Image
          width={130}
          height={130}
          className={classNames(styles.avatar, styles.right)}
          src={avatarImg}
          alt={name}
        />
      ) : null}
    </div>
  );
};

export default BoardMemberBubble;
