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
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { newsletterSchema } from "@/lib/form-validation"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import { SendNewsletterMail } from "@/lib/actions/sendMail"



const NewsletterForm = () => {
    const form = useForm<z.infer<typeof newsletterSchema>>({
        resolver: zodResolver(newsletterSchema),
        defaultValues: {
            email: "",
        },
    })

    async function onSubmit (values: z.infer<typeof newsletterSchema>) {
        const response = await SendNewsletterMail(values);

        if (response.success) {
            toast.success("You've successfully subscribed to our Newsletter")
            form.reset()
        } else {
            toast.error("Error submitting E-mail")
        }
    }

    const isSubmitting = form.formState.isSubmitting;

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-7.5">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Enter Email Address" {...field} className="md:w-80 xl:w-[569px] h-15 md:text-lg font-semibold bg-white border border-light-grey-100 placeholder:text-grey-100 px-3 py-4 focus-visible:ring-0"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                <Button type="submit" disabled={isSubmitting} className="max-md:w-full w-[200px] cursor-pointer h-15 bg-white-100 hover:bg-yellow-100 border border-gray-100 hover:border-none text-base font-semibold text-black-100 hover:text-white rounded-[8px] p-4">{isSubmitting ? (<><Loader2 className="w-5 h-5 animate-spin" />Subscribing...</>) : ("Subscribe")}</Button>
            </form>
        </Form>
    )
}

export default NewsletterForm