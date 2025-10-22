import { cn } from '@/lib/utils'
import Link from 'next/link'

const OpenAccountButtons = ( { className}: { className ?: string} ) => {
    return (
        <div className={cn("flex flex-col md:flex-row gap-5", className )}>
            <Link href="/" className="w-60 h-14 bg-blue-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-blue-100 text-white mx-auto rounded-md flex items-center justify-center relative">
                Open Your Account TodayLink
            </Link>

            <Link href="/" className="w-60 h-14 bg-white-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-gray-100 text-blue-100 hover:text-white mx-auto rounded-md flex items-center justify-center relative">
                Learn More
            </Link>
        </div>
    )
}

export default OpenAccountButtons