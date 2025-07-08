
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onMenuToggle: () => void;
}

const Navigation = ({ onMenuToggle }: NavigationProps) => {
  return (
    <nav className="bg-slate-900 text-white h-16 flex items-center justify-between px-4 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuToggle}
          className="text-white hover:bg-slate-700 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">LI</span>
          </div>
          <h1 className="text-xl font-bold">LandInsight</h1>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-4 text-sm">
        <span className="text-slate-300">GIS Analytics Platform</span>
      </div>
    </nav>
  );
};

export default Navigation;
