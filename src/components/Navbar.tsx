import { NavLink } from "react-router-dom";
import { Home, GraduationCap, FolderOpen, Award, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/education", label: "Education & Skills", icon: GraduationCap },
  { to: "/projects", label: "Projects", icon: FolderOpen },
  { to: "/certifications", label: "Certifications", icon: Award },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 z-50 h-screen w-56 bg-card border-r border-border flex-col py-8 px-4">
        <div className="mb-10 px-3">
          <NavLink to="/" className="text-lg font-bold text-foreground tracking-wide">
            SRIDHAR <span className="text-primary">S</span>
          </NavLink>
        </div>
        <nav className="flex flex-col gap-1 flex-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`
                }
              >
                <Icon size={18} />
                {link.label}
              </NavLink>
            );
          })}
        </nav>
        <div className="px-3 mt-auto">
          <p className="text-xs text-muted-foreground/50">Python Developer</p>
        </div>
      </aside>

      {/* Mobile top bar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          <NavLink to="/" className="text-lg font-bold text-foreground tracking-wide">
            SRIDHAR <span className="text-primary">S</span>
          </NavLink>
          <button className="text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="bg-card border-b border-border px-6 pb-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block text-sm font-medium py-2 transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
