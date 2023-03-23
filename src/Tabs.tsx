import React, { useState } from "react";
import Table from "./Table";

interface Tab {
  label: string;
  data: any[];
}

const Tabs: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="w-full">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`${
                index === activeTab
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="p-4">
        <Table data={tabs[activeTab].data} />
      </div>
    </div>
  );
};

export default Tabs;
