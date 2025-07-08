
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, Filter } from "lucide-react";

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterPanel = ({ isOpen, onClose }: FilterPanelProps) => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const districts = [
    "Downtown",
    "North District",
    "South District", 
    "East District",
    "West District",
    "Industrial Zone",
    "Residential Area"
  ];

  const categories = [
    "Commercial",
    "Residential", 
    "Industrial",
    "Agricultural",
    "Conservation",
    "Mixed Use",
    "Public Space"
  ];

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedDistrict("");
    setSelectedCategories([]);
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
      
      {/* Filter Panel */}
      <div className={`
        fixed right-0 top-16 h-[calc(100vh-4rem)] w-80 bg-white shadow-xl z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        lg:translate-x-0 lg:static lg:h-[calc(100vh-4rem)]
        overflow-y-auto
      `}>
        <div className="p-4 border-b lg:hidden">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="p-4 space-y-6">
          <div className="hidden lg:flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters
            </h2>
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="text-xs"
            >
              Clear All
            </Button>
          </div>

          {/* District Filter */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">District</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                <SelectTrigger>
                  <SelectValue placeholder="Select district" />
                </SelectTrigger>
                <SelectContent>
                  {districts.map((district) => (
                    <SelectItem key={district} value={district}>
                      {district}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Category Filter */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div
                    key={category}
                    className={`
                      p-2 rounded-lg border cursor-pointer transition-colors
                      ${selectedCategories.includes(category)
                        ? 'bg-blue-50 border-blue-200'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                      }
                    `}
                    onClick={() => toggleCategory(category)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{category}</span>
                      {selectedCategories.includes(category) && (
                        <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Active Filters */}
          {(selectedDistrict || selectedCategories.length > 0) && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Active Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {selectedDistrict && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {selectedDistrict}
                      <button 
                        onClick={() => setSelectedDistrict("")}
                        className="hover:bg-slate-300 rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                  {selectedCategories.map((category) => (
                    <Badge key={category} variant="secondary" className="flex items-center gap-1">
                      {category}
                      <button 
                        onClick={() => toggleCategory(category)}
                        className="hover:bg-slate-300 rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Layer Visibility */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Map Layers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Parcels", visible: true },
                  { name: "Buildings", visible: true },
                  { name: "Roads", visible: false },
                  { name: "Zoning", visible: true },
                  { name: "Elevation", visible: false }
                ].map((layer) => (
                  <div key={layer.name} className="flex items-center justify-between">
                    <span className="text-sm">{layer.name}</span>
                    <div className={`
                      w-10 h-6 rounded-full p-1 transition-colors cursor-pointer
                      ${layer.visible ? 'bg-blue-600' : 'bg-slate-300'}
                    `}>
                      <div className={`
                        w-4 h-4 bg-white rounded-full transition-transform
                        ${layer.visible ? 'translate-x-4' : 'translate-x-0'}
                      `} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FilterPanel;
