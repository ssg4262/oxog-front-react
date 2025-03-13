import React, { useState } from 'react';
import { Search } from 'lucide-react';
import {RecordSearchBar} from "@/components/common/input/RecordSearchBar";

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
    return (
        <div className="relative w-full h-[320px] bg-[rgb(29,31,37)] flex justify-center items-center px-6">
            {/* 텍스트 영역 */}
            <div className="w-1/2 text-white">
                <h2 className="text-3xl font-bold mb-3">
                    OXOG 오픈<br />전적 검색을 해보세요!
                </h2>
                <p className="text-gray-400 text-sm mb-6">
                    내 전적과 게임 플레이 검색을
                    <br />LOL, TFT 검색 가능!
                </p>
                <div className="px-4 py-2 nav-font">
                    <RecordSearchBar/>
                </div>
            </div>

            {/* 카드 이미지 영역 */}
            <div className="w-1/2 relative flex justify-center items-center">
                <div className="relative w-[200px] h-[280px] transform scale-105">
                    {/* 뒷배경 카드 (블러 효과) */}
                    <img
                        src="/cards/card_bg.png"
                        alt="Background Card"
                        className="absolute top-3 left-5 w-full h-full blur-lg opacity-50"
                    />
                    {/* 앞면 카드 */}
                    <img
                        src="/cards/card_front.png"
                        alt="Front Card"
                        className="relative w-full h-full rounded-lg shadow-lg hover:scale-105 transition-transform"
                    />
                </div>
            </div>
        </div>
    );
};

