import { GraduationCap } from "lucide-react";

const skills = ["Python", "Data Structures", "Streamlit", "Flask", "HTML/CSS", "JavaScript", "SQL", "Git", "OOP", "React"];

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Education & Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <GraduationCap size={20} className="text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-semibold text-foreground">B.Tech Information Technology</h4>
                <p className="text-sm text-muted-foreground">Currently Pursuing</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-xl p-8 shadow-card">
            <h3 className="text-xl font-bold text-foreground mb-6">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
