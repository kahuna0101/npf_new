import { defineField, defineType } from "sanity";

export const director = defineType({
  name: "director",
  title: "Director",
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

        const directors = await client.fetch(
          `*[_type == "director"] | order(index desc)[0]{
            index
          }`
        );

        return directors?.index ? directors.index + 1 : 1;
      },

      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "role",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bio",
      type: "text",
      validation: (rule) => rule.required(),
    }),
  ],
});