"use client";
import '../src/css/tab.css'

import { Tabs } from "../components/ui/tabs"; // Adjust the import path based on your directory structure

// Define the data for the tabs
const tabs = [
  {
    title: "Web Development",
    value: "tab1",
    content: <div className="tab">
      <h1>Web Development</h1>
      <img src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"/>
      </div>,
  },
  {
    title: "MERN Stack",
    value: "tab2",
    content: <div className="tab">
      <h1>MERN Stack</h1>
            <img src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"/>
    </div>,
  },
  {
    title: "Tor nani",
    value: "tab3",
    content: <div className="tab">
      <h1>Tor nani</h1>
            <img src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"/>
    </div>,
  },
];

const HomePage = () => {
  return (
    <div className="home-page">      
      {/* Add the Tabs component */}
      <Tabs
        tabs={tabs}
        containerClassName="tabs-container"
        activeTabClassName="active-tab"
        tabClassName="tab"
        contentClassName="tab-content"
      />
    </div>
  );
};

export default HomePage;
