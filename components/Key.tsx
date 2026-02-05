import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

export default function Key(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...otherProps } = props
  return (
    <div
      className={twMerge(
        "inline-flex justify-center items-center bg-neutral-300 rounded-2xl size-14 font-medium text-neutral-950 text-xl",
        className,
      )}
      {...otherProps}
    >
      {children}
    </div>
  )
}
