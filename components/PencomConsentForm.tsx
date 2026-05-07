"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    NativeSelect,
    NativeSelectOption,
} from "@/components/ui/native-select"

import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
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
import { pencomConsentSchema } from "@/lib/form-validation"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import { SendPencomFormMail } from "@/lib/actions/sendMail"
import { ScrollArea } from "./ui/scroll-area"


const PencomConsentForm = () => {

    const form = useForm<z.infer<typeof pencomConsentSchema>>({
        resolver: zodResolver(pencomConsentSchema),
        defaultValues: {
            title: "",
            firstName: "",
            middleName: "",
            lastName: "",
            rsaPin: "",
            email: "",
            number: "",
            homeAddress: "",
            town: "",
            country: "",
            consent: false,
        },
    })

    async function onSubmit(values: z.infer<typeof pencomConsentSchema>) {
        console.log(values)
        const response = await SendPencomFormMail(values);

        if (response.success) {
            toast("Your Details has been submitted Succesfully!", { position: "bottom-center"})
            form.reset()
        } else {
            toast.error("Error submitting Pencom Form")
        }
    }

    const isSubmitting = form.formState.isSubmitting;

    return (
        <Dialog>
            <Form {...form}>
                <DialogTrigger asChild>
                    <Button className="w-60 h-14 bg-blue-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-blue-100 text-white mx-auto rounded-md flex items-center justify-center">Consent Online</Button>
                </DialogTrigger>


                <DialogContent className="w-full sm:max-w-2xl bg-white rounded-[20px] p-0 shadow overflow-hidden">
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <ScrollArea className="h-[80vh]">
                            <div className="flex flex-col p-7.5 gap-7.5">
                                <DialogHeader className="flex flex-col items-center gap-2.5">
                                    <div className="flex flex-col md:flex-row w-full gap-2.5 max-md:items-center justify-center">
                                        <Image src="/images/health-care.png" width={26} height={26} alt='chat' />
                                        <DialogTitle className="text-2xl text-black-100 font-semibold">PenCare Healthcare Initiative</DialogTitle>
                                    </div>
                                    <DialogDescription className="text-base font-normal text-grey-100">Consent Form for Healthcare Enrollment</DialogDescription>
                                </DialogHeader>

                                <div className="flex max-lg:flex-col gap-5">
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel className="form-label">Title</FormLabel>

                                                <FormControl>
                                                    <NativeSelect
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        className="form-input"
                                                    >
                                                        <NativeSelectOption value="">Select Title</NativeSelectOption>
                                                        <NativeSelectOption value="Mr">Mr</NativeSelectOption>
                                                        <NativeSelectOption value="Mrs">Mrs</NativeSelectOption>
                                                        <NativeSelectOption value="Miss">Miss</NativeSelectOption>
                                                        <NativeSelectOption value="Dr">Dr</NativeSelectOption>
                                                        <NativeSelectOption value="Chief">Chief</NativeSelectOption>
                                                    </NativeSelect>
                                                </FormControl>

                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel className="form-label">First Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="First Name" className="form-input" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="flex max-lg:flex-col gap-5">
                                    <FormField
                                        control={form.control}
                                        name="middleName"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel className="form-label">Middle Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Middle Name" className="form-input" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
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
                                    name="rsaPin"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="form-label">RSA PIN</FormLabel>
                                            <FormControl>
                                                <Input placeholder="12 digit pin" className="form-input" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
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
                                    name="homeAddress"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="form-label">Home Address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Home Address" className="form-input" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="flex max-lg:flex-col w-full gap-5">
                                    <FormField
                                        control={form.control}
                                        name="town"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel className="form-label">Town</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="eg: Lagos" className="form-input" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="country"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel className="form-label">Country</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Country" className="form-input" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-2xl font-bold text-black-100">CONSENT STATEMENT</h3>
                                    <Separator className="border-2" />
                                    <p className="text-base font-normal text-black-100">I, the undersigned, hereby give my explicit and informed consent to NPF Pension to disclose my personal information to a designated Health Maintenance Organization (HMO). This disclosure is for the sole purpose of my enrollment under the National Pension Commission (PenCom) PenCare Healthcare Initiative. I understand that the shared data may include, but is not limited to, my name, RSA PIN, contact details, and any other information required strictly for my healthcare enrollment under this initiative. I acknowledge that this disclosure is necessary to facilitate my participation and enable access to healthcare services provided under the programme.</p>
                                </div>

                                <FormField
                                    control={form.control}
                                    name="consent"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-3.5 bg-white rounded-[10px] border border-gray-100">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={(checked) => field.onChange(checked === true)}
                                                />
                                            </FormControl>

                                            <div className="space-y-1 leading-none">
                                                <FormLabel className="text-sm font-medium text-black-100 cursor-pointer">
                                                    I confirm that I have read and understood the information above and hereby provide my consent electronically in accordance with applicable data protection laws.
                                                </FormLabel>

                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" disabled={isSubmitting} className="h-15 bg-blue-100 hover:bg-yellow-100 text-base cursor-pointer font-semibold border hover:border-none border-blue-100 text-white rounded-[8px]">{isSubmitting ? (<><Loader2 className="w-5 h-5 animate-spin" />Submitting...</>) : ("Submit")}</Button>
                            </div>
                        </ScrollArea>
                    </form>
                </DialogContent>

            </Form>
        </Dialog>

    )
}

export default PencomConsentForm