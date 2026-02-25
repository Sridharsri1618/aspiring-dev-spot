const skillCategories = [
  {
    title: "LANGUAGES",
    skills: ["Python", "Java (Basics)"],
  },
  {
    title: "CORE CONCEPTS",
    skills: ["Data Structures & Algorithms", "OOP"],
  },
  {
    title: "WEB",
    skills: ["HTML", "CSS", "JavaScript (Basics)"],
  },
  {
    title: "TOOLS & FRAMEWORKS",
    skills: ["Git & GitHub", "Flask", "Streamlit", "SQLite / MySQL"],
  },
];

const education = [
  {
    title: "Higher Secondary Education",
    institution: "Tamil Nadu State Board",
  },
  {
    title: "B.E Information Technology (2023–2027)",
    institution: "Panimalar Engineering College",
    extra: "CGPA: 7.37",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6 lg:px-12 space-y-16">
        {/* Education */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">BACKGROUND</p>
          <h2 className="text-3xl font-bold text-foreground mb-8">Education</h2>
          <div className="relative pl-8">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-primary/30" />
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-8 top-4 w-3.5 h-3.5 rounded-full bg-primary" />
                  <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                    <h4 className="font-semibold text-foreground text-lg">{edu.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                    {edu.extra && (
                      <p className="text-sm text-primary font-medium mt-1">{edu.extra}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">EXPERTISE</p>
          <h2 className="text-3xl font-bold text-foreground mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="bg-card rounded-xl p-6 shadow-card border border-border">
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
