import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/validation-private')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <div className="font-outfit text-big text-center mt-36 text-[#4353E9]">
        Submitted as PDF
      </div>
  )
}
