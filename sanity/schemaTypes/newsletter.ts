import { defineField, defineType } from "sanity";

export const newsletter = defineType({
  name: "newsletter",
  title: "Newsletter",
  type: "document",

  fields: [
    defineField({
      name: "index",
      title: "Index",
      type: "number",

      readOnly: true,

      initialValue: async (_, context) => {
        const client = context.getClient({
          apiVersion: "2024-01-01",
        });

        const newsletters = await client.fetch(
          `*[_type == "newsletter"] | order(index desc)[0]{
            index
          }`
        );

        return newsletters?.index ? newsletters.index + 1 : 1;
      },

      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "description",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "file",
      type: "file",
      options: {
        accept: "application/pdf",
      },
      validation: (rule) => rule.required(),
    }),
  ],
});