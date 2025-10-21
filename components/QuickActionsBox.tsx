import Image from "next/image"
import Link from "next/link"

export type QuickActionsBoxProps = {
    title: string,
    description: string,
    href: string,
    icon: string,
}
const QuickActionsBox = ({ title, description, href, icon }: QuickActionsBoxProps) => {
    return (
        <Link href={href} className="group w-[232px] h-44 hover:sm:h-42 flex flex-col items-center justify-center py-7.5 px-5 gap-5 hover:sm:gap-3 bg-white hover:bg-yellow-100 rounded-[20px] border border-gray-100 hover:border-none drop-shadow">
            <div className="w-12.5 h-12.5 flex items-center justify-center p-2.5 bg-light-green-100 group-hover:bg-white rounded-[70px]">
                <div className="w-6.5 h-6.5 bg-green-200 group-hover:bg-yellow-100 transition-colors duration-100"
                    style={{
                        WebkitMaskImage: `url(${icon})`,
                        maskImage: `url(${icon})`,
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskSize: 'contain',
                        maskSize: 'contain',
                        WebkitMaskPosition: 'center',
                        maskPosition: 'center',
                    }}
                />

            </div>
            <h4 className="text-[18px] font-medium text-center text-black-100 group-hover:text-white">{title}</h4>
            <p className="text-sm font-normal text-center text-black-100 group-hover:text-white">{description}</p>
        </Link>
    )
}

export default QuickActionsBox