import Image from "next/image";
import { classNames } from "@/lib";
import acm from "@/public/acm.png";
import { FComponent } from "@/types/commons";
import { BoardMember } from "@/types/BoardMember";
import { PortableText } from "@portabletext/react";
import styles from "@/styles/boardMemberBubble.module.scss";

type BoardMemberBubbleProps = {
  boardMembers: BoardMember[];
};

const BoardMemberBubble: FComponent<BoardMemberBubbleProps> = ({
  boardMembers,
}) => {
  return (
    <>
      {boardMembers.map(
        ({ _id: id, name, description, position, profilePic }, index) => {
          const avatarLocation = index % 2 === 0 ? "left" : "right";
          const avatarImg = profilePic || acm;

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
                  {name}, {position}
                </h4>
                <div
                  className={classNames(
                    styles.bubble,
                    avatarLocation === "left" ? styles.left : styles.right
                  )}
                >
                  <PortableText value={description} />
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
        }
      )}
    </>
  );
};

export default BoardMemberBubble;
