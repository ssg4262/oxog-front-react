import React, {useState} from "react";
import {Check, Circle, User} from "lucide-react";

const games = [
    {
        id: 1,
        name: "League of Legends",
        thumbnail: "/lol.jpg",
        video: "/lol.mp4",
        icon: "L",
    },
    {
        id: 2,
        name: "Teamfight Tactics",
        thumbnail: "/tft.jpg",
        video: "/tft.mp4",
        icon: "T",
    },
];
export const RecordPick = () => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="p-8 text-white min-h-screen">
            <h1 className="text-3xl font-bold mb-4">게임</h1>
            <h2 className="text-xl font-semibold mb-6">내 게임</h2>

            <div className="flex space-x-6">
                {games.map((game) => (
                    <div
                        key={game.id}
                        className="relative w-64 h-36 rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-gray-800 to-black hover:scale-105 transition-transform"
                        onMouseEnter={() => setHovered(game.id)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <div className="w-full h-full relative">
                            {hovered === game.id ? (
                                <video
                                    src={game.video}
                                    autoPlay
                                    loop
                                    muted
                                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100"
                                />
                            ) : (
                                <img
                                    src={game.thumbnail}
                                    alt={game.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100"
                                />
                            )}
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/60 flex items-center backdrop-blur-md">
                                <span className="text-lg font-bold text-yellow-400">{game.icon}</span>
                                <span className="ml-2 text-white font-semibold">{game.name}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
