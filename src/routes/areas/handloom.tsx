import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/areas/handloom')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/areas/handloom"!</div>
}
