import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/areas/agriculture')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/areas/agriculture"!</div>
}
