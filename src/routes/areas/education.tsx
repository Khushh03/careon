import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/areas/education')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/areas/education"!</div>
}
