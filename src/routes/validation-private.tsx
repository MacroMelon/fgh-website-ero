import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/validation-private')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/validation-private"!</div>
}
