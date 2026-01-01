import { createFileRoute } from "@tanstack/react-router"
import HeroSection from "./-components/sections/hero"
import AboutSection from "./-components/sections/AboutSection"
import OurImpactSection from "./-components/sections/OurImpactSection"
import OurCourses from "./-components/sections/OurCourses"
import Help from "./-components/sections/Help"
import ProgramsSection from "./-components/sections/ProgramsSection"
export const Route = createFileRoute("/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <OurImpactSection />
            <OurCourses />
            <ProgramsSection />
            <Help />
        </main>
    )
}
