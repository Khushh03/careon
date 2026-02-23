import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/areas/animal-welfare')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/areas/animal-welfare"!</div>
}
