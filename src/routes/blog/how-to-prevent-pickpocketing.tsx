import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/how-to-prevent-pickpocketing')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blog"!</div>
}
