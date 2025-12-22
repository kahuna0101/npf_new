import { defineField, defineType } from "sanity";

export const form = defineType({
    name: "form",
    title: "Form",
    type: "document",
    fields: [
        defineField({
            name: "index",
            type: "number",
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
                accept: 'application/pdf'
            },
            validation: (rule) => rule.required(),
        }),
    ],
});