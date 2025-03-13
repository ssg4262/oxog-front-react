import React, { useState } from "react";
import { Search } from "lucide-react";

export const RecordSearchBar = () => {
    const [playerName, setPlayerName] = useState<string>("");
    const [tag, setTag] = useState<string>("");

    return (
        <div className="flex items-center bg-[#1E1F22] rounded-lg border border-gray-700 px-4 py-2 w-[420px] focus-within:border-blue-500 transition-all duration-200">
            <Search className="text-gray-400 w-5 h-5" />
            <input
                type="text"
                placeholder="플레이어 이름 +"
                className="bg-transparent text-gray-300 outline-none ml-2 flex-1 placeholder-gray-500"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
            />
            <div className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md text-sm">
                #Tag
            </div>
        </div>
    );
};

