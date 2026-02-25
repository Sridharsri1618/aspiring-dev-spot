import { ExternalLink } from "lucide-react";
import projectSms1 from "@/assets/project-sms1.png";
import projectSms2 from "@/assets/project-sms2.png";
import projectDsa1 from "@/assets/project-dsa1.png";
import projectDsa2 from "@/assets/project-dsa2.png";
import projectSps1 from "@/assets/project-sps1.png";
import projectSps2 from "@/assets/project-sps2.png";

const projects = [
  {
    title: "Student Management System",
    description:
      "A comprehensive system built with Python and Streamlit featuring authentication, CRUD operations, filtering, grading systems, analytics dashboard with charts, and certificate downloads. Manages 14+ student records efficiently.",
    tech: ["Python", "Streamlit", "SQL"],
    images: [projectSms1, projectSms2],
    liveLink: "https://student-management-system-tfwcz5skqv9k4xwbmytpex.streamlit.app/",
  },
  {
    title: "DSA Problem Tracker",
    description:
      "Track and manage Data Structures & Algorithms problems with structured data handling, authentication, topic-wise filtering, difficulty tracking, and an analytics dashboard with topic & difficulty distribution charts.",
    tech: ["Python", "Streamlit"],
    images: [projectDsa1, projectDsa2],
    liveLink: "https://dsa-tracker-t4rd.onrender.com/",
  },
  {
    title: "SLIPS - Smart Live Parking System",
    description:
      "A sensor-based smart parking system that identifies available parking slots in real-time, reducing search time and traffic congestion. Features interactive map, reservation system, and live dashboard.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    images: [projectSps1, projectSps2],
    liveLink: "https://slips-btlm.bolt.host/",
  },
];

const ProjectsPage = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">PORTFOLIO</p>
        <h2 className="text-3xl font-bold text-foreground mb-10">Projects</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-card overflow-hidden hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="grid grid-cols-2 gap-2 p-4 bg-muted/30">
                  {project.images.map((img, i) => (
                    <div key={i} className="aspect-video overflow-hidden rounded-lg">
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline w-fit"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
