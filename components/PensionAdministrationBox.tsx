import Image from "next/image"
import Link from "next/link"

export type PensionAdministrationBoxProps = {
  title: string,
  description: string,
  href: string,
  icon: string,
}

const PensionAdministrationBox = ({ title, description, href, icon }: PensionAdministrationBoxProps) => {
  return (
    <div className="w-86 sm:w-98 h-76 flex flex-col items-center justify-center py-7.5 px-5 gap-5  bg-white rounded-[20px] border border-gray-100 drop-shadow-xl">
      <div className="w-[65px] h-[65px] flex items-center justify-center bg-blue-100 rounded-xl">
        <Image src={icon} alt={title} width={34} height={34} />
      </div>
      <h4 className="text-[18px] font-medium text-center text-blue-100">{title}</h4>
      <p className="text-sm font-normal text-center text-black-100">{description}</p>
      <Link href={href} className="w-full h-15 bg-white-100 flex items-center justify-center border border-gray-100 rounded-[8px] text-base font-semibold text-black-100 hover:text-white hover:bg-yellow-100 hover:border-none">Learn More</Link>
    </div>
  )
}

export default PensionAdministrationBox