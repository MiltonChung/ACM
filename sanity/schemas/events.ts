import { Rule } from "@sanity/types/lib/dts/src/index";

const events = {
  name: "event",
  title: "Events",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Event Name",
      type: "string",
      validation: (Rule: Rule) => [Rule.required().error("Required")],
    },
    {
      name: "date",
      title: "Event Date & Time",
      type: "datetime",
      options: {
        dateFormat: "MM-DD-YYYY",
        timeFormat: "hh:mm A",
        calendarTodayLabel: "Today",
      },
      validation: (Rule: Rule) => [Rule.required().error("Required")],
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      description: "Optional",
    },
    {
      name: "image",
      title: "Event Picture",
      description: "(Optional)",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "summary",
      title: "Summary",
      type: "array",
      description:
        "A short summary of the event. Try to keep it under 200 characters.",
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
      name: "buttonLink",
      title: "Button Link",
      type: "url",
      description:
        "(Optional) If you have a link to anything related to the event, put it here.",
    },
  ],
};

export default events;
