
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface BufferFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const BufferForm = ({ isOpen, onClose }: BufferFormProps) => {
  const [distance, setDistance] = useState("");
  const [unit, setUnit] = useState("meters");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buffer analysis:", { distance, unit });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Buffer Analysis</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="distance">Buffer Distance</Label>
            <Input
              id="distance"
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              placeholder="Enter distance"
              required
            />
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
              Create Buffer
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BufferForm;
