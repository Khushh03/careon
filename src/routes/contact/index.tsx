import { createFileRoute } from "@tanstack/react-router"

import { PageHeader } from "@/components/PageHeader"
import { FAQSection } from "@/components/FAQSection"
import { ContactSection } from "@/components/ContactSection"
import { Flower } from "lucide-react"

export const Route = createFileRoute("/contact/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <>
            <PageHeader
                badge="Contact"
                title="Reach Out. We're Here Always"
                description="Have questions, ideas, or need support? Connect with us we're ready to listen & help."
                imageSrc="https://framerusercontent.com/images/bfJWU3WWf2H9rE91Ml8co73vubM.png?scale-down-to=2048&width=2160&height=804"
                icon={<Flower className="size-16 md:size-32 lg:size-50" />}
            />

            <ContactSection />
            <FAQSection />
        </>
    )
}
