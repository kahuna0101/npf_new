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

const formSchema = z.object({
    email: z.email(),
})

const NewsletterForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
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
                <Button type="submit" className="max-md:w-full w-[200px] h-15 bg-white-100 hover:bg-yellow-100 border border-gray-100 hover:border-none text-base font-semibold text-black-100 hover:text-white rounded-[8px] p-4">Subscribe</Button>
            </form>
        </Form>
    )
}

export default NewsletterForm