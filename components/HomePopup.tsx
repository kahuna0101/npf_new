"use client"

import { useEffect, useState } from "react"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import Link from "next/link"

export default function HomePopup() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-transparent overflow-hidden items-center justify-center border-transparent h-full bg-[url('/images/old-couples.jpg')] bg-cover bg-center [&>button]:text-white">
                <section className="flex flex-col h-svh p-8 gap-12.5 sm:p-15">
                    <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

                    <DialogHeader className="font-bold z-10 flex flex-col py-4">
                        <DialogTitle className="text-white text-4xl sm:text-5xl text-center">Prioritize Your Health</DialogTitle>
                        <DialogTitle className="text-yellow-100 text-4xl sm:text-5xl text-center">With PenCare Today</DialogTitle>
                    </DialogHeader>
                    <DialogDescription className="font-medium z-10 text-xl text-white text-center py-4">
                        Exclusive and free health coverage designed specifically for our valued Retirees on Programmed Withdrawal.
                    </DialogDescription>

                    <div className="flex flex-col z-10 md:flex-row gap-5">
                        <Link href="/pencare" className="w-60 h-14 bg-blue-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-blue-100 text-white mx-auto rounded-md flex items-center justify-center relative">
                            Discover PenCare
                        </Link>
                    </div>
                </section>
            </DialogContent>
        </Dialog>
    )
}