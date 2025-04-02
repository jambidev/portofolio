import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import TabNavigation from "./TabNavigation";
import ContentArea from "./ContentArea";
import AudioPlayer from "./AudioPlayer";

interface VSCodeLayoutProps {
  initialSection?: string;
  isLoaded?: boolean;
}

const VSCodeLayout = ({
  initialSection = "home",
  isLoaded = true,
}: VSCodeLayoutProps) => {
  const [activeSection, setActiveSection] = useState(initialSection);
  const [statusMessage, setStatusMessage] = useState("Ready");

  // Handle navigation from sidebar
  const handleNavigation = (section: string) => {
    setActiveSection(section);
    setStatusMessage(`Navigated to ${section}`); // Update status message

    // Reset status message after 2 seconds
    setTimeout(() => {
      setStatusMessage("Ready");
    }, 2000);
  };

  // Handle tab change from tab navigation
  const handleTabChange = (tabId: string) => {
    setActiveSection(tabId);
  };

  return (
    <motion.div
      className="flex flex-col h-screen w-full bg-[#1e1e1e] text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Top Bar - Similar to VS Code title bar */}
      <div className="h-8 bg-[#3c3c3c] flex items-center px-4 text-sm justify-between border-b border-[#252525]">
        <div className="flex items-center space-x-4">
          <span className="font-semibold">KOMA SOLUTION</span>
          <div className="hidden md:flex space-x-4">
            <span className="text-gray-300 hover:text-white cursor-pointer">
              File
            </span>
            <span className="text-gray-300 hover:text-white cursor-pointer">
              Edit
            </span>
            <span className="text-gray-300 hover:text-white cursor-pointer">
              View
            </span>
            <span className="text-gray-300 hover:text-white cursor-pointer">
              Help
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-400">Portfolio v1.0.0</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar activeSection={activeSection} onNavigate={handleNavigation} />

        {/* Main Editor Area */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Tab Navigation */}
          <TabNavigation
            activeTab={activeSection}
            onTabChange={handleTabChange}
          />

          {/* Content Area */}
          <ContentArea
            activeTab={activeSection}
            onNavigate={handleNavigation}
          />
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#007acc] flex items-center justify-between px-4 text-xs">
        <div className="flex items-center space-x-4">
          <span>{statusMessage}</span>
          <span>UTF-8</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>JavaScript</span>
          <span>Ln 1, Col 1</span>
          <span>Spaces: 2</span>
        </div>
      </div>
      
      {/* Background Music Player */}
      <AudioPlayer 
        audioSrc="/keajaiban-air-mata-wanita.mp3" 
        autoPlay={true}
        initialVolume={0.4}
      />
    </motion.div>
  );
};

export default VSCodeLayout;
