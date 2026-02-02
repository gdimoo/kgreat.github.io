import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <Link
                href="mailto:siripra.k@ubu.ac.th"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                siripra.k@ubu.ac.th
              </Link>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4" />
                Ubon Ratchathani, Thailand
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Links</h3>
            <div className="space-y-3">
              <Link
                href="#about"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                About
              </Link>
              <Link
                href="#experience"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Projects
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Social</h3>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/gdimoo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/siripra-kingchan-973387211"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:siripra.k@ubu.ac.th"
                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            {currentYear} Siripra Kingchan. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
