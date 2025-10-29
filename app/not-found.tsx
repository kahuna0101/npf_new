import { Metadata } from 'next'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import "./glitch.css"

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}
 
export default function NotFound() {
  return (
    <div className="min-h-screen bg-white-100 text-blue-100 flex items-center justify-center p-4 overflow-hidden">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Glitchy 404 Text */}
        <div className="relative">
          <h1 className="text-9xl md:text-[12rem] font-black glitch-text select-none text-transparent">404</h1>
          <h1 className="absolute inset-0 text-9xl md:text-[12rem] font-black glitch-text-shadow select-none text-blue-100">
            404
          </h1>
          <h1 className="absolute inset-0 text-9xl md:text-[12rem] font-black glitch-text-shadow-2 select-none text-grey-100">
            404
          </h1>
        </div>

        {/* Glitchy Message */}
        <div className="space-y-4">
          <p className="text-xl md:text-2xl glitch-message font-extralight text-neutral-500">This page fell into the void.</p>
          <p className="text-base md:text-lg glitch-subtitle font-extralight text-red-600">
            {"// ERROR: You're on a wrong Page, Click the button to find your way Home"}
          </p>
        </div>

        {/* Glitchy Button */}
        <div className="pt-4">
          <Button asChild size="lg" className="w-60 h-14 bg-blue-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-blue-100 text-white mx-auto rounded-md flex items-center justify-center">
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4 transition-transform group-hover:scale-110" />
              Go Home
            </Link>
          </Button>
        </div>

        {/* Glitch Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="glitch-line glitch-line-1"></div>
          <div className="glitch-line glitch-line-2"></div>
        </div>
      </div>
    </div>
  )
}