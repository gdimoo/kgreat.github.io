import React from "react"
import { ExternalLink, Github, Bot, Activity, BookOpen, BarChart3, Landmark, Zap, Brain, Link as LinkIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  description: string
  icon: React.ElementType
  tags: string[]
  link?: string
  github?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "APM Platform (Predictive Maintenance)",
    description:
      "A data-driven model for predictive maintenance in manufacturing. Developed early issue detection systems for sensor anomalies using Python and engineering datasets to improve operational efficiency.",
    icon: Activity, // หรือใช้ Gauge
    tags: ["Python", "Django", "Airflow", "GCP", "Predictive Analytics"],
    featured: true, // ตัวนี้ควรโชว์ เพราะแสดงความเป็น Lead
  },
  {
    title: "NPH Classification via Weakly-Supervised Learning",
    description:
      "A medical AI research project for Normal Pressure Hydrocephalus classification using weakly-supervised local feature extraction on non-contrast CT brain scans. Published in Q1 Journal.",
    icon: Brain,
    tags: ["Python", "TensorFlow", "Medical AI", "Image Processing"],
    link: "https://doi.org/10.1016/j.compbiomed.2025.110751", // ใส่ลิงก์เปเปอร์จริง
    featured: true,
  },
  {
    title: "Volta Fleet & EA-Service System",
    description:
      "Developed the frontend for the Volta Fleet platform and EA-Service system at PEA, focusing on responsive design, usability, and secure data integration.",
    icon: Zap, // สื่อถึงไฟฟ้า
    tags: ["Next.js", "Nest.js", "SQL Server", "DevSecOps"],
    featured: true,
  },
  {
    title: "Blockchain Coffee Bean Traceability",
    description:
      "A smart contract-based traceability application for the Thai coffee supply chain, developed for NECTEC to enhance transparency from users' perspective.",
    icon: LinkIcon, // สื่อถึง Blockchain
    tags: ["Hyperledger Fabric", "Vue.js", "Blockchain", "Smart Contracts"],
    // github: "https://github.com/gdimoo",
  },
  {
    title: "Public Works Web Infrastructure",
    description:
      "Redesigned and modernized a comprehensive web system for the Department of Public Works to replace outdated infrastructure using modern tech stacks.",
    icon: Landmark,
    tags: ["Angular", "NestJS", "CockroachDB", "Keycloak"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-12">
          <p className="text-primary font-mono text-sm tracking-wide">
            Featured Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Projects
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon

            return (
              <article
                key={index}
                className={`group relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 ${project.featured ? "md:col-span-2" : ""
                  }`}
              >
                {project.featured && (
                  <span className="absolute top-4 right-4 px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                    Featured
                  </span>
                )}

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    {project.link && (
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Project
                        </Link>
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="ghost" size="sm" asChild>
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Source
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
