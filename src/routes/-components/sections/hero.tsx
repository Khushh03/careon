import { TextReveal } from "@/components/ui/text-reveal"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
    return (
        <div
            style={{
                backgroundImage: `url("/images/hero-children-running.png")`,
            }}
            className="h-screen relative bg-cover z-10 grid items-center"
        >
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-black mask-t-from-0 -z-10" />

            {/* Content */}
            <section className="max-w-6xl w-full mx-auto px-4">
                <div className="max-w-lg space-y-2">
                    {/* Eyebrow / subtitle */}
                    <p className="text-green-500 font-medium tracking-wide">
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

                    {/* CTAs */}
                    <div className="flex items-center gap-4 pt-4">
                        <button className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-white font-medium hover:bg-green-600 transition">
                            Donate Now
                            <ArrowRight />
                        </button>

                        <button className="inline-flex items-center rounded-full bg-white px-6 py-3 text-black font-medium hover:bg-gray-100 transition">
                            Learn About Us
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
