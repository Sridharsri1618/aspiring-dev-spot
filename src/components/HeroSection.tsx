import sridharPhoto from "@/assets/sridhar-photo.jpeg";
import TypingEffect from "./TypingEffect";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Welcome</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Hi, I'm <span className="text-gradient">Sridhar S</span>
            </h1>
            <TypingEffect />
            <p className="text-muted-foreground max-w-lg leading-relaxed">
              I build practical Python applications and consistently solve Data Structures problems.
              Passionate about backend systems and writing scalable clean code.
            </p>
            <a
              href="https://sridhar-s-elite-portfolio.vercel.app/SridharResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-card"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
          <div className="flex-shrink-0">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-elevated border-4 border-card">
              <img src={sridharPhoto} alt="Sridhar S" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
