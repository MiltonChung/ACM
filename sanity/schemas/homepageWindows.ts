import { Rule } from "@sanity/types/lib/dts/src/index";

const homepageWindows = {
  name: "homepageWindow",
  title: "Homepage Window",
  type: "document",
  fields: [
    {
      name: "orderID",
      title: "Display Order",
      description:
        "The order in which the windows will be displayed. Smaller numbers will be displayed first.",
      type: "number",
      validation: (Rule: Rule) => [Rule.required().error("Required")],
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the window.",
      validation: (Rule: Rule) => [
        Rule.required().error("Required"),
        Rule.max(50).warning("Shorter titles are usually better"),
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      description: "Content of the window.",
      of: [
        {
          type: "block",
          styles: [
            {
              title: "Normal",
              value: "normal",
            },
          ],
          lists: [],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italicize", value: "em" },
            ],
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
    {
      name: "buttonText",
      title: "Button Text",
      description:
        "(OPTIONAL) Text to display on the button. Make sure if you have either button text or button link, you have both.",
      type: "string",
    },
    {
      name: "buttonLink",
      title: "Button Link",
      description:
        "(OPTIONAL) The link to follow when the button is clicked. Make sure if you have either button text or button link, you have both.",
      type: "string",
    },
  ],
};

export default homepageWindows;
