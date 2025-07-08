
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Circle, 
  Eye, 
  BarChart3, 
  Layers, 
  MapPin, 
  Ruler,
  X
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const tools = [
    { id: 'buffer', name: 'Buffer', icon: Circle, description: 'Create buffer zones' },
    { id: 'line-of-sight', name: 'Line of Sight', icon: Eye, description: 'Analyze visibility' },
    { id: 'elevation', name: 'Elevation Profile', icon: BarChart3, description: 'View elevation data' },
    { id: 'layers', name: 'Layer Control', icon: Layers, description: 'Manage map layers' },
    { id: 'measure', name: 'Measure', icon: Ruler, description: 'Measure distances' },
    { id: 'geocode', name: 'Geocoding', icon: MapPin, description: 'Find locations' },
  ];

  const handleToolClick = (toolId: string) => {
    setActiveTool(activeTool === toolId ? null : toolId);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-slate-800 text-white shadow-xl z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:h-[calc(100vh-4rem)]
      `}>
        <div className="flex items-center justify-between p-4 border-b border-slate-700 lg:hidden">
          <h2 className="text-lg font-semibold">GIS Tools</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:bg-slate-700"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4 hidden lg:block">GIS Tools</h2>
          <div className="space-y-2">
            {tools.map((tool) => {
              const Icon = tool.icon;
              const isActive = activeTool === tool.id;
              
              return (
                <Button
                  key={tool.id}
                  variant={isActive ? "secondary" : "ghost"}
                  className={`
                    w-full justify-start h-auto p-3 text-left
                    ${isActive 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                    }
                  `}
                  onClick={() => handleToolClick(tool.id)}
                >
                  <Icon className="h-5 w-5 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium">{tool.name}</div>
                    <div className="text-xs opacity-75">{tool.description}</div>
                  </div>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
