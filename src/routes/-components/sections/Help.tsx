// export default function Help() {
//   return (
//     <div>help</div>
//   )
// }

import React, { useRef } from "react"
import {
    ChevronLeft,
    ChevronRight,
    ArrowUpRight,
    Heart,
    BarChart3,
    BookOpen,
    Smile,
} from "lucide-react"

interface TransformCardProps {
    icon: React.ReactNode
    title: string
    description: string
    image: string
    isMain?: boolean
}

const TransformCard: React.FC<TransformCardProps> = ({
    icon,
    title,
    description,
    image,
    isMain,
}) => (
    <div
        className={`relative flex-shrink-0 w-[280px] md:w-[320px] h-[450px] rounded-[2.5rem] overflow-hidden group transition-all duration-500 ${!isMain && "opacity-50 grayscale hover:opacity-100 hover:grayscale-0"}`}
    >
        {/* Background Image */}
        <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay (Green to Black as seen in image) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00B94E]/90 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-8 space-y-4 w-full">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                {icon}
            </div>
            <div className="space-y-2">
                <h3 className="text-xl font-bold text-white leading-tight font-inter">
                    {title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed font-medium font-inter">
                    {description}
                </p>
            </div>
        </div>
    </div>
)

export default function Help() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const cards = [
        {
            icon: <BookOpen size={20} />,
            title: "Children’s Education",
            description:
                "Free residential schooling for children of leprosy-affected families, empowering them with knowledge and confidence.",
            image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800",
        },
        {
            icon: <Heart size={20} />,
            title: "Leprosy Care",
            description:
                "Providing free medical treatment, surgeries, and rehabilitation to leprosy-affected individuals with dignity.",
            image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=800",
            isMain: true,
        },
        {
            icon: <BarChart3 size={20} />,
            title: "Livelihood Programs",
            description:
                "Skill-building through Khadi, tailoring, dairy, and handicrafts to promote self-reliance and economic stability.",
            image: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da?q=80&w=800",
            isMain: true,
        },
        {
            icon: <Smile size={20} />,
            title: "Make Them Happy",
            description:
                "Building eco-friendly mud homes and safe colonies to ensure dignity, safety, and a sense of belonging.",
            image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=800",
        },
    ]

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current
            const scrollTo =
                direction === "left"
                    ? scrollLeft - clientWidth / 3
                    : scrollLeft + clientWidth / 3
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
        }
    }

    return (
        <section className="py-24 px-6 bg-white font-inter">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Hero / Impact Intro (from design) */}
                <div className="text-left">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                        We're Helping Hand On
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">
                        5,000 Individuals In 22+ Colony
                    </h2>
                    <p className="mt-6 text-gray-600 max-w-3xl leading-relaxed">
                        At Little Flower Leprosy Welfare Association, we stand beside over 5,000 families affected by leprosy, spread across 22+ underserved colonies. With compassion at our core, we provide healthcare, education, livelihood support, and dignity to those often forgotten. Each family we touch is a step closer to healing, hope, and a better future.
                    </p>
                </div>

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#00B94E]"></span>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                                How you can help
                            </span>
                        </div>
                        <h2 className="text-[28px] font-bold text-gray-900 tracking-tight">
                            United, We Transform
                        </h2>
                    </div>
                    <p className="text-gray-500 text-sm md:text-base max-w-sm leading-relaxed font-medium">
                        Feeding families, educating children, impacting lives with compassion and support.
                    </p>
                </div>

                {/* Carousel Content */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {cards.map((card, idx) => (
                        <div key={idx} className="snap-center">
                            <TransformCard {...card} />
                        </div>
                    ))}
                </div>

                {/* Bottom Navigation & Progress */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-gray-100">
                    <p className="text-gray-400 text-sm max-w-[240px]">
                        Your support can transform lives and inspire better futures.
                    </p>

                    <div className="flex items-center gap-6 flex-1 max-w-md">
                        <button
                            onClick={() => scroll("left")}
                            className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* Progress Bar (Visual Only) */}
                        <div className="h-[2px] flex-1 bg-gray-100 rounded-full relative">
                            <div className="absolute inset-0 bg-[#00B94E] w-1/2 rounded-full" />
                        </div>

                        <button
                            onClick={() => scroll("right")}
                            className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-all"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    <a
                        href="#"
                        className="flex items-center gap-1 text-[#00B94E] font-bold text-sm hover:translate-x-1 transition-transform"
                    >
                        Join Our Missions <ArrowUpRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    )
}

