import { groq } from "next-sanity";
import { client } from "./lib/client";
import { Resource } from "@/types/Resrouce";
import { BoardMember } from "@/types/BoardMember";
import { HomepageWindow } from "@/types/HomepageWindow";

export async function getBoardMembers(): Promise<BoardMember[]> {
  return client.fetch(
    groq`*[_type == "boardMember"] | order(orderID asc) {
      _id,
      _createdAt,
      name,
      orderID,
      "profilePic": profilePic.asset->url,
      position,
      description
    }`
  );
}

export async function getHomepageWindows(): Promise<HomepageWindow[]> {
  return client.fetch(
    groq`*[_type == "homepageWindow"] | order(orderID asc) {
      _id,
      _createdAt,
      title,
      orderID,
      description,
      buttonText,
      buttonLink
    }`
  );
}

export async function getResources(): Promise<Resource[]> {
  return client.fetch(
    groq`*[_type == "resource"] | order(orderID asc) {
      _id,
      _createdAt,
      title,
      orderID,
      description
    }`
  );
}
