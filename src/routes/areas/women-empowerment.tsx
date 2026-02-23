import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/areas/women-empowerment")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PageHeader
        badge="Areas of Work"
        title="Women Empowerment"
        description="Programs that promote women's leadership, economic empowerment, and rights."
        imageSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200"
      />

      <section className="max-w-4xl mx-auto px-6 py-12 text-white">
        <h3 className="text-2xl font-bold mb-4">About Women Empowerment</h3>
        <p className="text-gray-300 leading-relaxed">
          Detailed information about Women Empowerment programs, projects, success
          stories, partner organizations, and ways to get involved.
        </p>
      </section>
    </>
  );
}
