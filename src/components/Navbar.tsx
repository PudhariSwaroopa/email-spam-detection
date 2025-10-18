import { Button } from "@/components/ui/button";
import { Mail, BarChart3, FileText, Sparkles } from "lucide-react";

interface NavbarProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

const Navbar = ({ currentSection, onNavigate }: NavbarProps) => {
  const navItems = [
    { id: "home", label: "Overview", icon: Sparkles },
    { id: "demo", label: "Live Demo", icon: Mail },
    { id: "results", label: "Results", icon: BarChart3 },
    { id: "docs", label: "Documentation", icon: FileText },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Spam Detector</h1>
              <p className="text-xs text-muted-foreground">ML Classification Project</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onNavigate(item.id)}
                  className="gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Button>
              );
            })}
          </div>

          <div className="md:hidden flex gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentSection === item.id ? "default" : "ghost"}
                  size="icon"
                  onClick={() => onNavigate(item.id)}
                >
                  <Icon className="w-4 h-4" />
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
