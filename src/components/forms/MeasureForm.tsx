
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface MeasureFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const MeasureForm = ({ isOpen, onClose }: MeasureFormProps) => {
  const [measureType, setMeasureType] = useState("distance");
  const [unit, setUnit] = useState("meters");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Measure tool:", { measureType, unit });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Measurement Tool</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="measureType">Measurement Type</Label>
            <select
              id="measureType"
              value={measureType}
              onChange={(e) => setMeasureType(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="distance">Distance</option>
              <option value="area">Area</option>
              <option value="perimeter">Perimeter</option>
            </select>
          </div>
          <div>
            <Label htmlFor="unit">Unit</Label>
            <select
              id="unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="meters">Meters</option>
              <option value="kilometers">Kilometers</option>
              <option value="feet">Feet</option>
              <option value="miles">Miles</option>
            </select>
          </div>
          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Start Measuring
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default MeasureForm;
