
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

interface LayerFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const LayerForm = ({ isOpen, onClose }: LayerFormProps) => {
  const [layers, setLayers] = useState({
    satellite: true,
    terrain: false,
    streets: false,
    hybrid: false,
    boundaries: true,
    labels: true
  });

  const handleLayerToggle = (layerName: string) => {
    setLayers(prev => ({
      ...prev,
      [layerName]: !prev[layerName as keyof typeof prev]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Layer configuration:", layers);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Layer Control</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="satellite">Satellite</Label>
              <Switch
                id="satellite"
                checked={layers.satellite}
                onCheckedChange={() => handleLayerToggle('satellite')}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="terrain">Terrain</Label>
              <Switch
                id="terrain"
                checked={layers.terrain}
                onCheckedChange={() => handleLayerToggle('terrain')}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="streets">Streets</Label>
              <Switch
                id="streets"
                checked={layers.streets}
                onCheckedChange={() => handleLayerToggle('streets')}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="hybrid">Hybrid</Label>
              <Switch
                id="hybrid"
                checked={layers.hybrid}
                onCheckedChange={() => handleLayerToggle('hybrid')}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="boundaries">Boundaries</Label>
              <Switch
                id="boundaries"
                checked={layers.boundaries}
                onCheckedChange={() => handleLayerToggle('boundaries')}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="labels">Labels</Label>
              <Switch
                id="labels"
                checked={layers.labels}
                onCheckedChange={() => handleLayerToggle('labels')}
              />
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Apply Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LayerForm;
