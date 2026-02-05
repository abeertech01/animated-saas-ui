import { IntegrationsType } from "@/sections/Integrations"
import Image from "next/image"
import { twMerge } from "tailwind-merge"

export default function IntegrationsColumn(props: {
  integrations: IntegrationsType
  className?: string
}) {
  const { integrations, className } = props
  return (
    <div className={twMerge("flex flex-col gap-4 pb-4", className)}>
      {integrations.map((integration) => (
        <div
          key={integration.name}
          className="bg-neutral-900 p-6 border border-white/10 rounded-3xl"
        >
          <div className="flex justify-center">
            <Image
              src={integration.icon}
              alt={`${integration.name} icon`}
              className="size-24"
            />
          </div>
          <h3 className="mt-6 text-3xl text-center">{integration.name}</h3>
          <p className="mt-2 text-white/50 text-center">
            {integration.description}
          </p>
        </div>
      ))}
    </div>
  )
}
