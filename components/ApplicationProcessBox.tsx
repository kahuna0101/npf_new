import { BenefitsPageProps } from './BenefitsTabs'
import Link from 'next/link'

const ApplicationProcessBox = ({ process }: BenefitsPageProps) => {
    return (
        <div className="md:w-80 lg:w-96 xl:w-[590px] flex flex-col gap-7.5 p-7.5 rounded-[10px] border border-gray-100">
            <div className="flex flex-col gap-5">
                <h3 className="text-xl text-black-100 font-medium">Application Process</h3>
                <ul className="flex flex-col gap-2.5 list-disc pl-6">
                    {process?.map((item, index) => (
                        <li key={index} className="text-base font-normal text-grey-100">{item}</li>
                    ))}
                </ul>
            </div>

            <Link href="https://online.npfpensions.com.ng/NPFSelfServices/Login.aspx#!" target="_blank" className="w-full h-15 bg-blue-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-blue-100 text-white mx-auto rounded-xl p-4 flex items-center justify-center">
                Apply
            </Link>
        </div>
    )
}

export default ApplicationProcessBox