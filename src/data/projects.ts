export type Project = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: "Website" | "CRM / Dashboard" | "Platform" | "Mobile";
  industry: "Healthcare" | "Legal" | "Finance" | "SaaS" | "Food & Beverage" | "Real Estate" | "Education" | "Other";
  tags: string[];
  image?: string;
  featured?: boolean;
  year: number;
};

export const projects: Project[] = [
  {
    id: "maple-house",
    name: "The Maple House",
    description: "A beautifully crafted restaurant website with online menu and reservation system.",
    url: "https://www.themaplehouse.com/",
    category: "Website",
    industry: "Food & Beverage",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    year: 2024,
  },
  {
    id: "policy-wings",
    name: "Policy Wings CRM",
    description: "Full-featured CRM panel for insurance policy management and client tracking.",
    url: "https://www.policywings.co/login",
    category: "CRM / Dashboard",
    industry: "Finance",
    tags: ["React", "Dashboard", "CRM"],
    year: 2024,
  },
  {
    id: "sewer-death",
    name: "Sewer Death Platform",
    description: "Specialized operations management platform with secure login and data workflows.",
    url: "https://sewer-death-panel.vercel.app/login",
    category: "Platform",
    industry: "Other",
    tags: ["Next.js", "Vercel", "Operations"],
    year: 2024,
  },
  {
    id: "bright-smile",
    name: "The Bright Smile",
    description: "Modern dental clinic website with appointment booking and treatment showcases.",
    url: "https://thebrightsmile.in/",
    category: "Website",
    industry: "Healthcare",
    tags: ["React", "Booking", "Healthcare"],
    year: 2024,
  },
  {
    id: "chauhan-law",
    name: "Chauhan & Sanoriya Law",
    description: "Professional law firm website with practice areas, team profiles, and contact.",
    url: "https://chauhanandsanoriyalawoffices.com/",
    category: "Website",
    industry: "Legal",
    tags: ["Next.js", "Tailwind", "Law"],
    year: 2024,
  },
  {
    id: "aipply",
    name: "Aipply",
    description: "AI-powered SaaS platform streamlining job applications and candidate workflows.",
    url: "https://www.aipply.io/",
    category: "Platform",
    industry: "SaaS",
    tags: ["AI", "SaaS", "React"],
    year: 2024,
  },
  {
    id: "dr-mayank",
    name: "Dr. Mayank Chauhan",
    description: "Orthopedic surgeon portfolio with patient education resources and appointment flow.",
    url: "https://www.drmayankortho.in/",
    category: "Website",
    industry: "Healthcare",
    tags: ["Next.js", "Healthcare", "Portfolio"],
    year: 2024,
  },
  {
    id: "dr-shachi",
    name: "Dr. Shachi Singh",
    description: "Personal brand website for a specialist doctor with blog and consultation booking.",
    url: "https://www.drshachi.com/",
    category: "Website",
    industry: "Healthcare",
    tags: ["React", "Healthcare", "Booking"],
    year: 2024,
  },
  {
    id: "revx",
    name: "RevX",
    description: "Performance marketing and revenue growth platform for digital-first businesses.",
    url: "https://revx.co.in/",
    category: "Platform",
    industry: "SaaS",
    tags: ["Next.js", "Marketing", "SaaS"],
    year: 2024,
  },
];
