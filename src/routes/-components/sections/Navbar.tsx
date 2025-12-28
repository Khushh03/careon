import { Button } from "@/components/ui/button"

export default function Navbar() {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
            <div className="gap-4 flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
                {/* Logo */}
                <div className="text-white font-bold text-3xl tracking-tight">
                    Careon
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium">
                    <li className="hover:text-white cursor-pointer transition-colors">
                        About
                    </li>
                    <li className="hover:text-white cursor-pointer transition-colors">
                        Causes
                    </li>
                    <li className="hover:text-white cursor-pointer transition-colors">
                        Programs
                    </li>
                    <li className="hover:text-white cursor-pointer transition-colors">
                        Blog
                    </li>
                    <li className="hover:text-white cursor-pointer transition-colors">
                        Contact
                    </li>
                </ul>

                {/* CTA Button */}

                <Button className="relative border-2 border-primary overflow-hidden z-10 h-12 w-full max-w-60 group gap-6 font-semibold text-foreground hover:text-background">
                    <div className="bg-foreground -z-10 absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in" />
                    <span className="text-foreground group-hover:text-primary transition-all ease-in duration-400">
                        Donate Now
                    </span>
                </Button>
            </div>
        </nav>
    )
}
