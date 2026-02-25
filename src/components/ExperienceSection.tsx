import certIntern from "@/assets/cert-intern.jpeg";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Experience</h2>
        <div className="bg-card rounded-xl shadow-card overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Briefcase size={20} className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Full Stack Web Development Intern</h3>
                  <p className="text-sm text-primary font-medium">Mindenious</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={14} />
                <span>05 July 2025 – 04 August 2025</span>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
                <li>Worked on real-world full stack web development projects using modern technologies.</li>
                <li>Gained hands-on experience with front-end frameworks, backend APIs, and database integration.</li>
                <li>Demonstrated diligence, consistency, determination, active participation, and innovation throughout the internship period.</li>
                <li>Collaborated with team members to build scalable and responsive web applications.</li>
                <li>Strengthened understanding of HTML, CSS, JavaScript, React, Node.js, and database management.</li>
              </ul>
            </div>
            <div className="md:w-1/3 p-6 flex items-center justify-center bg-muted/30">
              <img
                src={certIntern}
                alt="Internship Certificate"
                className="rounded-lg shadow-card max-w-full h-auto hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
