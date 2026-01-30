"use client"

import React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Code2, Wrench, Brain, Database, Cloud, Palette } from "lucide-react"

interface SkillCategory {
  id: string
  title: string
  icon: React.ElementType
  skills: { name: string; level: number }[]
}

const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "SQL", level: 80 },
      { name: "Java", level: 75 },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: 95 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Docker", level: 80 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    icon: Brain,
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "Scikit-learn", level: 90 },
      { name: "LangChain", level: 85 },
      { name: "Hugging Face", level: 80 },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "Pinecone", level: 70 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 75 },
      { name: "Vercel", level: 90 },
      { name: "GCP", level: 70 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: Palette,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vue.js", level: 70 },
    ],
  },
]

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("languages")

  const currentCategory = skillCategories.find((c) => c.id === activeCategory)

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-12">
          <p className="text-primary font-mono text-sm tracking-wide">
            Technical Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Skills
          </h2>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {skillCategories.map((category) => {
            const Icon = category.icon
            const isActive = activeCategory === category.id

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "relative p-4 rounded-lg border transition-all duration-200 text-left group",
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-card-foreground border-border hover:border-primary/50"
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5 mb-2",
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground group-hover:text-primary"
                  )}
                />
                <p className="text-sm font-medium">{category.title}</p>
                <p
                  className={cn(
                    "text-xs mt-1",
                    isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                  )}
                >
                  {category.skills.length} skills
                </p>
              </button>
            )
          })}
        </div>

        {/* Skills Display */}
        {currentCategory && (
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <currentCategory.icon className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                {currentCategory.title}
              </h3>
            </div>

            <div className="space-y-4">
              {currentCategory.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
