import {
    Github,
    Instagram,
    Twitter,
    Youtube,
    ArrowRight,
    Heart,
    Hexagon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
    return (
        <footer className="bg-background pt-16 pb-8 border-t">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-xl flex items-center gap-2">
                                <Hexagon className="fill-foreground size-6" />{" "}
                                Careon
                            </span>
                        </div>
                        <p className="text-muted-foreground max-w-sm">
                            An open-source collection of copy-and-paste shadcn
                            components, blocks, and templates - paired with a
                            powerful theme generator to craft, customize, and
                            ship faster.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Github className="size-5" />
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Instagram className="size-5" />
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Twitter className="size-5" />
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Youtube className="size-5" />
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-semibold mb-6">Company</h3>
                        <ul className="space-y-4 text-muted-foreground">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Works
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Career
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Help Links */}
                    <div>
                        <h3 className="font-semibold mb-6">Help</h3>
                        <ul className="space-y-4 text-muted-foreground">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Customer Support
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Delivery Details
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-2">
                        <h3 className="font-semibold mb-6">
                            Subscribe to newsletter
                        </h3>
                        <div className="flex gap-2">
                            <Input
                                placeholder="Your email..."
                                className="bg-background"
                            />
                            <Button size="icon">
                                <ArrowRight className="size-4" />
                            </Button>
                        </div>

                        {/* Social Proof Text as placeholder for logos */}
                        <div className="mt-8 flex flex-wrap items-center gap-6 text-muted-foreground opacity-60 text-sm font-medium">
                            <span>bestofjs</span>
                            <span>Product Hunt</span>
                            <span>reddit</span>
                            <span>Medium</span>
                            <span>Combinator</span>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t pt-8 flex items-center justify-center text-muted-foreground text-sm">
                    <p className="flex items-center gap-1">
                        ©2026 Careon, Made with{" "}
                        <Heart className="size-4 text-red-500 fill-red-500" />{" "}
                        for better web.
                    </p>
                </div>
            </div>
        </footer>
    )
}
