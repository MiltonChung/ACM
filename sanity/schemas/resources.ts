import { Rule } from "@sanity/types/lib/dts/src/index";

const Resources = {
  name: "resource",
  title: "Resources",
  type: "document",
  fields: [
    {
      name: "orderID",
      title: "Display Order",
      description:
        "The order in which the resources will be displayed. Smaller numbers will be displayed first.",
      type: "number",
      validation: (Rule: Rule) => [Rule.required().error("Required")],
    },
    {
      name: "title",
      title: "Title",
      type: "array",
      description:
        "If you want certain words to be blue, bold them. Only use Heading 2.",
      of: [
        {
          type: "block",
          lists: [],
          marks: {
            decorators: [{ title: "Bold", value: "strong" }],
            annotations: [],
          },
          styles: [{ title: "Heading 2", value: "h2" }],
        },
      ],
      validation: (Rule: Rule) => [Rule.required().error("Required")],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      description:
        "Use Heading 3 for subheadings; Bullet for lists; Normal for text.",
      of: [
        {
          type: "block",
          styles: [{ title: "Heading 3", value: "h3" }],
          lists: [{ title: "Bullet", value: "bullet" }],
          marks: {
            decorators: [],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    type: "boolean",
                    default: true,
                  },
                ],
              },
            ],
          },
        },
      ],
      validation: (Rule: Rule) => [Rule.required().error("Required")],
    },
  ],
};

export default Resources;
