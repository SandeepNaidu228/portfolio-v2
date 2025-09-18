const config = {
  information: {
    name: "M V N Sandeep Naidu",
    helloText: "Hello 👋",
    welcomeText: "✨ Welcome to my digital space",
    title: "Full Stack JavaScript Developer 🚀",
    title3: "Crafting scalable solutions & coding the future 💻✨",
  },
  flipWords: [
    "Full Stack Developer",
    "Backend Engineer",
    "Frontend Innovator",
    "JavaScript Enthusiast",
    "Problem Solver",
  ],
  codeContent: {
    code: `const profile = {
  name: "M V N Sandeep Naidu",
  role: "Full Stack JavaScript Developer",
  skills: [
    "JavaScript", "TypeScript", "Node.js", "Express", 
    "React", "MongoDB", "MySQL",
    "HTML", "CSS", "n8n", "GitHub"
  ],
  traits: {
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    teamPlayer: true
  },
  hireable() {
    return (
      this.traits.hardWorker &&
      this.traits.problemSolver &&
      this.skills.length >= 8 &&
      this.experience.years >= 1
    );
  }
};`
  },
};

export default config;
