import React, { useState } from "react";
import { X, Code, FileText, User, Mail } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface TabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

interface TabNavigationProps {
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  tabs?: TabItem[];
}

const TabNavigation = ({
  activeTab = "home",
  onTabChange = () => {},
  tabs = [
    {
      id: "home",
      label: "home.jsx",
      icon: <Code className="h-4 w-4 mr-1" />,
      isActive: true,
    },
    {
      id: "portfolio",
      label: "portfolio.jsx",
      icon: <FileText className="h-4 w-4 mr-1" />,
    },
    {
      id: "resume",
      label: "resume.jsx",
      icon: <User className="h-4 w-4 mr-1" />,
    },
    {
      id: "contact",
      label: "contact.jsx",
      icon: <Mail className="h-4 w-4 mr-1" />,
    },
  ],
}: TabNavigationProps) => {
  const [activeTabs, setActiveTabs] = useState<TabItem[]>(tabs);

  const handleTabChange = (tabId: string) => {
    onTabChange(tabId);
  };

  const closeTab = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation();
    if (activeTabs.length > 1) {
      const newTabs = activeTabs.filter((tab) => tab.id !== tabId);
      setActiveTabs(newTabs);

      // If we're closing the active tab, activate the first remaining tab
      if (tabId === activeTab) {
        onTabChange(newTabs[0].id);
      }
    }
  };

  return (
    <div className="w-full bg-[#1e1e1e] border-b border-[#333333]">
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList className="flex overflow-x-auto scrollbar-hide bg-transparent">
          {activeTabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={cn(
                "flex items-center justify-between px-3 py-2 text-sm border-r border-[#333333] min-w-[120px] max-w-[200px] rounded-none",
                activeTab === tab.id
                  ? "bg-[#252526] text-white data-[state=active]:bg-[#252526]"
                  : "bg-[#2d2d2d] text-gray-400 hover:bg-[#252526] hover:text-gray-300 data-[state=active]:bg-[#252526]",
              )}
            >
              <div className="flex items-center truncate">
                {tab.icon}
                <span className="truncate">{tab.label}</span>
              </div>
              <span
                onClick={(e) => closeTab(e, tab.id)}
                className="ml-2 rounded-full hover:bg-[#3c3c3c] p-1 cursor-pointer"
              >
                <X className="h-3 w-3" />
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default TabNavigation;
