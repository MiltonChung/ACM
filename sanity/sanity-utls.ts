import { groq } from "next-sanity";
import { client } from "./lib/client";
import { Resource } from "@/types/Resrouce";
import { BoardMember } from "@/types/BoardMember";
import { SocialMedia } from "@/types/SocialMedia";
import { HomepageWindow } from "@/types/HomepageWindow";
import { Event } from "@/types/Event";

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

export async function getSocialMedias(): Promise<SocialMedia[]> {
  return client.fetch(
    groq`*[_type == "socialMedia"] | order(orderID asc) {
      _id,
      _createdAt,
      orderID,
      socialMedia,
      link
    }`
  );
}

export async function getEvents(type?: "past" | "future"): Promise<Event[]> {
  let filter = "";
  if (type === "past") {
    filter = "&& date < now()";
  } else if (type === "future") {
    filter = "&& date >= now()";
  }

  return client.fetch(
    groq`*[_type == "event" ${filter}] | order(date desc) [0..15] {
      _id,
      _createdAt,
      name,
      date,
      location,
      "image": image.asset->url,
      summary,
      buttonLink
    }`
  );
}
