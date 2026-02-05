import Tag from "@/components/Tag"
import FeatureCard from "@/components/FeatureCard"
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg"
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg"
import Image from "next/image"
import Avatar from "@/components/Avatar"
import Key from "@/components/Key"

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
]

export default function Features() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="mx-auto mt-6 max-w-2xl font-medium text-6xl text-center">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 mt-12">
          <FeatureCard
            title="Real-time Collection"
            description="Work together seamlessly with conflict-free team editing"
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="flex justify-center items-center aspect-video">
              <Avatar className="z-40">
                <Image src={avatar1} alt="Avatar 1" className="rounded-full" />
              </Avatar>
              <Avatar className="z-30 -ml-6 border-indigo-500">
                <Image src={avatar2} alt="Avatar 2" className="rounded-full" />
              </Avatar>
              <Avatar className="z-20 -ml-6 border-amber-500">
                <Image src={avatar3} alt="Avatar 3" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-transparent">
                <div className="inline-flex justify-center items-center gap-1 bg-neutral-700 rounded-full size-full">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      key={i}
                      className="inline-flex bg-white rounded-full size-1.5"
                    ></span>
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Interactive Prototyping"
            description="Engage your clients with prototypes that reacts to user actions"
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="flex justify-center items-center aspect-video">
              <p className="font-extrabold text-white/20 text-4xl text-center">
                We&apos;ve achieved{" "}
                <span className="bg-clip-text bg-linear-to-r from-purple-400 to-pink-400 text-transparent">
                  incredible
                </span>{" "}
                growth this year
              </p>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Keyboard Quick Actions"
            description="Powerful commands to help you create designs more quickly"
            className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto"
          >
            <div className="flex justify-center items-center gap-4 aspect-video">
              <Key className="w-28">shift</Key>
              <Key>alt</Key>
              <Key>C</Key>
            </div>
          </FeatureCard>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {features.map((feature) => (
            <div
              key={feature}
              className="inline-flex items-center gap-3 bg-neutral-900 px-3 md:px-5 py-1.5 md:py-2 border border-white/10 rounded-2xl"
            >
              <span className="inline-flex justify-center items-center bg-lime-400 rounded-full size-5 text-neutral-950 text-xl">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
