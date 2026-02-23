import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/areas/community')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/areas/community"!</div>
}
