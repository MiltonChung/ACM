import { PortableTextBlock } from "sanity";

export type BoardMember = {
  _id: string;
  _createdAt: Date;
  name: string;
  position: string;
  orderID: number;
  profilePic: string;
  description: PortableTextBlock[];
};
