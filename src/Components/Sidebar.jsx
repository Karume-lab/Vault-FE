import React from 'react';
import Tab from './SidebarButton'; // Assuming Button component is in a separate file



function Sidebar() {
  return (
    <div className="h-screen w-72  bg-customCactus-400 text-white flex flex-col justify-between">
      <div className="mt-4">
        {/* Your logo */}
      </div>
      <div className="mb-4">
        <Tab icon="Icon1" text="Upload file" />
        <Tab icon="Icon2" text="Recents" />
        <Tab icon="Icon3" text="Favorites" />
        <Tab icon="Icon5" text="My Vault" />
        <Tab icon="Icon4" text="Tags" />
        <Tab icon="Icon4" text="Storage" />
        <Tab icon="Icon4" text="Settings" />
      </div>
    </div>
  );
}

export default Sidebar;
