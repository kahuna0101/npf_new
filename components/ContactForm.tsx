"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
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


const ContactForm = () => {
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="lg:w-155 bg-white flex flex-col p-7.5 gap-7.5 rounded-[20px] shadow">
        <div className="flex flex-col gap-2.5">
            <div className="flex w-full gap-2.5 items-start">
            <Image src="/icons/chat.svg" width={26} height={26} alt='chat' />
            <h2 className="text-2xl text-black-100 font-semibold">Send Us a Message</h2>
            </div>
            <p className="text-base font-normal text-grey-100">Fill out the form below and we'll get back to you within 24 hours</p>
        </div>

        <div className="flex max-lg:flex-col gap-5">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" className="form-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" className="form-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email Address" className="form-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Phone Number" className="form-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">Subject</FormLabel>
              <FormControl>
                <Input placeholder="Subject" className="form-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Message" className="form-input !h-37.5" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="h-15 bg-blue-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-blue-100 text-white rounded-[8px]">Submit</Button>
      </form>
    </Form>
  )
}

export default ContactForm