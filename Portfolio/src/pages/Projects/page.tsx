import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/provider/page";

// ✅ Import project images
import inaikkaImg from "@/assets/projects/Inaikka.png";
import ytheysImg from "@/assets/projects/ytheys.png";
import hmsImg from "@/assets/projects/hms.png";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const projects = [
    {
      title: "Inaikka - A Video Calling Web App",
      description:
        "Inaikka is a video calling website built using Next.js, WebRTC, and supporting tools. It enables peer-to-peer video communication with a clean and intuitive interface.",
      tags: ["Next.js", "WebRTC", "Video Calling", "Real-Time"],
      links: {
        github: "https://github.com/SandeepNaidu228/Inaikka.git",
        demo: "#",
      },
      image: inaikkaImg,
      alt: "Inaikka site",
      featured: true,
    },
    {
      title: "Ytheys - Bridging Corporates & Startups",
      description:
        "Ytheys is a hackathon project that connects corporations with innovative startups. Using a prompt-based backend search, corporations can discover startups solving their specific challenges and initiate collaborations.",
      tags: ["Next.js", "Hackathon", "Search Engine", "Startup Matching"],
      links: {
        github: "https://github.com/SandeepNaidu228/WOW-Vizag-Hack.git",
        demo: "#",
      },
      image: ytheysImg,
      alt: "Ytheys site",
      featured: true,
    },
    {
      title: "Hospital Management System",
      description:
        "A complete hospital management system built with HTML, CSS, JavaScript, PHP, and MySQL. It handles patient records, appointments, and administrative tasks in an efficient and user-friendly manner.",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      links: {
        github: "https://github.com/SandeepNaidu228/Hospital_Management.git",
        demo: "#",
      },
      image: hmsImg,
      alt: "HMS site",
      featured: true,
    },
  ];

  return (
    <div
      className={`pt-40 min-h-screen p-8 ${
        isDarkMode ? "bg-black text-slate-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-4 transition-all duration-700 shadow-lg"

          >
            {/* ✅ Project Image - Full View */}
            <div className="md:w-1/2 max-h-[400px] overflow-hidden rounded-lg flex items-center justify-center bg-white">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>

            <Card
              className={`md:w-1/2 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6 ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-800 to-gray-900"
                  : "bg-gradient-to-br from-white to-gray-100"
              }`}
            >
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      Featured Project
                    </div>
                    <CardTitle
                      className={`text-3xl font-bold ${
                        isDarkMode ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p
                  className={`mb-6 text-lg leading-relaxed ${
                    isDarkMode ? "text-slate-300" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
