
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface GeocodeFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const GeocodeForm = ({ isOpen, onClose }: GeocodeFormProps) => {
  const [address, setAddress] = useState("");
  const [searchType, setSearchType] = useState("address");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Geocoding search:", { address, searchType });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Find Location</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="searchType">Search Type</Label>
            <select
              id="searchType"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="address">Address</option>
              <option value="coordinates">Coordinates</option>
              <option value="place">Place Name</option>
            </select>
          </div>
          <div>
            <Label htmlFor="address">
              {searchType === 'coordinates' ? 'Coordinates (lat, lng)' : 
               searchType === 'place' ? 'Place Name' : 'Address'}
            </Label>
            <Input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder={
                searchType === 'coordinates' ? 'e.g., 40.7128, -74.0060' :
                searchType === 'place' ? 'e.g., Central Park' :
                'Enter street address'
              }
              required
            />
          </div>
          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Search
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default GeocodeForm;
