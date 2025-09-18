import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/provider/page";
import { Marquee } from "@/components/magicui/marquee";
import {
  Code2,
  Paintbrush,
  Database,
  Layout,
  Cpu,
  Cloud,
  Server,
  FileCode,
  Figma,
  Github,
  Brain,
  MessageCircle
} from "lucide-react";

import { RiNextjsLine } from "react-icons/ri";
import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiVite,
} from "react-icons/si";
import { BsFileEarmarkCode } from "react-icons/bs";
import { TbBrandVscode } from "react-icons/tb";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  color: string;
  skills: Skill[];
}

interface SkillCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  skills: Skill[];
  color: string;
  isDark: boolean;
}

const SkillCard = ({
  icon: Icon,
  title,
  skills,
  color,
  isDark,
}: SkillCardProps) => (
  <Card
    className={`group relative overflow-hidden ${
      isDark ? "bg-gray-900/80 border-gray-700" : "bg-white/90 border-gray-200"
    } hover:scale-[1.02] transition-all duration-300 hover:shadow-xl ${
      isDark ? "hover:shadow-blue-500/20" : "hover:shadow-blue-500/10"
    }`}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl ${
            isDark ? "bg-gray-800/50" : "bg-gray-100"
          } ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3
          className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
            isDark ? "from-white to-gray-400" : "from-gray-900 to-gray-600"
          }`}
        >
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className={`group/badge relative ${
              isDark
                ? "bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300"
            } flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
              isDark ? "hover:shadow-blue-500/20" : "hover:shadow-blue-500/10"
            }`}
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const skillCategories: SkillCategory[] = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FileCode className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Next.js", icon: <RiNextjsLine className="w-4 h-4 text-white" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "HTML5", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS3", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" /> },
      ],
    },
    {
      icon: Database,
      title: "Programming Languages & Databases",
      color: "text-green-400",
      skills: [
        { name: "C/C++", icon: <FileCode className="w-4 h-4 text-blue-500" /> },
        { name: "Python", icon: <FileCode className="w-4 h-4 text-[#3776AB]" /> },
        { name: "Java", icon: <FileCode className="w-4 h-4 text-[#007396]" /> },
        { name: "MySQL", icon: <FileCode className="w-4 h-4 text-[#00758F]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "text-yellow-400",
      skills: [
        { name: "Node.js", icon: <Server className="w-4 h-4 text-[#339933]" /> },
        { name: "Express.js", icon: <FileCode className="w-4 h-4 text-black" /> },
        { name: "n8n", icon: <FileCode className="w-4 h-4 text-orange-500" /> },
        { name: "REST APIs", icon: <Server className="w-4 h-4 text-[#FF6C37]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & UI/UX",
      color: "text-purple-400",
      skills: [
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "Figma", icon: <Figma className="w-4 h-4 text-[#F24E1E]" /> },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
      ],
    },
    {
      icon: Brain,
      title: "CS Fundamentals",
      color: "text-pink-400",
      skills: [
        { name: "DS & Algorithms", icon: <FileCode className="w-4 h-4 text-pink-500" /> },
        { name: "OOP", icon: <FileCode className="w-4 h-4 text-pink-500" /> },
        { name: "DBMS", icon: <FileCode className="w-4 h-4 text-pink-500" /> },
        { name: "Computer Networks", icon: <FileCode className="w-4 h-4 text-pink-500" /> },
        { name: "Operating Systems", icon: <FileCode className="w-4 h-4 text-pink-500" /> },
      ],
    },
    {
      icon: MessageCircle,
      title: "Soft Skills",
      color: "text-orange-400",
      skills: [
        { name: "Communication", icon: <MessageCircle className="w-4 h-4" /> },
        { name: "Problem Solving", icon: <MessageCircle className="w-4 h-4" /> },
        { name: "Team Collaboration", icon: <MessageCircle className="w-4 h-4" /> },
        { name: "Adaptability", icon: <MessageCircle className="w-4 h-4" /> },
        { name: "Critical Thinking", icon: <MessageCircle className="w-4 h-4" /> },
      ],
    },
  ];

  return (
    <main
      className={`lg:pt-0 flex flex-col items-center justify-center ${
        isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      } min-h-screen`}
    >
      <div className="text-center mb-8">
        <h1
          className={`text-4xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          } bg-clip-text text-transparent bg-gradient-to-r ${
            isDark
              ? "from-blue-400 via-purple-400 to-pink-400"
              : "from-blue-600 via-purple-600 to-pink-600"
          }`}
        >
          My Tech Stack
        </h1>
      </div>

      <div className="text-center">
        <div
          className={`inline-flex items-center gap-2 px-4 py-1 rounded-full ${
            isDark ? "bg-white/5" : "bg-black/5"
          } backdrop-blur-sm border ${
            isDark ? "border-white/10" : "border-black/10"
          }`}
        >
          <span
            className={`text-sm font-medium tracking-wider uppercase ${
              isDark ? "text-blue-300" : "text-blue-600"
            }`}
          >
            Technologies I work with
          </span>
          <span
            className={`inline-block w-1.5 h-1.5 rounded-full ${
              isDark ? "bg-blue-400" : "bg-blue-500"
            } animate-pulse`}
          ></span>
        </div>
      </div>

      <section className="container mx-auto px-4 py-11">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
              isDark={isDark}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SkillsSection;
