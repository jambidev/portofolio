import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LoadingAnimation from "./LoadingAnimation";
import VSCodeLayout from "./VSCodeLayout";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Handle loading animation completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Handle navigation between sections
  const handleNavigation = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="w-full h-screen bg-[#1e1e1e] overflow-hidden">
      {isLoading ? (
        <LoadingAnimation
          onLoadingComplete={handleLoadingComplete}
          duration={3000}
        />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <VSCodeLayout initialSection={activeSection} isLoaded={!isLoading} />
        </motion.div>
      )}
    </div>
  );
};

export default Home;
