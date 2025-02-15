import React from "react";

const MainHero = () => {
    return (
        <div className="relative flex justify-center items-center bg-gradient-to-r from-purple-700 to-pink-600 rounded-[50px] w-full max-w-5xl mx-auto p-10 text-center text-white shadow-lg">
            {/* 배경과 텍스트 */}
            <div className="max-w-2xl">
                <h1 className="text-5xl font-extrabold">LAUNCH YOUR QUEST</h1>
                <p className="text-lg mt-3">
                    Quests can only be purchased through our sales team. If you're interested in
                    running your first campaign, complete this form to get in touch with our team.
                </p>
                <button className="mt-5 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200">
                    Get Started
                </button>
            </div>

            {/* 좌측 상단 코인 이미지 */}
            <img
                src="/coin.png"
                alt="Coin"
                className="absolute -top-10 -left-10 w-32 rotate-12"
            />

            {/* 우측 하단 프라이팬 이미지 */}
            <img
                src="/pan.png"
                alt="Pan"
                className="absolute -bottom-10 -right-10 w-32 rotate-[30deg]"
            />
        </div>
    );
};

export default MainHero;
