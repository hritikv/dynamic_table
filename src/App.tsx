import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import Tabs from "./Tabs";
import { data, users } from "./data";


const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [adddata, setAdddata] = useState<any>({});

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
const tabs = [
  { label: "Tab 1", data },
  { label: "Tab 2", data: [...users, users.push(adddata)] },
];
  return (
    <>
      <div className="flex m-5">
        {isSidebarOpen && (
          <div className="w-1/2 h-screen">
            {/* content for sidebar */}
            <Form isSidebarOpen={setIsSidebarOpen} setAdddata={setAdddata} />
          </div>
        )}
        <div className="flex-grow">
          {/* main content */}
          {!isSidebarOpen && (
            <button
              onClick={toggleSidebar}
              className="bg-indigo-400 p-1 rounded text-white"
            >
              Toggle Sidebar
            </button>
          )}
        </div>
      </div>
      <div className="p-4">
        <Tabs tabs={tabs} />
      </div>
    </>
  );
};

export default App;
