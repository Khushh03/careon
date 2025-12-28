import { Button } from "@/components/ui/button"
import { SectionTitle } from "../section-title"
import { ArrowRightIcon } from "lucide-react"

const programs = {
    section: {
        id: "programs",
        label: "Programs",
        title: "Spark Positive Change",
        subtitle:
            "Our efforts provide care, skills, and support igniting hope and lasting impact in the lives.",
        sideImages: [
            {
                src: "https://framerusercontent.com/images/wFKQPsH9rNbJWNGGelmsCnkTIGc.jpg",
                alt: "girl in white and pink dress with face mask",
            },
            {
                src: "https://framerusercontent.com/images/ygeuhmIB0mDByoO9joNsWk3rCvM.jpg",
                alt: "a group of children standing around each other",
            },
            {
                src: "https://framerusercontent.com/images/2srJeanTF7o28bioeTcEYLrSCms.jpg",
                alt: "selective focus photography of girl drinking water",
            },
        ],
        programs: [
            {
                id: "healthcare-access",
                tag: "Emergency Health Relief",
                title: "Healthcare Access",
                description:
                    "Ensure fast delivery of medical and health units during emergency to provide care and support recovery.",
                raisedAmount: 16800,
                goalAmount: 40000,
                cta: {
                    label: "Learn More",
                    href: "/programs/healthcare-access",
                },
            },
            {
                id: "nutritional-support",
                tag: "Food Security Initiative",
                title: "Nutritional Support",
                description:
                    "Ensure timely access to nutritious food, clean water, and supplements for communities in times of crisis.",
                raisedAmount: 60800,
                goalAmount: 100800,
                cta: {
                    label: "Learn More",
                    href: "/programs/nutritional-support",
                },
            },
            {
                id: "access-to-clean-water",
                tag: "Water Purification Project",
                title: "Access to Clean Water",
                description:
                    "Provide clean water access through filtration systems, safe water distribution and hygiene education.",
                raisedAmount: 20800,
                goalAmount: 60000,
                cta: {
                    label: "Learn More",
                    href: "/programs/access-to-clean-water",
                },
            },
        ],
    },
}

export default function ProgramsSection() {
    const { section } = programs
    return (
        <section id={section.id} className="py-24 px-6 bg-muted">
            <div className="mx-auto max-w-7xl space-y-16">
                <SectionTitle
                    label={section.label}
                    title={section.title}
                    subtitle={section.subtitle}
                />

                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Left Images */}
                    <div className="grid gap-6">
                        {section.sideImages.map((image, index) => (
                            <div
                                key={index}
                                className="hidden lg:block sticky top-1/4 rounded-xl bg-card p-2 shadow"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full rounded-md object-cover lg:h-80"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right Programs */}
                    <div className="space-y-6">
                        {section.programs.map((program, idx) => {
                            const progress =
                                (program.raisedAmount / program.goalAmount) *
                                100

                            return (
                                <div
                                    key={program.id}
                                    className="rounded-3xl bg-card p-4 shadow-sm lg:h-84"
                                >
                                    <img
                                        src={section.sideImages[idx].src}
                                        alt={section.sideImages[idx].alt}
                                        className="block lg:hidden w-full rounded-2xl object-cover"
                                    />
                                    {/* Tag */}
                                    <span className="mt-4 inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-semibold">
                                        {program.tag}
                                    </span>

                                    {/* Title */}
                                    <h3 className="mt-4 text-xl font-semibold">
                                        {program.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-2 text-sm text-muted-foreground/90">
                                        {program.description}
                                    </p>

                                    {/* Amounts */}
                                    <div className="mt-6 flex items-center justify-between text-sm">
                                        <div>
                                            <p className="text-muted-foreground/80">
                                                Raised Amount
                                            </p>
                                            <p className="font-semibold">
                                                $
                                                {program.raisedAmount.toLocaleString()}
                                            </p>
                                        </div>

                                        <div className="text-right">
                                            <p className="text-muted-foreground/80">
                                                Goal Amount
                                            </p>
                                            <p className="font-semibold">
                                                $
                                                {program.goalAmount.toLocaleString()}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="mt-3 h-2 w-full rounded-full bg-muted">
                                        <div
                                            className="h-2 rounded-full bg-primary"
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-6">
                                        <Button
                                            asChild
                                            variant={"outline"}
                                            size={"icon-lg"}
                                            className="relative overflow-hidden z-10 w-full max-w-60 group gap-6"
                                        >
                                            <a href={program.cta.href}>
                                                <div className="bg-foreground -z-10 absolute inset-0 w-200 -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in" />
                                                <span className="text-foreground group-hover:text-background transition-all ease-in duration-500">
                                                    {program.cta.label}
                                                </span>{" "}
                                                <ArrowRightIcon className="text-foreground group-hover:text-background group-hover:-translate-x-2 group-hover:-rotate-45 transition-all ease-in duration-500" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
