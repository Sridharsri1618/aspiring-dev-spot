import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Student Management System",
    description: "A comprehensive system built with Python and Streamlit featuring authentication, CRUD operations, filtering, and grading systems.",
    tech: ["Python", "Streamlit", "SQL"],
  },
  {
    title: "DSA Problem Tracker",
    description: "Track and manage Data Structures & Algorithms problems with structured data handling, authentication, and progress tracking.",
    tech: ["Python", "Streamlit"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-accent text-accent-foreground text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
