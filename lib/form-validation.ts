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

export const pencomConsentSchema = z.object({
  title: z.string().min(2, {
    error: "Title must be selected.",
  }),
  firstName: z.string().min(2, {
    error: "First Name must be at least 2 characters.",
  }),
  middleName: z.string().min(2, {
    error: "Middle Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    error: "Last Name must be at least 2 characters.",
  }),
  rsaPin: z.string().min(11, { message: "RSA PIN must be 12 digit"}).max(12, { message: "RSA PIN must be 12 digit" }),
  email: z.email({ error: "Invalid email address." }),
  number: z
    .string()
    .min(7, { message: "Phone number must be at least 7 digits." })
    .max(15, { message: "Phone number seems too long." }),
  homeAddress: z.string().min(2, {
    error: "Address must be at least 2 characters.",
  }),
  town: z.string().min(2, {
    error: "Town must be at least 2 characters.",
  }),
  country: z.string().min(2, {
    error: "Country must be at least 2 characters.",
  }),
  consent: z.boolean().refine((val) => val === true, {
  message: "You must agree to the consent statement",
}),
})

export const newsletterSchema = z.object({
  email: z.email(),
})