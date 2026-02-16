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
            {/* Background video (YouTube embed muted & autoplay) - sits behind the overlay */}
            <iframe
                className="absolute top-0 left-1/2 w-screen h-screen -translate-x-1/2 object-cover -z-20 pointer-events-none"
                src="https://www.youtube.com/embed/sqGg9Er8hnE?autoplay=1&mute=1&controls=0&loop=1&playlist=sqGg9Er8hnE&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1"
                title="Hero background video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-black mask-t-from-0 -z-10" />

            {/* Content */}
            <section className="max-w-6xl w-full mx-auto px-4">
                <div className="max-w-lg space-y-2">
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

                    {/* CTAs */}
                    <div className="flex items-center gap-4 pt-4">
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
            </section>
        </div>
    )
}
