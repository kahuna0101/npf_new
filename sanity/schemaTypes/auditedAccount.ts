import { defineField, defineType } from "sanity";

export const auditedAccount = defineType({
    name: "auditedAccount",
    title: "Audited Accounts",
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
            name: "file",
            type: "file",
            options: {
                accept: 'application/pdf'
            },
            validation: (rule) => rule.required(),
        }),
    ],
});