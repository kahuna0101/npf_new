import Image from "next/image"

export type TestimonialBoxProps = {
    name: string,
    position: string,
    testimony: string,
}

const TestimonialBox = ({ name, position, testimony }: TestimonialBoxProps) => {
    const [firstName, LastName] = name.split(" ");

    return (
        <div className="w-xs sm:w-[605px] sm:h-[261px] flex flex-col gap-5 px-5 py-7.5 rounded-[20px] bg-white shadow-xl">
            <div className="flex justify-center items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((index) => (
                 <Image src="/icons/star.svg" width={24} height={24} alt="star" key={index}/>
                ))}
            </div>
            <p className="text-base text-black-100 font-normal text-center">“{testimony}”</p>

            <div className="flex flex-col justify-center items-center">
               <h4 className="text-lg font-medium text-black-100">{firstName} <span className="uppercase">{LastName}</span></h4>
               <p className="text-sm font-normal text-black-100">{position}</p>
            </div>
        </div>
    )
}

export default TestimonialBox