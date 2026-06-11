import { Quote, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const socialLinks = [
  {
    icon: (className: string) => (
      <img
        src="https://api.iconify.design/logos:linkedin-icon.svg"
        alt="LinkedIn"
        className={className}
      />
    ),
    href: "https://linkedin.com/in/mvnsandeepnaidu",
  },
  {
    icon: (className: string) => (
      <img
        src="https://cdn.simpleicons.org/x"
        alt="X"
        className={`${className} dark:invert`}
      />
    ),
    href: "https://x.com/iiamsandy2285",
  },
  {
    icon: (className: string) => (
      <img
        src="https://cdn.simpleicons.org/github"
        alt="GitHub"
        className={`${className} dark:invert`}
      />
    ),
    href: "https://github.com/SandeepNaidu228",
  },
];

export function Footer() {
  return (
    <footer className="pt-12 pb-8 border-t border-border mt-12">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center mb-10">
        <div className="flex gap-3">
          <Quote className="h-5 w-5 text-muted-foreground/60 shrink-0" />
          <div>
            <p className="text-sm italic text-foreground/80 leading-relaxed max-w-md">
              First, solve the problem. Then, write the code.
            </p>
            <p className="text-xs text-muted-foreground mt-2">— John Johnson</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border text-xs text-muted-foreground">
        <div>© 2026 M V N Sandeep Naidu.</div>
        <nav className="flex items-center gap-5">
          <a href="#home" className="hover:text-foreground transition-colors">
            Home
          </a>

          <a href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-1">
          {socialLinks.map(({ icon: renderIcon, href }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-muted hover:text-foreground transition-colors"
            >
              {renderIcon("h-3.5 w-3.5 flex-shrink-0")}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
