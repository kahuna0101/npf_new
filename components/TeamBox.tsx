import Image from "next/image"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Suspense } from "react"
import { Skeleton } from "./ui/skeleton"
import { ScrollArea } from "@/components/ui/scroll-area"

export type TeamProps = {
    name: string,
    role: string,
    bio: string,
    image: string,
}

const TeamBox = ({ name, role, bio, image }:TeamProps  ) => {
    return (
        <div className="w-[393.33px] flex flex-col items-center p-7.5 gap-3.5 border border-gray-100 bg-white rounded-[20px] shadow-lg">
            
                <Suspense fallback={<Skeleton className="w-30 h-30 rounded-full" />}>
                <div className="w-30 h-30 rounded-[70px] overflow-hidden">
                  <Image src={image} width={120} height={120} alt={name} />  
                  </div>
                </Suspense>
            

            <div className="h-12 flex justify-center items-center">
                <h4 className="text-base text-black-100 font-bold uppercase text-center">{name}</h4>
            </div>

            <div className="h-12 flex justify-center items-center">
              <p className="text-sm text-blue-100 font-bold uppercase text-center">{role}</p>  
            </div>
            
             <p className="text-sm text-black-100 font-normal line-clamp-3 text-center">{bio}</p>

            <Dialog>
                <DialogTrigger className="underline">Read More</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-base text-black-100 font-bold uppercase">
                            {name}
                        </DialogTitle>

                        <DialogDescription className="text-sm text-blue-100 font-bold uppercase">
                            {role}
                        </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="w-full h-64">
                        <p className="text-sm text-black-100 font-normal">{bio}</p> 
                    </ScrollArea>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default TeamBox