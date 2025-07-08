
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface LineOfSightFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const LineOfSightForm = ({ isOpen, onClose }: LineOfSightFormProps) => {
  const [observerHeight, setObserverHeight] = useState("");
  const [targetHeight, setTargetHeight] = useState("");
  const [maxDistance, setMaxDistance] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Line of sight analysis:", { observerHeight, targetHeight, maxDistance });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Line of Sight Analysis</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="observerHeight">Observer Height (m)</Label>
            <Input
              id="observerHeight"
              type="number"
              value={observerHeight}
              onChange={(e) => setObserverHeight(e.target.value)}
              placeholder="Enter observer height"
              required
            />
          </div>
          <div>
            <Label htmlFor="targetHeight">Target Height (m)</Label>
            <Input
              id="targetHeight"
              type="number"
              value={targetHeight}
              onChange={(e) => setTargetHeight(e.target.value)}
              placeholder="Enter target height"
              required
            />
          </div>
          <div>
            <Label htmlFor="maxDistance">Max Distance (km)</Label>
            <Input
              id="maxDistance"
              type="number"
              value={maxDistance}
              onChange={(e) => setMaxDistance(e.target.value)}
              placeholder="Enter maximum distance"
              required
            />
          </div>
          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Analyze Visibility
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LineOfSightForm;
