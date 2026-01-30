import React from "react"
import { ExternalLink, Github, Bot, Activity, BookOpen, BarChart3 } from "lucide-react"
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
    title: "RAG Chat Assistant",
    description:
      "An intelligent conversational AI system using Retrieval-Augmented Generation (RAG) to provide accurate, context-aware responses based on custom knowledge bases. Built with LangChain, OpenAI, and Pinecone.",
    icon: Bot,
    tags: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI"],
    link: "https://example.com",
    github: "https://github.com",
    featured: true,
  },
  {
    title: "Medical Error Analysis (NPH)",
    description:
      "A collaborative research project with Nakhon Phanom Hospital analyzing medical error patterns using NLP and machine learning to improve patient safety and healthcare quality.",
    icon: Activity,
    tags: ["Python", "NLP", "Healthcare", "Data Analysis", "Research"],
    featured: true,
  },
  {
    title: "E-Learning Platform",
    description:
      "A comprehensive online learning management system designed for Thai universities, featuring video streaming, quizzes, and AI-powered personalized recommendations.",
    icon: BookOpen,
    tags: ["Next.js", "PostgreSQL", "AWS", "TypeScript"],
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Thai NLP Toolkit",
    description:
      "Open-source library for Thai natural language processing including tokenization, named entity recognition, and sentiment analysis optimized for academic research.",
    icon: BarChart3,
    tags: ["Python", "PyTorch", "NLP", "Open Source"],
    github: "https://github.com",
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
                className={`group relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 ${
                  project.featured ? "md:col-span-2" : ""
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
