import { defineField, defineType } from "sanity";

export const management = defineType({
  name: "management",
  title: "Management",
  type: "document",
  fields: [
    defineField({
      name: "index",
      type: "number", 
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