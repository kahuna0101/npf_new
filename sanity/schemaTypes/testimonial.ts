import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
       name: "name",
      type: "string", 
      validation: (rule) => rule.required(),
    }),
    defineField({
       name: "occupation",
      type: "string", 
      validation: (rule) => rule.required(),
    }),
    defineField({
       name: "testimony",
      type: "text",
      validation: (rule) => rule.required(),
    }),
  ],
});