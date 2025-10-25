import { jobOpeningsQuery } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { Job } from "@/sanity/types";
import Link from "next/link";

const JobOpenings = async () => {
    const data = await client.fetch(jobOpeningsQuery);

    return (
        <div className="flex flex-wrap justify-center items-center gap-7.5">
            {data.length === 0 && <p className="text-5xl text-black-100 font-semibold text-center">No job openings available at the moment.</p>}

            {data.length > 0 && data.map((job:Job ) => {
                const { title, description, tag, state, time, experience, requirements, applyMethod } = job;

                const applyLink = applyMethod?.applyUrl
                    ? applyMethod.applyUrl
                    : applyMethod?.applyEmail
                        ? `mailto:${applyMethod.applyEmail}`
                        : "#";
                return (
                    <div key={title} className="w-[605px] flex flex-col gap-5 p-7.5 border border-gray-100 bg-white rounded-[20px] shadow">
                        <h3 className="text-xl text-black-100 font-medium">{title}</h3>
                        <p className="text-base font-normal text-grey-100">{description}</p>
                        <div className="flex flex-wrap gap-2.5">
                            <div className="py-1 px-2.5 flex items-center justify-center rounded-[30px] bg-light-green-100 text-green-100 text-xs font-normal">{tag}</div>
                            <div className="py-1 px-2.5 flex items-center justify-center rounded-[30px] bg-light-green-100 text-green-100 text-xs font-normal">{state}</div>
                            <div className="py-1 px-2.5 flex items-center justify-center rounded-[30px] bg-light-green-100 text-green-100 text-xs font-normal">{time}</div>
                            <div className="py-1 px-2.5 flex items-center justify-center rounded-[30px] bg-light-green-100 text-green-100 text-xs font-normal">{experience} years</div>
                        </div>

                        <h3 className="text-xl text-black-100 font-medium">Key Requirements:</h3>
                        <ul className="flex flex-col gap-2.5 list-disc pl-6">
                            {requirements?.map((item, index) => (
                                <li key={index} className="text-base font-normal text-grey-100">{item}</li>
                            ))}
                        </ul>

                        <Link href={applyLink} target={applyMethod?.applyUrl ? "_blank" : "_self"} rel="noopener noreferrer" className="w-full h-15 bg-blue-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-blue-100 text-white mx-auto rounded-xl flex items-center justify-center">
                            Apply Now
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default JobOpenings