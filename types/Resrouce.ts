import { PortableTextBlock } from "sanity";

export type Resource = {
  _id: string;
  _createdAt: Date;
  orderID: number;
  title: PortableTextBlock[];
  description: PortableTextBlock[];
};
