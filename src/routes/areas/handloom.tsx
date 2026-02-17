import { createFileRoute } from "@tanstack/react-router"
import { PageHeader } from "@/components/PageHeader"

export const Route = createFileRoute("/areas/handloom/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <PageHeader
        badge="Areas of Work"
        title="Handloom"
        description="Supporting traditional handloom weaving and artisans."
        imageSrc="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1200"
      />

      <section className="max-w-4xl mx-auto px-6 py-12 text-white">
        <h3 className="text-2xl font-bold mb-4">About Handloom</h3>
        <p className="text-gray-300 leading-relaxed">
          Detailed information about Handloom programs, projects, success
          stories, partner organizations, and ways to get involved.
        </p>
      </section>
    </>
  )
}
import { createFileRoute } from "@tanstack/react-router"import { createFileRoute } from '@tanstack/react-router'



























}  )    </>      </section>        </p>          stories, partner organizations, and ways to get involved.          Detailed information about Handloom programs, projects, success        <p className="text-gray-300 leading-relaxed">        <h3 className="text-2xl font-bold mb-4">About Handloom</h3>      <section className="max-w-4xl mx-auto px-6 py-12 text-white">      />        imageSrc="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1200"        description="Supporting traditional handloom weaving and artisans."        title="Handloom"        badge="Areas of Work"      <PageHeader    <>  return (function RouteComponent() {})  component: RouteComponent,export const Route = createFileRoute("/areas/handloom/")({import { PageHeader } from "@/components/PageHeader"
export const Route = createFileRoute('/areas/handloom')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/areas/handloom"!</div>
}
