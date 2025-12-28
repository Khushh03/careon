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
    Zap,
    BarChart3,
    Flag,
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
            icon: <Heart size={20} />,
            title: "Strengthen Social Good",
            description:
                "Sponsorships grow awareness and strengthen your brand's purpose.",
            image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800",
        },
        {
            icon: <Zap size={20} />,
            title: "Power Meaningful Change",
            description:
                "Financial gifts help drive lasting progress in key cause areas.",
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800",
            isMain: true,
        },
        {
            icon: <BarChart3 size={20} />,
            title: "Fuel Greater Impact",
            description:
                "Your donation scales our work and reaches more communities in need.",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800",
            isMain: true,
        },
        {
            icon: <Flag size={20} />,
            title: "Share Valuable Resources",
            description:
                "In-kind support accelerates logistics, technology, and field operations.",
            image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800",
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
                        Feeding families, educating children, impacting lives
                        compassion and support.
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
                        Your support can transformed lives and inspire better
                        futures.
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

