import { useState } from "react";

const RankingInfo = () => {
    const [selected, setSelected] = useState("solo");
    const [selectedRegion, setSelectedRegion] = useState("KR");
    const [selectedTier, setSelectedTier] = useState("All Tiers");
    const [playerSearch, setPlayerSearch] = useState("");

    return (
        <div className="w-[390px] bg-[#2b2d31] rounded-xl shadow-lg overflow-hidden text-white">
            <div className="mt-5 text-white">
                <div className="flex">
                    <p className="text-lg px-4 font-bold">랭킹</p>
                    {/* 검색창 */}
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            className="w-full bg-[#2b2d31] text-white py-1 px-2 text-sm rounded-md pl-8 focus:outline-none"
                            placeholder="플레이어 이름 #KR1"
                            value={playerSearch}
                            onChange={(e) => setPlayerSearch(e.target.value)}
                        />
                        <svg
                            className="absolute left-2 top-2 w-4 h-4 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-4.35-4.35m2.1-6.1a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>
                <div className="flex items-center p-2 space-x-2">
                    {/* 지역 선택 */}
                    <select
                        className="bg-[#2b2d31] text-white py-1 px-2 text-sm rounded-md focus:outline-none"
                        value={selectedRegion}
                        onChange={(e) => setSelectedRegion(e.target.value)}
                    >
                        <option value="KR">KR</option>
                        <option value="NA">NA</option>
                        <option value="EUW">EUW</option>
                    </select>

                    {/* 티어 선택 */}
                    <select
                        className="bg-[#2b2d31] text-white py-1 px-2 text-sm rounded-md focus:outline-none"
                        value={selectedTier}
                        onChange={(e) => setSelectedTier(e.target.value)}
                    >
                        <option value="All Tiers">All Tiers</option>
                        <option value="Challenger">Challenger</option>
                        <option value="Master">Master</option>
                    </select>

                    {/* LP 정보 */}
                    <div className="flex items-center space-x-1">
                        <div className="text-white text-sm">
                            <span className="font-bold">517 LP</span>
                            <span className="text-green-400 ml-1 text-xs">▲ 29</span>
                        </div>
                        <div className="text-white text-sm">
                            <span className="font-bold">796 LP</span>
                            <span className="text-green-400 ml-1 text-xs">▲ 43</span>
                        </div>
                    </div>


                </div>
                <div className="mt-3 flex ml-3">
                    <button
                        className={`w-[70px] h-[30px] text-white text-sm font-medium py-1 px-3 rounded-md transition-transform duration-150 
              ${selected === "solo" ? "bg-[#515162]" : ""} hover:bg-gray-700 active:scale-95`}
                        onClick={() => setSelected("solo")}
                    >
                        솔랭
                    </button>
                    <button
                        className={`w-[70px] h-[30px] text-white text-sm font-medium py-1 px-3 rounded-md transition-transform duration-150 
              ${selected === "free" ? "bg-[#515162]" : ""} hover:bg-gray-700 active:scale-95`}
                        onClick={() => setSelected("free")}
                    >
                        자랭
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RankingInfo;
