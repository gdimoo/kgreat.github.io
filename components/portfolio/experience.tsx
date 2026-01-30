"use client"

import { useState } from "react"
import { ChevronRight, Building2, BookOpen, FlaskConical } from "lucide-react"
import { cn } from "@/lib/utils"

interface ExperienceItem {
  id: string
  period: string
  title: string
  organization: string
  type: "teaching" | "research" | "industry"
  description: string
  highlights: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: "1",
    period: "2021 — Present",
    title: "DSSI Lecturer",
    organization: "Ubon Ratchathani University",
    type: "teaching",
    description:
      "Teaching undergraduate and graduate courses in Data Science and Software Innovation, focusing on practical applications of AI and machine learning.",
    highlights: [
      "Developed curriculum for AI/ML courses",
      "Supervised 15+ thesis projects",
      "Led department digital transformation initiative",
    ],
  },
  {
    id: "2",
    period: "2019 — 2021",
    title: "Research Associate",
    organization: "National AI Research Center",
    type: "research",
    description:
      "Conducted research in natural language processing and medical informatics, publishing findings in peer-reviewed journals.",
    highlights: [
      "Published 8 research papers",
      "Secured research grants totaling ฿2.5M",
      "Collaborated with international institutions",
    ],
  },
  {
    id: "3",
    period: "2017 — 2019",
    title: "Software Developer",
    organization: "Tech Solutions Co., Ltd.",
    type: "industry",
    description:
      "Built enterprise web applications and contributed to the development of internal tools using modern JavaScript frameworks.",
    highlights: [
      "Led frontend development team",
      "Implemented CI/CD pipelines",
      "Reduced deployment time by 60%",
    ],
  },
  {
    id: "4",
    period: "2015 — 2017",
    title: "Teaching Assistant",
    organization: "Mahidol University",
    type: "teaching",
    description:
      "Assisted in teaching programming fundamentals and data structures courses while pursuing graduate studies.",
    highlights: [
      "Mentored 100+ students",
      "Developed course materials",
      "Received excellence in teaching award",
    ],
  },
]

const typeIcons = {
  teaching: BookOpen,
  research: FlaskConical,
  industry: Building2,
}

const typeLabels = {
  teaching: "Teaching",
  research: "Research",
  industry: "Industry",
}

export function Experience() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-12">
          <p className="text-primary font-mono text-sm tracking-wide">
            My Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = typeIcons[exp.type]
              const isActive = activeId === exp.id
              const isEven = index % 2 === 0

              return (
                <div
                  key={exp.id}
                  className={cn(
                    "relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16",
                    !isEven && "md:direction-rtl"
                  )}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background z-10" />

                  {/* Content */}
                  <div
                    className={cn(
                      "pl-8 md:pl-0",
                      isEven ? "md:text-right md:pr-16" : "md:col-start-2 md:pl-16"
                    )}
                  >
                    <button
                      onClick={() => setActiveId(isActive ? null : exp.id)}
                      className="text-left md:text-inherit w-full group"
                    >
                      <p className="text-sm text-muted-foreground font-mono mb-1">
                        {exp.period}
                      </p>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground flex items-center gap-2 mt-1 md:justify-start">
                        {isEven ? (
                          <>
                            <span className="md:order-2">{exp.organization}</span>
                            <Icon className="h-4 w-4 md:order-1" />
                          </>
                        ) : (
                          <>
                            <Icon className="h-4 w-4" />
                            <span>{exp.organization}</span>
                          </>
                        )}
                      </p>

                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300",
                          isActive ? "max-h-96 mt-4" : "max-h-0"
                        )}
                      >
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3 text-left">
                          {exp.description}
                        </p>
                        <ul className="space-y-1 text-left">
                          {exp.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-xs text-primary mt-2 group-hover:underline">
                        {isActive ? "Click to collapse" : "Click to expand"}
                      </p>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
