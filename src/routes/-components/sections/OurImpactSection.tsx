type ImpactCardProps = {
    image: string
    stats: string
    title: string
    description: string
}

const ImpactCard = ({ image, stats, title, description }: ImpactCardProps) => (
    <div className="relative h-72 w-full rounded-[2.5rem] overflow-hidden group">
        {/* Background Image */}
        <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-8 text-white space-y-1">
            <h3 className="text-4xl font-bold tracking-tight">{stats}</h3>
            <p className="text-lg font-semibold">{title}</p>
            <p className="text-sm text-gray-300 opacity-90">{description}</p>
        </div>
    </div>
)

export default function OurImpactSection() {
    const impactData = [
        {
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800",
            stats: "1,000+",
            title: "Meals Distributed",
            description: "For families and individuals.",
        },
        {
            image: "https://images.unsplash.com/photo-1541976535096-2f9bbec03be0?q=80&w=800",
            stats: "300+",
            title: "Homes rebuilt",
            description: "Families restore safety & dignity.",
        },
        {
            image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800",
            stats: "256+",
            title: "Projects delivered",
            description: "Supporting in healthcare & crisis.",
        },
    ]

    return (
        <section className="py-24 px-6 bg-[#F3F3F3] font-inter">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header Area */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#00B94E]"></span>
                            <span className="text-sm font-semibold text-gray-600 tracking-wide">
                                Our Impact
                            </span>
                        </div>
                        <h2 className="text-[28px] font-bold text-[#1A1A1A] tracking-tight">
                            Together for change
                        </h2>
                    </div>

                    <p className="text-gray-500 text-sm md:text-base max-w-[280px] leading-relaxed font-medium">
                        Feeding families, educating children & rebuilding lives
                        what our impact shows.
                    </p>
                </div>

                {/* Impact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-6">
                    {impactData.map((item, index) => (
                        <ImpactCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
