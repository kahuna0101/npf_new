import { defineField, defineType } from "sanity";

export const director = defineType({
  name: "director",
  title: "Director",
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
      validation: (rule) => rule.required(),
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