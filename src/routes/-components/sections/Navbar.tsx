import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react" 
export default function Navbar() {
    const [open, setOpen] = useState(false)
    const links = ["About", "Causes", "Programs", "Blog", "Contact"]

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
            <div className="relative z-50 flex items-center justify-between px-6 py-3 bg-background/80 backdrop-blur-md border border-border rounded-full shadow-lg">
                <a href="/" className="flex items-center gap-2 group">
                    <div className="text-foreground font-bold text-xl md:text-2xl tracking-tight transition-colors">
                        Careon
                        <span className="text-primary">.</span>
                    </div>
                </a>

                <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    {links.map((link) => (
                        <li key={link}>
                            <a
                                href={`#${link.toLowerCase()}`}
                                className="hover:text-foreground transition-colors py-2"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <DonateButton />
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        onClick={() => setOpen((prev) => !prev)}
                        className="md:hidden text-foreground hover:bg-accent hover:text-accent-foreground rounded-full"
                    >
                        {open ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </Button>
                </div>
            </div>

            <div
                className={`
                absolute top-full left-0 w-full mt-2
                origin-top transition-all duration-300 ease-in-out
                md:hidden 
                ${
                    open
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
                }
            `}
            >
                <div className="bg-popover/60 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-2xl">
                    <ul className="flex flex-col gap-1">
                        {links.map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link.toLowerCase()}`}
                                    onClick={() => setOpen(false)}
                                    className="block px-4 py-3 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-xl transition-all"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}

                        <li className="pt-4 mt-2 border-t border-border">
                            <div
                                className="w-full"
                                onClick={() => setOpen(false)}
                            >
                                <DonateButton fullWidth />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// Reusable Button Component
function DonateButton({ fullWidth = false }) {
    return (
        <Button
            variant="outline"
            className={`
                relative h-10 overflow-hidden group border-primary/20 hover:border-primary
                bg-background text-foreground font-medium rounded-full
                ${fullWidth ? "w-full" : "px-6"}
            `}
        >
            <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300">
                Donate Now
            </span>

            <span className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
        </Button>
    )
}
