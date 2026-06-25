export type Achievement = {
  featured: boolean;
  compact?: boolean;
  placement: string;
  title: string;
  organization: string;
  date: string;
  team?: string;
  description: string;
  technicalHighlights: readonly string[];
  link: {
    label: string;
    href: string;
  };
};

export const achievements: Achievement[] = [
  {
    featured: true,
    placement: "2nd Place",
    title: "KSU Hackathon for Social Good",
    organization:
      "Kennesaw State University · Sponsored by HPCC Systems and LexisNexis Risk Solutions",
    date: "March 2022",
    team: "CS Knights — Key'Shawn Billups and Trevor Fouce",
    description:
      "Placed second in a weeklong social-impact hackathon focused on improving how young adults aging out of foster care could be matched with mentoring families. Built a data-driven mentor-matching solution using HPCC Systems and ECL, with a ROXIE-first approach centered on a user-friendly interface for querying and evaluating potential matches.",
    technicalHighlights: [
      "Learned and applied ECL in a time-constrained hackathon environment",
      "Designed a ROXIE-first query workflow for mentor matching",
      "Built configurable STORED workflow services and SOAP-style query parameters",
      "Focused on an end-user interface for input-driven mentor recommendations",
    ],
    link: {
      label: "Read HPCC Systems Coverage",
      href: "https://hpccsystems.com/resources/hackathon-march-2022/",
    },
  },
  {
    featured: false,
    compact: true,
    placement: "3rd Place",
    title: "KSU CCSE Ideathon",
    organization:
      "Kennesaw State University College of Computing and Software Engineering · Partnered with BlackRock",
    date: "Summer 2022",
    description:
      "Placed third in Kennesaw State University's Summer 2022 CCSE Ideathon, a collaborative innovation event where student teams developed and pitched solution ideas addressing sustainable business practices with positive performance impact.",
    technicalHighlights: [
      "Collaborated in a fast-paced team ideation and problem-solving environment",
      "Developed a structured solution concept for an open-ended sustainability-focused business challenge",
      "Applied classroom knowledge to a real-world industry problem",
      "Prepared and delivered a concise solution pitch to BlackRock judges",
      "Participated in an event designed around design thinking, development skills, and employer engagement",
    ],
    link: {
      label: "View Event Details",
      href: "https://campus.kennesaw.edu/colleges-departments/ccse/events/hackathon/docs/summer-2022-ideathon.pdf",
    },
  },
  {
    featured: false,
    placement: "2nd Place",
    title: "KSU Fall Hackathon",
    organization: "Kennesaw State University · Presented by Assurant",
    date: "October 2022",
    team: "Key'Shawn Billups and Trevor Fouce",
    description:
      "Placed second in Kennesaw State University's Fall 2022 Hackathon. Teams were challenged to create a technology-driven solution around the theme \"Helping people thrive in a connected world,\" then present their ideas to a panel of judges.",
    technicalHighlights: [
      "Collaborated in a time-constrained team software-design environment",
      "Translated an open-ended problem statement into a proposed technical solution",
      "Presented the final concept and implementation approach to judges",
      "Participated in industry mentorship and networking opportunities",
    ],
    link: {
      label: "Read KSU Coverage",
      href: "https://www.kennesaw.edu/news/stories/2022/hackathon-sponsors-provide-opportunities-for-kennesaw-state-students.php",
    },
  },
];

export const education = [
  {
    school: "Kennesaw State University",
    degree: "Master of Science, Cybersecurity",
    graduated: "Graduated May 2026",
    gpa: "GPA: 4.0",
  },
  {
    school: "Kennesaw State University",
    degree: "Bachelor of Science, Computer Science",
    concentration: "Concentration: Artificial Intelligence",
    graduated: "Graduated May 2023",
  },
] as const;

export const foundationTags = [
  "Software Engineering",
  "Cybersecurity",
  "Artificial Intelligence",
  "Data Structures",
  "Object-Oriented Programming",
  "Systems Design",
] as const;
