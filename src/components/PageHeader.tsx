import { ReactNode } from "react"

interface PageHeaderProps {
    badge: string
    title: string
    description: string
    imageSrc: string
    icon?: ReactNode
}

export function PageHeader({
    badge,
    title,
    description,
    imageSrc,
    icon,
}: PageHeaderProps) {
    return (
        <section className="mx-auto relative z-10 w-full">
            <figure>
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover absolute inset-0 -z-10"
                />
            </figure>
            <div className="h-120 pt-32 pb-8 px-4 flex items-end backdrop-blur-md bg-zinc-950/60 text-zinc-50 z-10">
                <div className="max-w-7xl w-full mx-auto space-y-4">
                    <span className="gap-2 inline-flex items-center text-base font-medium text-primary bg-zinc-950 border border-ring/50 px-4 py-2 rounded-full">
                        {badge}
                    </span>
                    <div className="flex justify-between items-end">
                        <div className="max-w-2xl gap-2 lg:gap-6 flex flex-col justify-between">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance text-zinc-50">
                                {title}
                            </h2>
                            <p className="text-balance max-w-sm text-zinc-100">
                                {description}
                            </p>
                        </div>
                        {icon && <div>{icon}</div>}
                    </div>
                </div>
            </div>
        </section>
    )
}
