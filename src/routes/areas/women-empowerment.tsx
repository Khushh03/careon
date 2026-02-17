import { createFileRoute } from "@tanstack/react-router"
import { PageHeader } from "@/components/PageHeader"

export const Route = createFileRoute("/areas/women-empowerment/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <PageHeader
        badge="Areas of Work"
        title="Women Empowerment"
        description="Initiatives empowering women with skills, livelihoods, and leadership."
        imageSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200"
      />

      <section className="max-w-4xl mx-auto px-6 py-12 text-white">
        <h3 className="text-2xl font-bold mb-4">About Women Empowerment</h3>
        <p className="text-gray-300 leading-relaxed">
          Detailed information about Women Empowerment programs, projects,
          success stories, partner organizations, and ways to get involved.
        </p>
      </section>
    </>
  )
}
import { createFileRoute } from "@tanstack/react-router"import { createFileRoute } from '@tanstack/react-router'



























}  )    </>      </section>        </p>          success stories, partner organizations, and ways to get involved.          Detailed information about Women Empowerment programs, projects,        <p className="text-gray-300 leading-relaxed">        <h3 className="text-2xl font-bold mb-4">About Women Empowerment</h3>      <section className="max-w-4xl mx-auto px-6 py-12 text-white">      />        imageSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200"        description="Initiatives empowering women with skills, livelihoods, and leadership."        title="Women Empowerment"        badge="Areas of Work"      <PageHeader    <>  return (function RouteComponent() {})  component: RouteComponent,export const Route = createFileRoute("/areas/women-empowerment/")({import { PageHeader } from "@/components/PageHeader"
export const Route = createFileRoute('/areas/women-empowerment')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/areas/women-empowerment"!</div>
}
