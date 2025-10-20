import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="pt-20 min-h-screen">
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}