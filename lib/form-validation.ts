import { z } from "zod"

export const contactSchema = z.object({
  firstName: z.string().min(2, {
    error: "First Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    error: "Last Name must be at least 2 characters.",
  }),
email: z.email({ error: "Invalid email address." }),
number: z
    .string()
    .min(7, { message: "Phone number must be at least 7 digits." })
    .max(15, { message: "Phone number seems too long." }),
subject: z.string().min(2, {
    error: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(2, {
    error: "Message must be at least 2 characters.",
  }),
})

export const newsletterSchema = z.object({
    email: z.email(),
})