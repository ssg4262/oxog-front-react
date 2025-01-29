import { Home, MessageCircle, Settings, Users } from "lucide-react";

const MainSidebar = () => {
    return (
        <div className="h-screen w-20 bg-mainNav flex flex-col items-center py-4 space-y-8">
            {/* Logo */}
            <div className="w-12 h-12 bg-discordBrand rounded-2xl mb-6">

            </div>

            {/* Icons */}
            <div className="flex flex-col space-y-3">
                <SidebarIcon icon={<Home />} label="Home" />
                <SidebarIcon icon={<MessageCircle />} label="Messages" />
                <SidebarIcon icon={<Users />} label="Friends" />
                <SidebarIcon icon={<Settings />} label="Settings" />
            </div>
        </div>
    );
};

const SidebarIcon = ({ icon, label }) => (
    <div className="group relative flex items-center justify-center w-12 h-12  hover:bg-gray-700 rounded-2xl cursor-pointer">
        {icon}
        <span className="absolute left-14 opacity-0 group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded-md z-10">
      {label}
    </span>
    </div>
);

export default MainSidebar;
