
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import MapContainer from "@/components/MapContainer";
import FilterPanel from "@/components/FilterPanel";
import ExportButton from "@/components/ExportButton";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleFilterPanel = () => setFilterPanelOpen(!filterPanelOpen);

  return (
    <div className="min-h-screen bg-slate-100">
      <Navigation onMenuToggle={toggleSidebar} />
      
      <div className="flex pt-16">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <div className="flex-1 flex">
          <MapContainer />
          
          <div className="hidden lg:block">
            <FilterPanel 
              isOpen={true} 
              onClose={() => {}} 
            />
          </div>
        </div>
      </div>

      {/* Mobile filter panel */}
      <div className="lg:hidden">
        <FilterPanel 
          isOpen={filterPanelOpen} 
          onClose={() => setFilterPanelOpen(false)} 
        />
        
        {/* Mobile filter toggle button */}
        <button
          onClick={toggleFilterPanel}
          className="fixed bottom-20 right-6 bg-slate-800 text-white p-3 rounded-full shadow-lg z-40"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <ExportButton />
    </div>
  );
};

export default Index;
