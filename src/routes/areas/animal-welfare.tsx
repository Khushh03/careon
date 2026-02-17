import { createFileRoute } from "@tanstack/react-router"
import { PageHeader } from "@/components/PageHeader"

export const Route = createFileRoute("/areas/animal-welfare/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <PageHeader
        badge="Areas of Work"
        title="Animal Welfare"
        description="Programs ensuring the well-being of animals and livestock."
        imageSrc="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200"
      />

      <section className="max-w-4xl mx-auto px-6 py-12 text-white">
        <h3 className="text-2xl font-bold mb-4">About Animal Welfare</h3>
        <p className="text-gray-300 leading-relaxed">
          Detailed information about Animal Welfare programs, projects,
          success stories, partner organizations, and ways to get involved.
        </p>
      </section>
    </>
  )
}
import { createFileRoute } from "@tanstack/react-router"import { createFileRoute } from '@tanstack/react-router'



























}  )    </>      </section>        </p>          success stories, partner organizations, and ways to get involved.          Detailed information about Animal Welfare programs, projects,        <p className="text-gray-300 leading-relaxed">        <h3 className="text-2xl font-bold mb-4">About Animal Welfare</h3>      <section className="max-w-4xl mx-auto px-6 py-12 text-white">      />        imageSrc="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200"        description="Programs ensuring the well-being of animals and livestock."        title="Animal Welfare"        badge="Areas of Work"      <PageHeader    <>  return (function RouteComponent() {})  component: RouteComponent,export const Route = createFileRoute("/areas/animal-welfare/")({import { PageHeader } from "@/components/PageHeader"
export const Route = createFileRoute('/areas/animal-welfare')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/areas/animal-welfare"!</div>
}
