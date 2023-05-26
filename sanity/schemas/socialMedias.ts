import { Rule } from "@sanity/types/lib/dts/src/index";

const socialMedias = {
  name: "socialMedia",
  title: "Social Media",
  type: "document",
  fields: [
    {
      name: "orderID",
      title: "Display Order",
      description:
        "The order in which the social media icons will be displayed. Smaller numbers will be displayed first.",
      type: "number",
      validation: (Rule: Rule) => [Rule.required().error("Required")],
    },
    {
      name: "socialMedia",
      title: "Social Media",
      type: "string",
      options: {
        list: [
          { title: "Linktree", value: "linktree" },
          { title: "Instagram", value: "instagram" },
          { title: "Discord", value: "discord" },
          { title: "LinkedIn", value: "linkedin" },
          { title: "Facebook", value: "facebook" },
          { title: "Twitter", value: "twitter" },
          { title: "YouTube", value: "youtube" },
          { title: "Twitch", value: "twitch" },
          { title: "TikTok", value: "tiktok" },
          { title: "Snapchat", value: "snapchat" },
          { title: "Reddit", value: "reddit" },
          { title: "Other", value: "other" },
        ],
      },
      validation: (Rule: Rule) => [Rule.required().error("Required")],
    },
    {
      name: "link",
      title: "Social Media Link",
      type: "string",
      description: "The link to the social media page. Make sure it's valid!",
      validation: (Rule: Rule) => [Rule.required().error("Required")],
    },
  ],
};

export default socialMedias;
