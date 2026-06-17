import { defineField, defineType } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "event",
      title: "Event",
      type: "string",
      description: "Name of the event (e.g. Security Summit, Parade)",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Conference", value: "Conference" },
          { title: "Community", value: "Community" },
          { title: "Ceremony", value: "Ceremony" },
          { title: "Workshop", value: "Workshop" },
          { title: "Training", value: "Training" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "images",
      title: "Images",
      description: "Upload high-quality images (recommended 2000–3000px on the longest side). Use JPG or WebP format. Keep file size under 3MB. Preferred aspect ratio is 3:2 or 4:3 for best display in gallery views.",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "date",
      title: "Event Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      event: "event",
      media: "images.0",
    },
    prepare(selection) {
      const { title, event } = selection;
      return {
        title,
        subtitle: event,
      };
    },
  },
});