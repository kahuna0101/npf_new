import { defineField, defineType } from "sanity";

export const form = defineType({
  name: "form",
  title: "Form",
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

        const forms = await client.fetch(
          `*[_type == "form"] | order(index desc)[0]{
            index
          }`
        );

        return forms?.index ? forms.index + 1 : 1;
      },
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