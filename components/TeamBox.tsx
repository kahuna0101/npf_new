import Image from "next/image"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export type TeamProps = {
    name: string,
    title: string,
    description: string,
    image: string,
}

const TeamBox = ({ name, title, description, image }: TeamProps) => {
    return (
        <div className="w-[393.33px] flex flex-col items-center p-7.5 gap-3.5 border border-gray-100 bg-white rounded-[20px] shadow-lg">
            <div className="w-30 h-30 rounded-[70px] overflow-hidden">
                <Image src={image} width={120} height={120} alt={name} />
            </div>

            <div className="h-12 flex justify-center items-center">
                <h4 className="text-base text-black-100 font-bold uppercase text-center">{name}</h4>
            </div>

            <p className="text-sm text-blue-100 font-bold uppercase text-center">{title}</p>
             <p className="text-sm text-black-100 font-normal line-clamp-3 text-center">{description}</p>

            <Dialog>
                <DialogTrigger className="underline">Read More</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-base text-black-100 font-bold uppercase">
                            {name}
                        </DialogTitle>

                        <DialogDescription className="text-sm text-blue-100 font-bold uppercase">
                            {title}
                        </DialogDescription>
                    </DialogHeader>
                     <p className="text-sm text-black-100 font-normal">{description}</p>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default TeamBox