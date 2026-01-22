import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/what-is-tether')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/what-is-tether"!</div>
}
