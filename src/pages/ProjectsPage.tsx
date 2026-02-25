import { ExternalLink } from "lucide-react";
import projectStudentMgmt from "@/assets/project-student-mgmt.jpg";
import projectDsaTracker from "@/assets/project-dsa-tracker.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";

const projects = [
  {
    title: "Student Management System",
    description:
      "A comprehensive system built with Python and Streamlit featuring authentication, CRUD operations, filtering, and grading systems. Manages student records efficiently with a clean dashboard interface.",
    tech: ["Python", "Streamlit", "SQL"],
    image: projectStudentMgmt,
    liveLink: "https://student-management-system-sridhar.streamlit.app",
  },
  {
    title: "DSA Problem Tracker",
    description:
      "Track and manage Data Structures & Algorithms problems with structured data handling, authentication, and progress tracking. Categorized by topic with difficulty filters.",
    tech: ["Python", "Streamlit"],
    image: projectDsaTracker,
    liveLink: "https://dsa-tracker-sridhar.streamlit.app",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS showcasing projects, skills, certifications, and experience with smooth animations.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: projectPortfolio,
    liveLink: "https://sridhar-s-elite-portfolio.vercel.app",
  },
];

const ProjectsPage = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-foreground mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-card overflow-hidden hover:shadow-elevated transition-shadow duration-300 group flex flex-col"
            >
              <div className="aspect-video overflow-hidden bg-muted/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-accent text-accent-foreground text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
