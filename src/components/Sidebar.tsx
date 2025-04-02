import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Code, FileCode, Home, Mail, User } from "lucide-react";

interface SidebarItemProps {
  icon: React.ReactNode;
  tooltip: string;
  isActive?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({
  icon,
  tooltip,
  isActive = false,
  onClick = () => {},
}: SidebarItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={`w-12 h-12 rounded-none ${isActive ? "border-l-2 border-blue-500 bg-slate-800" : "hover:bg-slate-800"}`}
            onClick={onClick}
          >
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

interface SidebarProps {
  onNavigate?: (section: string) => void;
  activeSection?: string;
}

const Sidebar = ({
  onNavigate = () => {},
  activeSection = "home",
}: SidebarProps) => {
  const [section, setSection] = useState(activeSection);

  const handleNavigation = (newSection: string) => {
    setSection(newSection);
    onNavigate(newSection);
  };

  return (
    <div className="h-full w-16 bg-slate-900 flex flex-col items-center py-4 border-r border-slate-700">
      <div className="mb-8 p-2">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
          KS
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <SidebarItem
          icon={<Home size={24} className="text-slate-300" />}
          tooltip="Beranda"
          isActive={section === "home"}
          onClick={() => handleNavigation("home")}
        />

        <SidebarItem
          icon={<FileCode size={24} className="text-slate-300" />}
          tooltip="Portfolio"
          isActive={section === "portfolio"}
          onClick={() => handleNavigation("portfolio")}
        />

        <SidebarItem
          icon={<User size={24} className="text-slate-300" />}
          tooltip="Resume"
          isActive={section === "resume"}
          onClick={() => handleNavigation("resume")}
        />

        <SidebarItem
          icon={<Mail size={24} className="text-slate-300" />}
          tooltip="Kontak"
          isActive={section === "contact"}
          onClick={() => handleNavigation("contact")}
        />
      </div>

      <div className="mt-auto">
        <SidebarItem
          icon={<Code size={24} className="text-slate-300" />}
          tooltip="Source Code"
          onClick={() =>
            window.open("https://github.com/jambidev", "_blank")
          }
        />
      </div>
    </div>
  );
};

export default Sidebar;
