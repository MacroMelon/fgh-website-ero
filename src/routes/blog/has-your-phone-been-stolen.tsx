import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/has-your-phone-been-stolen')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blog"!</div>
}
