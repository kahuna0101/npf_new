import { defineField, defineType } from "sanity";

export const registeredAccounts = defineType({
    name: "registeredAccounts",
    title: "RSA Registered Accounts",
    type: "document",
    fields: [
        defineField({
            name: "registeredAccounts",
            title: "RSA Registered Accounts",
            type: "number",

            validation: (rule) => rule.required(),
        }),
    ],
});