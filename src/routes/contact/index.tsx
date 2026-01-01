import React, { useState } from "react"
import { createFileRoute } from "@tanstack/react-router"

import { SectionTitle } from "@/routes/-components/section-title"
import { PageHeader } from "@/components/PageHeader"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"
import { Flower } from "lucide-react"

export const Route = createFileRoute("/contact/")({
    component: RouteComponent,
})

function RouteComponent() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        notes: "",
    })
    const [submitted, setSubmitted] = useState(false)

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        const { name, value } = e.target
        setForm((s) => ({ ...s, [name]: value }))
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        // placeholder submit handler — replace with API call later
        // eslint-disable-next-line no-console
        console.log("contact submit", form)
        setSubmitted(true)
    }

    return (
        <>
            <PageHeader
                badge="Contact"
                title="Reach Out. We're Here Always"
                description="Have questions, ideas, or need support? Connect with us we're ready to listen & help."
                imageSrc="https://framerusercontent.com/images/bfJWU3WWf2H9rE91Ml8co73vubM.png?scale-down-to=2048&width=2160&height=804"
                icon={<Flower className="size-16 md:size-32 lg:size-50" />}
            />

            <div className="max-w-7xl mx-auto py-16">
                <div className="mt-8 grid gap-8 lg:grid-cols-2 items-start">
                    {/* Left column: image + contact cards */}
                    <div className="space-y-6">
                        <div className="rounded-md overflow-hidden">
                            <img
                                src="/images/hero-children-running.png"
                                alt="Children"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="rounded-md bg-muted p-4">
                                <h4 className="font-medium">Our Mail</h4>
                                <p className="text-sm text-muted-foreground">
                                    Careon@gmail.com
                                </p>
                            </div>

                            <div className="rounded-md bg-muted p-4">
                                <h4 className="font-medium">Our Contact</h4>
                                <p className="text-sm text-muted-foreground">
                                    +91 9730627087
                                </p>
                            </div>

                            <div className="rounded-md bg-muted p-4">
                                <h4 className="font-medium">Our Address</h4>
                                <p className="text-sm text-muted-foreground">
                                    No: 78 B Willow Park Drive Austin, TX, USA,
                                    73301
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right column: contact form + FAQ */}
                    <div className="rounded-md border p-6 bg-background">
                        <h3 className="text-lg font-medium mb-4">
                            Contact Information
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="firstName">
                                        First Name
                                    </Label>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        placeholder="Jane"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        placeholder="Smith"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Careon@framer.com"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="contactNumber">
                                        Contact Number
                                    </Label>
                                    <Input
                                        id="contactNumber"
                                        name="contactNumber"
                                        value={form.contactNumber}
                                        onChange={handleChange}
                                        placeholder="+91 8772 62627"
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="notes">Notes</Label>
                                <Textarea
                                    id="notes"
                                    name="notes"
                                    value={form.notes}
                                    onChange={handleChange}
                                    placeholder="Let's work together!"
                                    rows={4}
                                />
                            </div>

                            <div>
                                <Button type="submit" className="w-full">
                                    Submit
                                </Button>
                            </div>

                            {submitted && (
                                <p
                                    role="status"
                                    className="text-sm text-success"
                                >
                                    Thank you — your message has been received.
                                </p>
                            )}
                        </form>

                        {/* FAQ */}
                        <div className="mt-8">
                            <SectionTitle
                                label="FAQ"
                                title={`What You're Thinking, We've Answered.`}
                                subtitle="Find helpful answers to common questions about donating, volunteering & fundraising."
                            />

                            <div className="mt-4">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>
                                            What is your NGO's mission?
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-sm text-muted-foreground">
                                                Our mission is to create
                                                sustainable impact through
                                                community-driven programs
                                                focusing on education, health
                                                and livelihood.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>
                                            How are donations used?
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-sm text-muted-foreground">
                                                Donations support program
                                                delivery, community partners,
                                                and administrative costs to
                                                ensure transparency and impact.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>
                                            Can I volunteer?
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-sm text-muted-foreground">
                                                Yes — we welcome volunteers.
                                                Please reach out via the contact
                                                form with your area of interest.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>
                                            Besides donating, how else can I
                                            help?
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-sm text-muted-foreground">
                                                You can help by volunteering,
                                                spreading awareness, or
                                                partnering with us for events
                                                and programs.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-5">
                                        <AccordionTrigger>
                                            Can I sponsor a child or family?
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-sm text-muted-foreground">
                                                Yes, sponsorship programs are
                                                available — contact us and we'll
                                                share the details.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
