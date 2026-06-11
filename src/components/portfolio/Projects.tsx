import { Github } from "lucide-react";
import { TechIcon } from "./TechIcon";
import inaikkaImg from "../assets/innaika.png";
import ytheysImg from "../assets/ytheys.jpg";
import resumesyncImg from "../assets/resumesync.jpg";
import hospitalImg from "../assets/hms.png";

interface Project {
  name: string;
  description: string;
  gradient: string;
  accent: string;
  image?: string;
  tech: string[];
  github?: string;
  globe?: string;
}

const projects: Project[] = [
  {
    name: "Inaikka",
    description:
      "Real-time full-stack video calling application built using the MERN stack and Socket.IO. Features JWT authentication, searchable users, real-time text and image messaging, online/offline presence tracking, and a responsive multi-column chat interface supporting low-latency communication.",
    gradient: "from-blue-600 via-indigo-700 to-cyan-600",
    accent: "Real-Time Video Calling Application",
    image: inaikkaImg,
    tech: ["Re", "Nd", "Ex", "Mg", "Io", "Jw"],
    github: "https://github.com/SandeepNaidu228/Innaika",
  },

  {
    name: "YTHEYS",
    description:
      "AI-powered startup discovery and matchmaking platform connecting corporates with startups and NGOs based on innovation goals. Features smart discovery, verified profiles, collaboration workflows, and impact-driven partnership management while improving visibility for startups from Tier-2 and Tier-3 cities.",
    gradient: "from-violet-600 via-purple-700 to-fuchsia-600",
    accent: "AI Startup Discovery Platform",
    image: ytheysImg,
    tech: ["Re", "Nd", "Ex", "Mg", "G4"],
    github: "https://github.com/SandeepNaidu228/Ytheys_ImpactNexus",
  },

  {
    name: "ResumeSync",
    description:
      "AI-powered resume enhancement platform leveraging Groq API to analyze, rewrite, and optimize resumes. Includes ATS optimization, skill enhancement, resume rewriting, and intelligent content generation with near-instant processing.",
    gradient: "from-purple-600 via-violet-700 to-pink-600",
    accent: "AI Resume Enhancement Platform",
    image: resumesyncImg,
    tech: ["Re", "Nd", "Ex", "G4"],
    github: "https://github.com/SandeepNaidu228/ResumeSync",
  },

  {
    name: "Hospital Management System",
    description:
      "Full-stack hospital management system for managing patients, doctors, nurses, rooms, appointments, and administrative workflows. Built with a modular backend architecture, REST APIs, database integration, and a responsive web dashboard for efficient healthcare operations.",
    gradient: "from-emerald-600 via-green-700 to-teal-600",
    accent: "Healthcare Management Platform",
    image: hospitalImg,
    tech: ["Re", "Nd", "Ex", "My"],
    github: "https://github.com/SandeepNaidu228/Hospital_Management",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-10">
      <h2 className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground mb-5">
        FEATURED PROJECTS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <article
            key={p.name}
            className="rounded-xl border border-border bg-card hover:border-foreground/20 transition-all duration-200 group overflow-hidden"
          >
            {/* ── Thumbnail ── */}
            <div className="bg-muted/50 border-b border-border p-3">
              {p.image ? (
                <div className="overflow-hidden rounded-md border border-border/60 shadow-sm">
                  <img
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              ) : (
                /* Gradient fallback for Bookstage */
                <div
                  className={`rounded-md aspect-[16/10] bg-gradient-to-br ${p.gradient} flex items-center justify-center`}
                >
                  <span className="text-white/90 font-medium text-sm text-center px-4 leading-snug">
                    {p.accent}
                  </span>
                </div>
              )}
            </div>

            {/* ── Card body ── */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-foreground">{p.name}</h3>
                <div className="flex items-center gap-3 text-muted-foreground">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} GitHub`}
                      className="hover:text-foreground transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{p.description}</p>

              <div className="flex items-center gap-2.5 flex-wrap">
                {p.tech.map((t) => (
                  <div key={t} className="transition-transform duration-150 hover:scale-110">
                    <TechIcon name={t} className="h-5 w-5" />
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
