import { PortableTextBlock } from "sanity";

export type HomepageWindow = {
  _id: string;
  _createdAt: Date;
  title: string;
  orderID: number;
  description: PortableTextBlock[];
  buttonText?: string;
  buttonLink?: string;
};
