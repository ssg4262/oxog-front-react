import { Compass, MessageCircle, Settings, Users } from "lucide-react";

const MainSidebar = () => {
    return (
        <div className="h-screen w-20 bg-mainNav flex flex-col items-center py-4 space-y-8">
            {/* Logo */}
            <div className="w-12 h-12 bg-discordBrand rounded-full mb-6">
            </div>

            {/* Icons */}
            <div className="flex flex-col space-y-3">
                <SidebarIcon icon={<MessageCircle />} label="Messages" />
                <SidebarIcon icon={<Users />} label="Friends" />
                <SidebarIcon icon={<Settings />} label="Settings" />
                <SidebarIcon icon={<Compass />} label="Home" />
            </div>
        </div>
    );
};

const SidebarIcon = ({ icon, label }) => (
    <div className="group relative flex items-center justify-center w-12 h-12  text-white bg-sideItem  hover:bg-gray-700 rounded-full cursor-pointer">
        {icon}
        <span className="absolute left-14 opacity-0 group-hover:opacity-100  text-white text-xs py-1 px-2 rounded-md z-10">
      {label}
    </span>
    </div>
);

export default MainSidebar;
