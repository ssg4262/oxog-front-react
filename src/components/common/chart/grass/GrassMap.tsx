import React from "react";

interface GrassMapProps {
    posts: { date: string; count: number }[];
}

export const GrassMap: React.FC<GrassMapProps> = ({ posts }) => {
    const getColor = (count: number) => {
        if (count >= 5) return "bg-green-500";
        if (count >= 3) return "bg-green-400";
        if (count >= 1) return "bg-green-300";
        return "bg-gray-700";
    };

    return (
        <div className="grid grid-cols-12 gap-1 p-2 bg-[rgb(23,24,29)] rounded-lg w-[264px] h-[180px]">
            {posts.map((post, index) => (
                <div key={index} className="relative group">
                    <div
                        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-md ${getColor(post.count)}`}
                    ></div>

                    {/* 툴팁 */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                        {post.date} - {post.count} posts
                    </div>
                </div>
            ))}
        </div>
    );
};
