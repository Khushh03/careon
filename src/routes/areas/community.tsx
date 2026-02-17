import { createFileRoute } from "@tanstack/react-router"
import { PageHeader } from "@/components/PageHeader"

export const Route = createFileRoute("/areas/community/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <PageHeader
        badge="Areas of Work"
        title="Community"
        description="Community development programs that strengthen local capacity and resilience."
        imageSrc="https://images.unsplash.com/photo-1558980664-10d6d7b4f1b9?q=80&w=1200"
      />

      <section className="max-w-4xl mx-auto px-6 py-12 text-white">
        <h3 className="text-2xl font-bold mb-4">About Community</h3>
        <p className="text-gray-300 leading-relaxed">
          Detailed information about Community programs, projects, success
          stories, partner organizations, and ways to get involved.
        </p>
      </section>
    </>
  )
}
import { createFileRoute } from "@tanstack/react-router"import { createFileRoute } from '@tanstack/react-router'



























}  )    </>      </section>        </p>          stories, partner organizations, and ways to get involved.          Detailed information about Community programs, projects, success        <p className="text-gray-300 leading-relaxed">        <h3 className="text-2xl font-bold mb-4">About Community</h3>      <section className="max-w-4xl mx-auto px-6 py-12 text-white">      />        imageSrc="https://images.unsplash.com/photo-1558980664-10d6d7b4f1b9?q=80&w=1200"        description="Community development programs that strengthen local capacity and resilience."        title="Community"        badge="Areas of Work"      <PageHeader    <>  return (function RouteComponent() {})  component: RouteComponent,export const Route = createFileRoute("/areas/community/")({import { PageHeader } from "@/components/PageHeader"
export const Route = createFileRoute('/areas/community')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/areas/community"!</div>
}
