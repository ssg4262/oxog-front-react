import React from "react";
import { useState } from "react";
import { Search, User, ShoppingBag, Plus, Mic, Headphones, Settings, MoreVertical,Flame } from "lucide-react";
// @ts-ignore
import lightning from "@/assets/svg/lightning.svg";

const users = [
    { name: "송알찬", avatar: "/avatars/green.png", online: true },
    { name: "Discord", avatar: "/avatars/discord.png", official: true },
    { name: "송알찬, 기미녕", avatar: "/avatars/group.png", members: 3 },
    { name: "정말귀여운아기고양이", avatar: "/avatars/cat.png", online: false },
    { name: "hyeop23", avatar: "/avatars/red.png", online: false },
    { name: "고승범님의 그룹", avatar: "/avatars/group2.png", members: 11 },
    { name: "짱구스님", avatar: "/avatars/pink.png", online: false },
    { name: "왕가위", avatar: "/avatars/rose.png", online: true },
    { name: "엄핑", avatar: "/avatars/random.png", online: false },
];

const MainMenu = [
    { name: "전적", icon: lightning},
    { name: "커뮤니티", icon: Flame},
    { name: "친구", icon: ShoppingBag},
    { name: "DUO", icon: ShoppingBag},
]

export const ServerSidebar = () => {
    const [search, setSearch] = useState<string>('');
    const [msgSelect,setMsgSelect] = useState<String>('');


    return (
        <>
            <div className="relative mb-2">
                <Search className="absolute left-3 top-2 text-gray-400 w-4 h-4" />
                <input
                    type="text"
                    placeholder="대화 찾기 또는 시작하기"
                    className="w-full bg-[#1E1F22] rounded-md pl-10 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    value={search}
                    readOnly
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* 상단 메뉴 */}
            <div className="space-y-1">
                {MainMenu.map((menu, idx) => (
                    <button className={`flex items-center space-x-3 p-3 rounded-md transition w-full 
                        ${msgSelect === menu.name ? "bg-[#3B3E43]" : ""} 
                        hover:bg-[#3B3E43]`}
                    onClick={() => setMsgSelect(menu.name)}
                    >
                    {/*<User className="w-5 h-5 text-gray-300" />*/}
                        <img src={menu.icon} alt={menu.name} />
                        <span className="text-sm text-gray-300">{menu.name}</span>
                    </button>
                ))}
            </div>

            {/* 다이렉트 메시지 목록 */}
            <div className="mt-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 max-h-[455px]">
                <div className="flex items-center justify-between px-2 text-gray-400 text-xs mb-2">
                    <span>대화 중 메시지</span>
                    <Plus className="w-4 h-4 cursor-pointer hover:text-white transition-all duration-200" />
                </div>
                {users.map((user, idx) => (
                    <div key={idx}
                         className={`flex items-center space-x-3 p-3 rounded-md cursor-pointer transition-all duration-200 relative 
                         ${msgSelect === idx.toString() ? "bg-[#3B3E43]" : ""} 
                         hover:bg-[#3B3E43]`}
                         onClick={() => setMsgSelect(idx.toString())}
                    >
                        <div className="relative">
                            <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                            {/* 온라인 상태 표시 */}
                            {user.online !== undefined && (
                                <div
                                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#2B2D31] transition-all duration-300 ${
                                        user.online ? "bg-green-500" : "bg-gray-500"
                                    }`}
                                />
                            )}
                        </div>
                        <div className="flex-1">
                            <span className="text-sm">{user.name}</span>
                            {user.members ? (
                                <p className="text-xs text-gray-400">멤버 {user.members}명</p>
                            ) : (
                                <p className={`text-xs ${user.online ? "text-green-400" : "text-gray-400"}`}>
                                    {user.online ? "온라인" : "오프라인"}
                                </p>
                            )}
                        </div>
                        {user.official && (
                            <span className="ml-auto bg-blue-500 text-xs px-2 py-1 rounded-md">공식</span>
                        )}
                        {/*<MoreVertical className="w-4 h-4 text-gray-400 hover:text-white transition-all duration-200 absolute right-3 top-4 cursor-pointer" />*/}
                    </div>
                ))}
            </div>

            {/* 현재 사용자 */}
            <div className="flex items-center space-x-3 p-3 bg-[#1E1F22] rounded-lg mt-3">
                <div className="relative">
                    <img
                        src="/avatars/user.png"
                        alt="고승범"
                        className="w-10 h-10 rounded-full border-2 border-gray-500"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#1E1F22] bg-gray-500 transition-all duration-300" />
                </div>
                <div className="flex-1">
                    <p className="text-sm font-semibold">고승범</p>
                    <p className="text-xs text-gray-400">오프라인 표시</p>
                </div>
                <div className="flex space-x-2">
                    <Mic className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-all duration-200" />
                    <Headphones className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-all duration-200" />
                    <Settings className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-all duration-200" />
                </div>
            </div>
        </>
    );
};

