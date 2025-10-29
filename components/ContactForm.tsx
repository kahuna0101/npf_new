"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Textarea } from "./ui/textarea"
import { SendContactFormMail } from "@/lib/mailSender"
import { contactSchema } from "@/lib/form-validation"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"


const ContactForm = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values)
    const response = await SendContactFormMail(values);

    if (response.success) {
      toast.success("Your Form has been submitted, our representative will reach out to you soon.")
      form.reset()
    } else {
      console.log("Form not sent")
    }
  }

  const isSubmitting = form.formState.isSubmitting;

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
        <Button type="submit" disabled={isSubmitting} className="h-15 bg-blue-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-blue-100 text-white rounded-[8px]">{isSubmitting ? (<><Loader2 className="w-5 h-5 animate-spin" />Submitting...</>) : ("Submit")}</Button>
      </form>
    </Form>
  )
}

export default ContactForm