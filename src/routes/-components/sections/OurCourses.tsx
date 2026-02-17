// export default function OurCourses() {
//   return (
//     <div>OurCourses</div>
//   )
// }


import React, { useState } from "react"

interface CauseProps {
    image: string
    title: string
}

const CauseCard: React.FC<CauseProps> = ({ image, title }) => {
    return (
        <div className="relative overflow-hidden rounded-xl group h-full">
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
    const { selected, setSelected } = useSelectedArea()

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

                {/* Image Tiles Grid (equal-height columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
                    {causes.map((cause, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setSelected(cause)}
                            className="block h-full text-left"
                        >
                            <CauseCard {...cause} />
                        </button>
                    ))}
                </div>

                {/* Detail modal (in-page) */}
                {selected && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div
                            className="absolute inset-0 bg-black/60"
                            onClick={() => setSelected(null)}
                        />

                        <div className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full mx-4 shadow-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="h-64 md:h-auto">
                                    <img
                                        src={selected.image}
                                        alt={selected.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6 text-black">
                                    <h3 className="text-2xl font-bold mb-3">{selected.title}</h3>
                                    <p className="text-gray-700 mb-4">
                                        Detailed information about {selected.title} programs, projects,
                                        success stories, partner organizations, and ways to get
                                        involved.
                                    </p>
                                    <div className="mt-4 flex gap-3">
                                        <button
                                            onClick={() => setSelected(null)}
                                            className="px-4 py-2 bg-gray-200 rounded-md"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

// local state for modal
function useSelectedArea() {
    const [selected, setSelected] = useState<null | { image: string; title: string }>(null)
    return { selected, setSelected }
}
