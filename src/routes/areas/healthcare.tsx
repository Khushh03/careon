import { createFileRoute } from "@tanstack/react-router"
import { PageHeader } from "@/components/PageHeader"

export const Route = createFileRoute("/areas/healthcare/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <PageHeader
        badge="Areas of Work"
        title="Healthcare"
        description="Our healthcare initiatives bring essential medical services and preventive care to underserved communities."
        imageSrc="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200"
      />

      <section className="max-w-4xl mx-auto px-6 py-12 text-white">
        <h3 className="text-2xl font-bold mb-4">About Healthcare</h3>
        <p className="text-gray-300 leading-relaxed">
          Detailed information about Healthcare programs, projects, success
          stories, partner organizations, and ways to get involved.
        </p>
      </section>
    </>
  )
}
import { createFileRoute } from "@tanstack/react-router"import { createFileRoute } from '@tanstack/react-router'



























}  )    </>      </section>        </p>          stories, partner organizations, and ways to get involved.          Detailed information about Healthcare programs, projects, success        <p className="text-gray-300 leading-relaxed">        <h3 className="text-2xl font-bold mb-4">About Healthcare</h3>      <section className="max-w-4xl mx-auto px-6 py-12 text-white">      />        imageSrc="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200"        description="Our healthcare initiatives bring essential medical services and preventive care to underserved communities."        title="Healthcare"        badge="Areas of Work"      <PageHeader    <>  return (function RouteComponent() {})  component: RouteComponent,export const Route = createFileRoute("/areas/healthcare/")({import { PageHeader } from "@/components/PageHeader"
export const Route = createFileRoute('/areas/healthcare')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/areas/healthcare"!</div>
}
