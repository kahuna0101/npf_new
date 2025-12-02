import { defineField, defineType } from "sanity";

export const fund = defineType({
    name: "fund",
    title: "Fund Prices",
    type: "document",
    fields: [
        defineField({
            name: "date",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "fund1",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "fund2",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "fund3",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "fund4",
            type: "string",
            validation: (rule) => rule.required(),
        }),
    ],
});