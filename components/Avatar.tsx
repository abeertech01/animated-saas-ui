import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

export default function Avatar(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...otherProps } = props

  return (
    <div
      className={twMerge(
        "bg-neutral-900 p-1 border-4 border-blue-500 rounded-full size-20 overflow-hidden",
        className,
      )}
      {...otherProps}
    >
      {children}
    </div>
  )
}
