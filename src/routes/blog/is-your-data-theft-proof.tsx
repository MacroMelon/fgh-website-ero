import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/is-your-data-theft-proof')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blog"!</div>
}
