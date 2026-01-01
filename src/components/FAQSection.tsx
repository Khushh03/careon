import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"

export function FAQSection() {
    return (
        <section className="max-w-7xl mx-auto py-16 px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                {/* Left Column: Title & Description */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-success"></span>
                        <span className="font-medium">FAQ</span>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                            What You're Thinking,{" "}
                            <br className="hidden lg:block" />
                            We've Answered.
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-md">
                            Find helpful answers to common questions about
                            donating, volunteering & fundraising.
                        </p>
                    </div>
                </div>

                {/* Right Column: Accordion */}
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-base font-medium">
                                What is your NGO's mission?
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                Our mission is to create sustainable impact
                                through community-driven programs focusing on
                                education, health and livelihood.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-base font-medium">
                                How are donations used?
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                Donations support program delivery, community
                                partners, and administrative costs to ensure
                                transparency and impact.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-base font-medium">
                                Can I volunteer?
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                Yes — we welcome volunteers. Please reach out
                                via the contact form with your area of interest.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-base font-medium">
                                Besides donating, how else can I help?
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                You can help by volunteering, spreading
                                awareness, or partnering with us for events and
                                programs.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-base font-medium">
                                Can I sponsor a child or family?
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                Yes, sponsorship programs are available —
                                contact us and we'll share the details.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
