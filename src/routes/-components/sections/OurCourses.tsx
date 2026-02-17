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
}

const CauseCard: React.FC<CauseProps> = ({ image, title }) => {
    return (
        <div className="relative overflow-hidden rounded-xl group">
            <img
                src={image}
                alt={title}
                className="w-full h-56 sm:h-64 md:h-56 lg:h-60 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-4">
                    <h3 className="text-white font-semibold text-lg">
                        {title}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default function OurCourses() {
    const causes = [
        {
            image:
                "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200",
            title: "Healthcare",
        },
        {
            image:
                "https://images.unsplash.com/photo-1558980664-10d6d7b4f1b9?q=80&w=1200",
            title: "Community",
        },
        {
            image:
                "https://images.unsplash.com/photo-1558002037-9b6f8e2b6b3b?q=80&w=1200",
            title: "Education",
        },
        {
            image:
                "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200",
            title: "Agriculture",
        },
        {
            image:
                "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1200",
            title: "Dairy",
        },
        {
            image:
                "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1200",
            title: "Handloom",
        },
        {
            image:
                "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200",
            title: "Animal Welfare",
        },
        {
            image:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200",
            title: "Women Empowerment",
        },
    ]

    return (
        <section className="bg-black py-12 px-4 font-inter text-white">
            <div className="max-w-7xl mx-auto">
                {/* Header Area */}
                <div className="mb-8">
                    <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#00B94E]"></span>
                        <h3 className="text-xs font-bold tracking-widest uppercase opacity-70">
                            Our Work
                        </h3>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
                        Areas of Work
                    </h2>
                </div>

                {/* Image Tiles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {causes.map((cause, index) => (
                        <CauseCard key={index} {...cause} />
                    ))}
                </div>
            </div>
        </section>
    )
}
