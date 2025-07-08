
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ElevationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ElevationForm = ({ isOpen, onClose }: ElevationFormProps) => {
  const [profileLength, setProfileLength] = useState("");
  const [samplePoints, setSamplePoints] = useState("100");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Elevation profile:", { profileLength, samplePoints });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Elevation Profile</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="profileLength">Profile Length (km)</Label>
            <Input
              id="profileLength"
              type="number"
              value={profileLength}
              onChange={(e) => setProfileLength(e.target.value)}
              placeholder="Enter profile length"
              required
            />
          </div>
          <div>
            <Label htmlFor="samplePoints">Sample Points</Label>
            <Input
              id="samplePoints"
              type="number"
              value={samplePoints}
              onChange={(e) => setSamplePoints(e.target.value)}
              placeholder="Number of sample points"
              required
            />
          </div>
          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Generate Profile
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ElevationForm;
