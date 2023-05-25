import { Rule } from "@sanity/types/lib/dts/src/index";

const boardMembers = {
  name: "boardMember",
  title: "Board Member",
  type: "document",
  fields: [
    {
      name: "orderID",
      title: "Display Order",
      description:
        "The order in which the board members will be displayed. Smaller numbers will be displayed first.",
      type: "number",
      validation: (Rule: Rule) => [Rule.required().error("Required")],
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: Rule) => [Rule.required().error("Required")],
    },
    {
      name: "position",
      title: "Position",
      type: "string",
      validation: (Rule: Rule) => [Rule.required().error("Required")],
    },
    {
      name: "profilePic",
      title: "Profile Picture",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      description: "A short description of the board member.",
      of: [{ type: "block" }],
      validation: (Rule: Rule) => [Rule.required().error("Required")],
    },
  ],
};

export default boardMembers;
