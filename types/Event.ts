import { PortableTextBlock } from "sanity";

export type Event = {
  _id: string;
  _createdAt: Date;
  name: string;
  date: string;
  location?: string;
  image?: string;
  summary: PortableTextBlock[];
  buttonLink?: string;
  buttonText?: string;
};
