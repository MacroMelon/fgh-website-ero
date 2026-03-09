import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/are-you-a-pickpocket-target')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blog"!</div>
}
