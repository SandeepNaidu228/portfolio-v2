import { TechIcon } from "./TechIcon";

const items = [
  {
    title: "Full-Stack Intern",
    company: "Infosys Springboard",
    location: "Remote",
    range: "Aug 2025 — Oct 2025",
    active: false,
    description: "Angular | TypeScript | Frontend Development",
    bullets: [
      "Developed 15+ dynamic UI components using Angular, improving application interactivity and frontend responsiveness across multiple modules.",
      "Collaborated with a 7-member cross-functional team to implement and refine frontend features, enhancing usability and development efficiency.",
      "Worked extensively with Angular components, services, routing, and data binding while contributing to real-world application modules.",
    ],
    tech: ["TS", "JS", "Mg"],
  },

  {
    title: "Backend Intern",
    company: "McCarthy AI Marketplace",
    location: "Remote",
    range: "May 2025 — Jul 2025",
    active: false,
    description: "Node.js | Express.js | MongoDB | REST APIs",
    bullets: [
      "Developed and deployed multiple backend microservices, building scalable and maintainable server-side architectures.",
      "Optimized 10+ API routes, improving backend response times and reducing service downtime during testing.",
      "Collaborated with fellow interns to test, monitor, and maintain deployed services across multiple environments.",
    ],
    tech: ["Nd", "Ex", "Mg", "JS"],
  },
];

export function Experience() {
  return (
    <section className="py-10">
      <h2 className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground mb-6">
        EXPERIENCE
      </h2>
      <div className="space-y-8">
        {items.map((it, i) => (
          <div key={i} className="grid grid-cols-[auto_1fr] gap-4">
            <div className="pt-1.5">
              <span
                className={`block h-2 w-2 rounded-full ${it.active ? "bg-green-500" : "bg-muted-foreground/40"}`}
              />
            </div>
            <div>
              <div className="flex items-baseline justify-between gap-4 flex-wrap mb-1">
                <div className="text-sm text-foreground">
                  <span className="font-medium">{it.title}</span>
                  <span className="text-muted-foreground"> · </span>
                  <span className="text-foreground/80">{it.company}</span>
                </div>
                <div className="text-xs text-muted-foreground">{it.range}</div>
              </div>
              <div className="text-xs text-muted-foreground mb-3">{it.location}</div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-3">{it.description}</p>
              {it.bullets.length > 0 && (
                <ul className="space-y-1.5 mb-4 list-disc pl-5">
                  {it.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-foreground/80">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {it.tech.length > 0 && (
                <div className="flex items-center gap-3">
                  {it.tech.map((t) => (
                    <div key={t} className="transition-transform duration-150 hover:scale-110">
                      <TechIcon name={t} className="h-5 w-5" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
