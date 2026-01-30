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
    location: "Bangkok, Thailand",
    period: "2015 — 2017",
    thesis:
      "Deep Learning Approaches for Thai Natural Language Understanding",
    achievements: [
      "Graduated with First Class Honors",
      "Best Thesis Award in Computer Science",
      "Published research in IEEE Conference",
    ],
  },
  {
    degree: "Bachelor of Science",
    field: "Computer Science",
    institution: "Khon Kaen University",
    location: "Khon Kaen, Thailand",
    period: "2011 — 2015",
    achievements: [
      "Graduated with Honors (GPA: 3.85)",
      "Dean's List for 6 consecutive semesters",
      "Won National Programming Competition",
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
