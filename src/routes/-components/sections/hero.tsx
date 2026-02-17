import { TextReveal } from "@/components/ui/text-reveal"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
    return (
        <div className="h-screen relative z-10 grid items-center">
            {/* Background video (YouTube embed muted & autoplay) - full-bleed behind content */}
            <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
                <iframe
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[120vw] min-h-[120vh] w-auto h-auto"
                    src="https://www.youtube.com/embed/sqGg9Er8hnE?autoplay=1&mute=1&controls=0&loop=1&playlist=sqGg9Er8hnE&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&disablekb=1&fs=0&showinfo=0"
                    title="Hero background video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    aria-hidden="true"
                    tabIndex={-1}
                />
            </div>

            {/* Dark gradient overlay (left dark, right transparent so video text remains visible) */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />

            {/* Content */}
            <section className="max-w-6xl w-full mx-auto px-4 relative z-20">
                <div className="max-w-lg space-y-2 md:ml-8 lg:ml-16">
                    {/* Eyebrow / subtitle */}
                    <p className="text-primary font-medium tracking-wide">
                        Together, We Create Impact
                    </p>

                    {/* Title */}
                    <h1>
                        <TextReveal
                            variant="blur"
                            className="text-white text-6xl lg:text-8xl font-medium leading-tight text-wrap"
                            staggerDelay={0.04}
                            delay={0}
                            startOnView={false}
                            children="Unite. Act. Transform."
                        />
                    </h1>

                    {/* Description */}
                    <p className="max-w-xl text-white/90 text-lg leading-relaxed">
                        Your support powers life changing missions feeding
                        families & rebuilding hope.
                    </p>

                    {/* CTAs (moved to bottom center) */}
                </div>
            </section>

            {/* Bottom-centered CTAs so both buttons are centered and visible */}
            <div className="absolute left-1/2 bottom-12 -translate-x-1/2 z-20">
                <div className="flex items-center gap-4">
                    <button className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white font-medium hover:bg-primary/80 transition">
                        Donate Now
                        <span className="relative size-5 overflow-hidden">
                            <ArrowRight className="size-5 top-0 left-0 absolute transition-all translate-x-0 group-hover:translate-x-full" />
                            <ArrowRight className="size-5 top-0 left-0 absolute transition-all -translate-x-full group-hover:translate-x-0" />
                        </span>
                    </button>

                    <button className="inline-flex items-center rounded-full bg-white px-6 py-3 text-black font-medium hover:bg-gray-100 transition">
                        Learn About Us
                    </button>
                </div>
            </div>
        </div>
    )
}
