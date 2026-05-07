import { defineField, defineType } from "sanity";

export const slider = defineType({
    name: "slider",
    title: "Slider",
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

                const sliders = await client.fetch(
                    `*[_type == "slider"] | order(index desc)[0]{
            index
          }`
                );

                return sliders?.index ? sliders.index + 1 : 1;
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
            name: "image",
            type: "image",
            validation: (rule) => rule.required(),
        }),
    ],
});