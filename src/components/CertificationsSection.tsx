import certPython from "@/assets/cert-python.jpeg";
import certJavascript from "@/assets/cert-javascript.jpeg";
import certCss from "@/assets/cert-css.jpeg";
import certFullstack from "@/assets/cert-fullstack.jpeg";
import certUipath from "@/assets/cert-uipath.jpeg";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Python Fundamentals",
    issuer: "Infosys Springboard",
    date: "June 19, 2025",
    image: certPython,
  },
  {
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    date: "April 21, 2025",
    image: certJavascript,
  },
  {
    title: "CSS (Basic)",
    issuer: "HackerRank",
    date: "May 24, 2025",
    image: certCss,
  },
  {
    title: "Full Stack Web Development Training",
    issuer: "Mindenious",
    date: "August 11, 2025",
    image: certFullstack,
  },
  {
    title: "UiPath Automation Developer Associate Training",
    issuer: "UiPath",
    date: "February 25, 2026",
    image: certUipath,
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-card overflow-hidden hover:shadow-elevated transition-shadow duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted/30">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-primary flex-shrink-0" />
                  <h3 className="font-semibold text-foreground text-sm leading-tight">{cert.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
