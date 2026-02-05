import { twMerge } from "tailwind-merge"

export default function FeatureCard(props: {
  title: string
  description: string
  children?: React.ReactNode
  className?: string
}) {
  const { title, description, children, className } = props
  return (
    <div
      className={twMerge(
        "bg-neutral-900 p-6 border border-white/10 rounded-3xl",
        className,
      )}
    >
      <div className="aspect-video">{children}</div>
      <div>
        <h3 className="mt-6 font-medium text-3xl">{title}</h3>
        <p className="mt-2 text-white/50">{description}</p>
      </div>
    </div>
  )
}
