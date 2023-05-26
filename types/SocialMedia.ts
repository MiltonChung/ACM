export type SocialMedia = {
  _id: string;
  _createdAt: Date;
  orderID: number;
  socialMedia:
    | "instagram"
    | "discord"
    | "linktree"
    | "linkedin"
    | "facebook"
    | "twitter"
    | "youtube"
    | "twitch"
    | "snapchat"
    | "reddit"
    | "other";
  link: string;
};
