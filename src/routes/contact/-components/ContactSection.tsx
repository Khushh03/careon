import React, { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Field, FieldLabel, FieldContent } from "@/components/ui/field"

export function ContactSection() {
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
        console.log("contact submit", form)
        setSubmitted(true)
    }

    return (
        <div className="py-16 lg:py-24 bg-muted-foreground/15">
            <div className="max-w-7xl mx-auto px-4 grid gap-12 lg:grid-cols-2 items-start">
                <div className="space-y-8">
                    <div className="rounded-2xl overflow-hidden shadow-sm">
                        <img
                            src="https://framerusercontent.com/images/I1VHahfUYuXWOnNLfSGBIbH9h6Q.jpg?scale-down-to=2048&width=5184&height=3456"
                            alt="Children"
                            className="w-full h-auto object-cover max-h-64"
                        />
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                title: "Our Mail",
                                description: "Careon@gmail.com",
                                icon: <Mail className="size-6" />,
                            },
                            {
                                title: "Our Contact",
                                description: "+91 9730627087",
                                icon: <Phone className="size-6" />,
                            },
                            {
                                title: "Our Address",
                                description:
                                    "No: 78 B Willow Park Drive Austin, TX, USA, 73301",
                                icon: <MapPin className="size-6" />,
                            },
                        ].map((item) => (
                            <div className="rounded-lg bg-card p-4 shadow-sm flex items-center gap-4">
                                <div className="bg-primary p-3 rounded-md text-primary-foreground">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">
                                        {item.title}
                                    </h4>
                                    <p className="text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-3xl border border-border/10 p-8 bg-card shadow-sm">
                    <h3 className="text-2xl font-bold mb-8 text-primary">
                        Contact Information
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                {
                                    name: "firstName",
                                    label: "First Name",
                                    placeholder: "Jane",
                                },
                                {
                                    name: "lastName",
                                    label: "Last Name",
                                    placeholder: "Smith",
                                },
                                {
                                    name: "email",
                                    label: "Email",
                                    placeholder: "Careon@framer.com",
                                    type: "email",
                                },
                                {
                                    name: "contactNumber",
                                    label: "Contact Number",
                                    placeholder: "+91 8772 62627",
                                },
                                {
                                    name: "notes",
                                    label: "Notes",
                                    placeholder: "Let's work together!",
                                    textarea: true,
                                    className: "col-span-2",
                                },
                            ].map((field) => (
                                <Field
                                    key={field.name}
                                    className={field.className}
                                >
                                    <FieldLabel
                                        htmlFor={field.name}
                                        className="text-muted-foreground font-normal"
                                    >
                                        {field.label}
                                    </FieldLabel>
                                    <FieldContent>
                                        {field.textarea ? (
                                            <Textarea
                                                id={field.name}
                                                name={field.name}
                                                value={
                                                    form[
                                                        field.name as keyof typeof form
                                                    ]
                                                }
                                                onChange={handleChange}
                                                placeholder={field.placeholder}
                                                rows={6}
                                                className="bg-muted border-0 focus-visible:ring-1 focus-visible:ring-primary resize-none min-h-38"
                                            />
                                        ) : (
                                            <Input
                                                id={field.name}
                                                name={field.name}
                                                type={field.type || "text"}
                                                value={
                                                    form[
                                                        field.name as keyof typeof form
                                                    ]
                                                }
                                                onChange={handleChange}
                                                placeholder={field.placeholder}
                                                className="bg-muted border-0 focus-visible:ring-1 focus-visible:ring-primary"
                                            />
                                        )}
                                    </FieldContent>
                                </Field>
                            ))}
                        </div>

                        <div className="pt-2">
                            <Button
                                type="submit"
                                className="w-full font-medium h-12"
                            >
                                Submit
                            </Button>
                        </div>

                        {submitted && (
                            <p
                                role="status"
                                className="text-sm text-muted-foreground mt-2 text-center"
                            >
                                Thank you — your message has been received.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}
