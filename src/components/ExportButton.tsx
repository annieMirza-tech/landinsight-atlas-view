
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Download, FileText, Image, Table } from "lucide-react";

const ExportButton = () => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async (format: string) => {
    setIsExporting(true);
    
    // Simulate export process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(`Exporting report as ${format}`);
    
    setIsExporting(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg rounded-full px-6"
            disabled={isExporting}
          >
            <Download className="h-5 w-5 mr-2" />
            {isExporting ? "Exporting..." : "Export Report"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem onClick={() => handleExport("PDF")}>
            <FileText className="h-4 w-4 mr-2" />
            Export as PDF
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleExport("PNG")}>
            <Image className="h-4 w-4 mr-2" />
            Export as Image
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleExport("CSV")}>
            <Table className="h-4 w-4 mr-2" />
            Export as CSV
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ExportButton;
