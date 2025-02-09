import React, { useState } from "react";
import { ChevronDown, Settings, Search } from "lucide-react";

const SearchBarCard = () => {
    const servers = ["Faker", "Zeus"];
    return (
        <div className="bg-[#2f3136] text-white w-full sm:max-w-lg md:max-w-xl lg:max-w-3xl mx-auto p-8 rounded-2xl relative overflow-hidden">
            {/* Wave with Spark Icons */}
            <div className="absolute top-0 left-0 w-full">
                {/* Floating Circular Image */}
                <div className="absolute top-[-36px] left-1/2 transform -translate-x-1/2 bg-[#5865f2] p-3 rounded-full shadow-lg z-10">
                    <img
                        src="https://via.placeholder.com/48"
                        alt="Server Icon"
                        className="w-16 h-16 rounded-full"
                    />
                </div>
                <svg
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full"
                >
                    {/* Wave Shape */}
                    <path
                        fill="#5865f2"
                        d="M0,256L40,234.7C80,213,160,171,240,154.7C320,139,400,149,480,170.7C560,192,640,224,720,208C800,192,880,128,960,117.3C1040,107,1120,149,1200,160C1280,171,1360,149,1400,138.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                    ></path>

                    {/* Spark Icons */}
                    <g className="relative">
                        {[
                            { x: 100, y: 80, size: 12 },
                            { x: 300, y: 60, size: 10 },
                            { x: 500, y: 100, size: 14 },
                            { x: 700, y: 50, size: 11 },
                            { x: 850, y: 120, size: 15 },
                            { x: 1100, y: 70, size: 12 },
                        ].map((spark, index) => (
                            <g key={index} transform={`translate(${spark.x}, ${spark.y})`}>
                                <path
                                    d="M10 6 L14 10 L10 14 L6 10 Z"
                                    fill="white"
                                    stroke="#ffffff"
                                    strokeWidth="0.5"
                                    transform={`scale(${spark.size / 8})`}
                                />
                                <circle
                                    cx="0"
                                    cy="0"
                                    r={spark.size / 2}
                                    fill="#ffffff"
                                    opacity="0.9"
                                />
                            </g>
                        ))}
                    </g>
                </svg>
            </div>

            {/* Header Section */}
            <div className="text-center relative z-10 mt-8">
                <h1 className="text-2xl font-bold mt-4">앗, 유저들의 전적을 검색해보세요!</h1>
                <p className="mt-2 text-sm text-gray-300">
                    좋아하는 상대를 즐겨찾기 하세요
                </p>
                <p className="text-sm text-gray-400 mt-1">
                    프로게이머,친구등... 다양하게 추가 가능 합니다.
                </p>
            </div>

            {/* Server List */}
            <div className="space-y-4 mt-8">
                <div className="relative flex items-center bg-[#36393f] text-white px-4 py-3 rounded-lg">
                    <button className="flex items-center text-white mr-1 rounded-lg">
                        KR <ChevronDown className="ml-2 h-4 w-4" />
                    </button>
                    <Search className="mr-3 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="플레이어 이름 +"
                        className="bg-transparent w-full outline-none text-white placeholder:text-gray-400"
                    />
                    <button className="bg-gray-600 text-gray-300 text-sm px-3 py-1 rounded-lg ml-3">
                        #Tag
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBarCard;
