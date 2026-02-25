import { Home, GraduationCap, FolderOpen, Award, Briefcase } from "lucide-react";

interface SidebarNavProps {
  activeSection: string;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: Home },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "education", label: "Education & Skills", icon: GraduationCap },
  { id: "projects", label: "Projects", icon: FolderOpen },
];

const SidebarNav = ({ activeSection }: SidebarNavProps) => {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-56 bg-sidebar flex flex-col py-8 px-4 border-r border-sidebar-border hidden lg:flex">
      <div className="mb-10 px-3">
        <h2 className="text-lg font-bold text-sidebar-active-foreground tracking-wide">SRIDHAR S</h2>
      </div>
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-sidebar-active text-sidebar-active-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-hover hover:text-sidebar-active-foreground"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </a>
          );
        })}
      </nav>
      <div className="px-3 mt-auto">
        <p className="text-xs text-sidebar-foreground/50">Python Developer</p>
      </div>
    </aside>
  );
};

export default SidebarNav;
