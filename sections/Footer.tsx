import logoImage from "@/assets/images/logo.svg"
import Image from "next/image"

const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
]

export default function Footer() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex md:flex-row flex-col md:justify-between items-center gap-6">
          <div>
            <Image src={logoImage} alt="Layers logo" />
          </div>
          <div>
            <nav className="flex gap-6">
              {footerLinks.map((link, i) => (
                <a href={link.href} key={i} className="text-white/50 text-sm">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
