export function SectionTitle({
    label,
    title,
    subtitle,
}: {
    label: string
    title?: string
    subtitle?: string
}) {
    return (
        <div className="space-y-4">
            <span className="gap-2 inline-flex items-center text-base font-medium">
                <span className="size-3 rounded-full bg-primary" />
                {label}
            </span>
            <div className="gap-2 lg:gap-6 flex flex-col lg:flex-row justify-between">
                {title && (
                    <h2 className="text-4xl font-semibold tracking-tight text-foreground">
                        {title}
                    </h2>
                )}

                {subtitle && (
                    <p className="text-balance max-w-sm text-muted-foreground">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    )
}
