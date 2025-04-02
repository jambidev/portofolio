import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomePage from "./HomePage";
import PortfolioSection from "./PortfolioSection";
import ResumeSection from "./ResumeSection";
import ContactSection from "./ContactSection";
import RainLightningBackground from "./RainLightningBackground";

interface ContentAreaProps {
  activeTab?: string;
  onNavigate?: (tab: string) => void;
}

const ContentArea = ({
  activeTab = "home",
  onNavigate = () => {},
}: ContentAreaProps) => {
  // Function to handle internal navigation between sections
  const handleNavigate = (tab: string) => {
    onNavigate(tab);
  };

  // Animation variants for tab transitions
  const tabVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  };

  return (
    <div className="w-full h-full overflow-auto bg-[#1e1e1e] relative">
      <AnimatePresence mode="wait">
        {activeTab === "home" && (
          <motion.div
            key="home"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={tabVariants}
            className="w-full h-full"
          >
            <HomePage onNavigate={handleNavigate} />
            <RainLightningBackground intensity="medium" />
          </motion.div>
        )}

        {activeTab === "portfolio" && (
          <motion.div
            key="portfolio"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={tabVariants}
            className="w-full h-full"
          >
            <PortfolioSection />
            <RainLightningBackground intensity="low" />
          </motion.div>
        )}

        {activeTab === "resume" && (
          <motion.div
            key="resume"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={tabVariants}
            className="w-full h-full"
          >
            <ResumeSection />
            <RainLightningBackground intensity="high" />
          </motion.div>
        )}

        {activeTab === "contact" && (
          <motion.div
            key="contact"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={tabVariants}
            className="w-full h-full"
          >
            <ContactSection />
            <RainLightningBackground intensity="medium" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContentArea;
