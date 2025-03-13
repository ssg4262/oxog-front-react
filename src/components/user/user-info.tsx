import React from "react";

import profile from '@/assets/img/profile/profile.png'
import lol from '@/assets/img/user/league-of-legends-icon-png-17.png'
import {GrassMap} from "@/components/common/chart/grass/GrassMap";
import {RiotSvg} from "@/assets/img/user/riot-svg";
import {TftSvg} from "@/assets/img/user/tft-svg";
export const UserInfo = () => {
    const postData = Array.from({ length: 72 }, (_, i) => ({
        date: `2024-03-${String(i + 1).padStart(2, "0")}`,
        count: Math.floor(Math.random() * 6), // 랜덤 게시글 수 (0~5)
    }));
    return(
        <div className="w-[320px] h-[800px] bg-[rgb(29,31,37)] rounded-md overflow-hidden mt-4 ml-2 mr-2 mb-4 border-4 border-[rgb(29,31,37)]">

            {/* 배너 이미지 */}
            <div className="h-[100px] bg-[rgb(99,99,99)] shadow-ml"></div>

            {/* 프로필 이미지 및 상태 버튼 */}
            <div className="relative">
                {/* 프로필 이미지 */}
                <div className="absolute -top-10 left-4">
                    <div className="relative">
                        <img
                            src={profile}
                            alt="프로필 이미지"
                            className="w-20 h-20 rounded-full border-4 border-[#2b2d31]"
                        />
                        {/* 접속 상태 표시 */}
                        <span className="absolute right-0 bottom-1 w-5 h-5 bg-green-500 border-2 border-[#2b2d31] rounded-full"></span>
                    </div>
                </div>

                {/* 상태 추가 버튼 */}
                <span className="absolute left-24 top-2 bg-gray-700 text-white text-sm px-2 py-1 rounded-full ml-1 shadow-md text-[12px]">
                    오늘 힘듬
                </span>
                <div className="absolute right-9 top-1 text-white text-sm px-2 py-1 rounded-full ml-1 shadow-md text-[12px] translate-x-3 flex">
                    <RiotSvg/>
                    <TftSvg/>
                </div>
            </div>

            {/* 사용자 정보 */}
            <div className="mt-12 px-4 pt-3 text-white rounded-md ml-2 mr-2">
                <div>
                    <p className="text-xl font-bold">고승범</p> {/* 위 간격 추가 */}
                    <p className="text-[12px] text-gray-400">goseungbeom5757</p> {/* 위 간격 추가 */}

                    <div className = "h-[2px] bg-zinc-700 rounded-md w-full mt-2 mb-2"/>
                </div>
            </div>

            {/* 예시 버튼 */}
            <div className="mt-3 px-4 pt-3 pb-4 text-white rounded-md ml-2 mr-2 nav-font">
                <div>
                    <p className="text-[12px] text-gray-200 font-bold">ABOUT ME</p> {/* 위 간격 추가 */}
                    <p className="text-[12px] text-gray-400 mt-2">sadsadsada</p> {/* 위 간격 추가 */}
                </div>

                <div className="mt-2">
                    <p className="text-[12px] text-gray-200 font-bold mb-2">게시글</p> {/* 위 간격 추가 */}
                    <GrassMap posts={postData}/>
                </div>

                <div className="mt-2">
                    <p className="text-[12px] text-gray-200 font-bold">가입일</p> {/* 위 간격 추가 */}
                    <p className="text-[12px] text-gray-400 mt-2">2025.3.25일</p> {/* 위 간격 추가 */}
                </div>
                <div className = "h-[2px] bg-zinc-700 rounded-md w-full mt-2 mb-2"/>

                <div className="mt-2">
                    <p className="text-[12px] text-gray-200 font-bold">칭호</p> {/* 위 간격 추가 */}
                    <p className="text-[12px] text-gray-400 mt-2">...아직 칭호가 없어요</p> {/* 위 간격 추가 */}
                </div>

                <div className="mt-3">
                    <p className="text-[15px] text-white font-bold mb-1">NOTE</p> {/* 위 간격 추가 */}
                    <div className="border-2 border-gray-800 rounded-md px-2 py-2">
                        <p className="text-[12px] text-gray-400">오늘은 끝내자</p> {/* 위 간격 추가 */}
                    </div>
                </div>

            </div>


        </div>
    )
}
