import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Student Management System",
    description: "A comprehensive system built with Python and Streamlit featuring authentication, CRUD operations, filtering, and grading systems.",
    tech: ["Python", "Streamlit", "SQL"],
    liveLink: "https://student-management-system-tfwcz5skqv9k4xwbmytpex.streamlit.app/",
  },
  {
    title: "DSA Problem Tracker",
    description: "Track and manage Data Structures & Algorithms problems with structured data handling, authentication, and progress tracking.",
    tech: ["Python", "Streamlit"],
    liveLink: "https://dsa-tracker-t4rd.onrender.com/",
  },
  {
    title: "SLIPS - Smart Live Parking System",
    description: "A sensor-based smart parking system identifying available slots in real-time, reducing search time and traffic congestion.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    liveLink: "https://slips-btlm.bolt.host/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-accent text-accent-foreground text-xs font-medium">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
