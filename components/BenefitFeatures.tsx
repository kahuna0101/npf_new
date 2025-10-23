import { BenefitsPageProps } from './BenefitsTabs'

const BenefitFeatures = ({ title, description, features, requirements }: BenefitsPageProps) => {
  return (
     <div className="md:w-[620px] flex flex-col gap-7.5 justify-start">
            <h1 className="text-[40px] leading-13 font-bold text-black-100">{title}</h1>
            <p className="text-base leading-6 font-normal text-grey-100">{description}</p>
            <div className="flex flex-col gap-5">
                <h3 className="text-xl text-black-100 font-medium">Key Features</h3>
                <ul className="flex flex-col gap-2.5 list-disc pl-6">
                    {features?.map((item, index) => (
                        <li key={index} className="text-base font-normal text-grey-100">{item}</li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-5">
                <h3 className="text-xl text-black-100 font-medium">Eligibility Requirements</h3>
                <ul className="flex flex-col gap-2.5 list-disc pl-6">
                    {requirements?.map((item, index) => (
                        <li key={index} className="text-base font-normal text-grey-100">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
  )
}

export default BenefitFeatures