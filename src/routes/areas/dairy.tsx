import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/areas/dairy")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PageHeader
        badge="Areas of Work"
        title="Dairy"
        description="Programs that support dairy farming, animal care, and market access."
        imageSrc="https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1200"
      />

      <section className="max-w-4xl mx-auto px-6 py-12 text-white">
        <h3 className="text-2xl font-bold mb-4">About Dairy</h3>
        <p className="text-gray-300 leading-relaxed">
          Detailed information about Dairy programs, projects, success
          stories, partner organizations, and ways to get involved.
        </p>
      </section>
    </>
  );
}
