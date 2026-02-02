import { GraduationCap, Award, Calendar } from "lucide-react"

interface Education {
  degree: string
  field: string
  institution: string
  location: string
  period: string
  thesis?: string
  achievements?: string[]
}

const educations: Education[] = [
  {
    degree: "Master of Science",
    field: "Computer Science",
    institution: "Mahidol University",
    location: "Nakhon Pathom, Thailand",
    period: "Aug 2021 — Aug 2025",
    thesis:
      "Weakly-Supervised Local Feature Extraction for Normal Pressure Hydrocephalus Classification", // อ้างอิงจากงานวิจัยที่ตีพิมพ์
    achievements: [
      "GPA: 3.79 (International Program)",
      "Published research in Computers in Biology and Medicine (Q1 Journal)",
      "Co-authored blockchain research published in IEEE Access",
    ],
  },
  {
    degree: "Bachelor of Science",
    field: "Computer Science",
    institution: "Ubon Ratchathani University",
    location: "Ubon Ratchathani, Thailand",
    period: "May 2017 — May 2021",
    achievements: [
      "Graduated with 1st Class Honors",
      "GPA: 3.89",
      "Specialized in programming fundamentals and data structures",
    ],
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-12">
          <p className="text-primary font-mono text-sm tracking-wide">
            Academic Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Education
          </h2>
        </div>

        <div className="space-y-8">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="relative bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/50 transition-colors group"
            >
              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <GraduationCap className="h-8 w-8 text-muted-foreground/20 group-hover:text-primary/20 transition-colors" />
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-mono">{edu.period}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-primary font-medium">{edu.field}</p>
                </div>

                <div>
                  <p className="text-foreground font-medium">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm">{edu.location}</p>
                </div>

                {edu.thesis && (
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Thesis: </span>
                      {edu.thesis}
                    </p>
                  </div>
                )}

                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                        >
                          <Award className="h-3 w-3 text-primary" />
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
