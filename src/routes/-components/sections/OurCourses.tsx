// export default function OurCourses() {
//   return (
//     <div>OurCourses</div>
//   )
// }


import React from "react"
import { ArrowUpRight, ArrowRight } from "lucide-react"

interface CauseProps {
    image: string
    title: string
    raised: number
    goal: number
}

const CauseCard: React.FC<CauseProps> = ({ image, title, raised, goal }) => {
    return (
        <div className="bg-[#121212] border border-white/5 rounded-[2rem] p-5 space-y-6 transition-all hover:border-white/20">
            {/* Image Container */}
            <div className="overflow-hidden rounded-2xl">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="space-y-4">
                <h3 className="text-white font-bold text-lg leading-tight min-h-[56px]">
                    {title}
                </h3>

                {/* Amount Info */}
                <div className="flex justify-between items-end text-sm">
                    <div className="space-y-1">
                        <p className="text-gray-400 font-medium">
                            Raised Amount
                        </p>
                        <p className="text-white font-bold">
                            ${raised.toLocaleString()}
                        </p>
                    </div>
                    <div className="space-y-1 text-right">
                        <p className="text-gray-400 font-medium">Goal Amount</p>
                        <p className="text-white font-bold">
                            ${goal.toLocaleString()}
                        </p>
                    </div>
                </div>

                {/* Learn More Button */}
                <button className="w-full py-3 bg-white text-black rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                    Learn More <ArrowRight size={16} />
                </button>
            </div>
        </div>
    )
}

export default function OurCourses() {
    const causes = [
        {
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800",
            title: "Fundraising for Education Equality and Access",
            raised: 40000,
            goal: 65200,
        },
        {
            image: "https://images.unsplash.com/photo-1541976535096-2f9bbec03be0?q=80&w=800",
            title: "Building Stronger Futures Through Healthcare Access",
            raised: 52000,
            goal: 75200,
        },
        {
            image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800",
            title: "Empowering Women and Girls Through Education",
            raised: 80000,
            goal: 85000,
        },
    ]

    return (
        <section className="bg-black py-24 px-6 font-inter text-white">
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Header Area */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#00B94E]"></span>
                            <span className="text-xs font-bold tracking-widest uppercase opacity-70">
                                Causes
                            </span>
                        </div>
                        <h2 className="text-[28px] font-bold tracking-tight">
                            Causes That Inspire
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                        From education to relief efforts, every cause reflects
                        our shared mission to empower.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {causes.map((cause, index) => (
                        <CauseCard key={index} {...cause} />
                    ))}
                </div>

                {/* Bottom Navigation */}
                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        Explore all causes and join us in making a meaningful
                        impact.
                    </p>
                    <a
                        href="#"
                        className="text-[#00B94E] font-bold text-sm flex items-center gap-1 hover:underline"
                    >
                        View All Causes <ArrowUpRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    )
}
