import { defineType, defineField } from "sanity";

export const job = defineType({
    name: "job",
    title: "Job Opening",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Job Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Job Description",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "tag",
            title: "Department / Tag",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "state",
            title: "Location / State",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "time",
            title: "Job Type",
            type: "string",
            options: {
                list: [
                    { title: "Full-time", value: "Full-time" },
                    { title: "Part-time", value: "Part-time" },
                    { title: "Contract", value: "Contract" },
                ],
                layout: "radio",
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "experience",
            title: "Years of Experience (e.g., 3-5)",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "requirements",
            title: "Job Requirements",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: "applyMethod",
            title: "Application Method",
            type: "object",
            fields: [
                defineField({
                    name: "applyUrl",
                    title: "Application URL",
                    type: "url",
                    description: "Enter the link to your external application form (optional)",
                }),
                defineField({
                    name: "applyEmail",
                    title: "Application Email",
                    type: "string",
                    description: "Enter the email address for job applications (optional)",
                }),
            ],
            validation: (Rule) =>
                Rule.custom((fields) => {
                    if (!fields?.applyUrl && !fields?.applyEmail) {
                        return "Please provide either an Application URL or an Application Email.";
                    }
                    return true;
                }),

        }),
    ],
});