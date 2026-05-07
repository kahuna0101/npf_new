import { defineField, defineType } from "sanity";

export const auditedAccount = defineType({
    name: "auditedAccount",
    title: "Audited Accounts",
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

                const auditedAccounts = await client.fetch(
                    `*[_type == "auditedAccount"] | order(index desc)[0]{
            index
          }`
                );

                return auditedAccounts?.index ? auditedAccounts.index + 1 : 1;
            },

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