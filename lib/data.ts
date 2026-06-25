export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const profileLinks = {
  email: "mailto:rkbillups2@gmail.com",
  linkedin: "https://www.linkedin.com/in/rkbillups/",
  github: "https://github.com/rbillups",
  resume: "#",
} as const;

export const projects = [
  {
    category: "Mobile App",
    title: "RUNIt",
    description:
      "A location-based pickup basketball app with nearby courts, run creation, RSVP workflows, and geolocation.",
    tech: ["React Native", "Expo Router", "TypeScript", "Supabase"],
    githubUrl: profileLinks.github,
    caseStudyUrl: "#",
    diagram: "runit" as const,
  },
  {
    category: "Automation",
    title: "Community Automation Bot",
    description:
      "Python Discord bot for daily motivation, challenges, alerts, and community workflows.",
    tech: ["Python", "Discord.py", "Scheduling", "REST APIs"],
    githubUrl: profileLinks.github,
    caseStudyUrl: "#",
    diagram: "bot" as const,
  },
  {
    category: "Workflow",
    title: "Document Automation Toolkit",
    description:
      "A sanitized Python workflow that turns structured requirements data into standardized reports and validation artifacts. All displayed data is fictional and contains no proprietary information.",
    tech: ["Python", "Data Processing", "Templates", "Validation"],
    githubUrl: profileLinks.github,
    caseStudyUrl: "#",
    diagram: "docs" as const,
  },
  {
    category: "DevOps",
    title: "CI/CD-Ready Python Service Template",
    description:
      "Dockerized Python backend template with tests, linting, CI pipeline examples, environment variables, and deployment-ready structure.",
    tech: ["Python", "Docker", "GitHub Actions", "pytest"],
    githubUrl: profileLinks.github,
    caseStudyUrl: "#",
    diagram: "cicd" as const,
  },
] as const;

export const skillGroups = [
  {
    title: "Backend & Automation",
    skills: ["Python", "APIs", "Data Processing", "Script Automation"],
  },
  {
    title: "DevOps & Quality",
    skills: ["GitLab CI/CD", "GitHub Actions", "Docker", "Testing", "Git"],
  },
  {
    title: "Product Engineering",
    skills: ["React Native", "Expo", "Supabase", "TypeScript"],
  },
] as const;

export const contactLinks = [
  { label: "Email", href: profileLinks.email, icon: "mail" as const },
  { label: "LinkedIn", href: profileLinks.linkedin, icon: "linkedin" as const },
  { label: "GitHub", href: profileLinks.github, icon: "github" as const },
  { label: "Resume", href: profileLinks.resume, icon: "file" as const },
] as const;
