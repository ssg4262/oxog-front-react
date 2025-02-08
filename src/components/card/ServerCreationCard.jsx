import React from "react";

const categories = [
    { id: 1, icon: "🎮", title: "게임" },
    { id: 2, icon: "🏫", title: "학교 클럽" },
    { id: 3, icon: "🎓", title: "스터디 그룹" },
    { id: 4, icon: "👥", title: "친구" },
    { id: 5, icon: "🎨", title: "아티스트 및 크리에이터" },
    { id: 6, icon: "📍", title: "로컬 커뮤니티" },
    { id: 7, icon: "🏘️", title: "지역 모임" },
    { id: 8, icon: "💻", title: "코딩 클럽" },
    { id: 9, icon: "🎵", title: "음악" },
];

const ServerCreationCard = () => {
    return (
        <div className="bg-[#202225] min-h-screen flex justify-center items-center">
            <div className="w-[440px] bg-[#2f3136] p-8 rounded-2xl shadow-xl">
                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-white text-3xl font-bold mb-2">
                        서버를 만들어보세요
                    </h1>
                    <p className="text-gray-400 text-sm leading-6">
                        서버는 나와 친구들이 함께 어울리는 공간입니다.
                        내 서버를 만들고 대화를 시작해보세요.
                    </p>
                </div>

                {/* Direct Creation */}
                <div className="mt-6">
                    <div className="flex items-center bg-[#36393f] p-4 rounded-lg hover:bg-[#4f545c] cursor-pointer">
                        <div className="w-12 h-12 bg-[#4f545c] rounded-full flex justify-center items-center text-2xl">
                            🌍
                        </div>
                        <p className="text-white ml-4 font-medium">직접 만들기</p>
                        <div className="ml-auto text-gray-400 text-2xl">›</div>
                    </div>
                </div>

                {/* Scrollable Template Section */}
                <div className="mt-6 max-h-[300px] overflow-y-auto space-y-3 scrollbar-hide">
                    <p className="text-gray-400 text-sm mb-3 sticky top-0 bg-[#2f3136] z-10">
                        템플릿으로 시작
                    </p>
                    {categories.map(({ id, icon, title }) => (
                        <div
                            key={id}
                            className="flex items-center bg-[#36393f] p-4 rounded-lg hover:bg-[#4f545c] cursor-pointer"
                        >
                            <div className="w-12 h-12 bg-[#4f545c] rounded-full flex justify-center items-center text-2xl">
                                {icon}
                            </div>
                            <p className="text-white ml-4 font-medium">{title}</p>
                            <div className="ml-auto text-gray-400 text-2xl">›</div>
                        </div>
                    ))}
                </div>

                {/* Join Server Section */}
                <div className="mt-8 text-center">
                    <p className="text-gray-400 mb-4">이미 초대장을 받으셨나요?</p>
                    <button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-3 rounded-full w-full font-semibold">
                        서버 참가하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServerCreationCard;
