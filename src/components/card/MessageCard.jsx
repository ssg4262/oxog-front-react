import { useState } from "react";
import profile from "../../assets/img/profile/profile.png"
import searchIcon from "../../assets/svg/search.svg";
import peopleAdd from "../../assets/img/peopleAdd.png"

const messages = [
    { id: 1, name: "송알찬", message: "https://discord.gg/W9hkkAVy", time: "4mo", avatar: profile, status: "online" },
    { id: 2, name: "Discord", message: "이제 Discord에서 식별 번호가 들어간 사용자...", time: "11mo", avatar: profile, verified: true, status: "system" },
    { id: 3, name: "기미녕, 송알찬", message: "정말귀여운아기고양이 님이 그룹에서 강...", time: "1y", avatar: profile, status: "online" },
    { id: 4, name: "정말귀여운아기고양이", message: "나: 초대 ㅠ", time: "3y", avatar: profile, status: "offline" },
    { id: 5, name: "hyeop23", message: "들어오나", time: "3y", avatar: profile, status: "offline" },
    { id: 6, name: "와카라나이요", message: "https://discord.gg/RpWFsSf8", time: "3y", avatar: profile, status: "online" },
];

const MessageCard = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="bg-[rgb(32,33,36)] text-white h-[650px] p-4 max-w-md mx-auto relative flex flex-col">
            <div className="flex justify-between items-center mb-3">
                <p className="text-lg font-bold">메시지</p>
                <button className="bg-[rgb(36,39,45)] text-white px-2 py-1.5 rounded-full text-xs flex items-center gap-1 shadow-md">
                    <span className="text-xs font-bold"><img src={peopleAdd} className="mr-2 w-4 h-4" alt="친구 추가" /></span> 친구 추가하기
                </button>
            </div>

            <div className="relative mb-4 group">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-base transition-transform duration-200 ease-out group-hover:-translate-y-1">
                    <img src={searchIcon} className="w-4 h-4 transition-transform duration-200 ease-out group-hover:-translate-y-1" alt="검색" />
                </span>
                <input
                    className="w-full pl-10 pr-4 py-1.5 bg-[rgb(30,31,34)] text-white placeholder-gray-400 rounded-full border-none focus:ring-0 shadow-inner text-sm cursor-pointer transition-transform duration-200 ease-out group-hover:-translate-y-1"
                    placeholder="검색하기"
                    disabled={true}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
                {messages.slice(0, 3).map(({ id, avatar ,status}) => (
                    <div key={id} className="w-14 h-14 bg-[rgb(49,51,55)] rounded-xl flex items-center justify-center relative shadow-lg">
                        <img src={avatar} alt="User" className="rounded-xl cursor-pointer" />
                        <span
                            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-800 ${status === "online" ? "bg-green-500" : status === "offline" ? "bg-gray-500" : "bg-blue-400"}`}>
                        </span>
                    </div>
                ))}
            </div>

            <div className="space-y-2 mt-3 flex-1 overflow-y-auto max-h-[400px]">
                {messages.filter(m => m.name.includes(search)).map(({ id, name, message, time, avatar, verified, status }) => (
                    <div key={id} className="flex items-center gap-3 p-3 bg-[rgb(43,45,49)] rounded-lg relative cursor-pointer hover:bg-[#4752C4]">
                        <div className="relative">
                            <img src={avatar} alt={name} className="w-12 h-12 rounded-full border-2 border-gray-700" />
                            <span
                                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-800 ${status === "online" ? "bg-green-500" : status === "offline" ? "bg-gray-500" : "bg-blue-400"}`}>
                            </span>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-1">
                                <span className="font-medium text-sm">{name}</span>
                                {verified && <span className="text-blue-400 text-xs bg-gray-700 px-2 py-0.5 rounded-full">시스템</span>}
                            </div>
                            <p className="text-gray-400 text-xs truncate w-40">{message}</p>
                        </div>
                        <span className="text-gray-500 text-xs">{time}</span>
                    </div>
                ))}
            </div>

            <button className="absolute bottom-4 right-4 bg-[rgb(91,101,234)] text-white w-12 h-12 flex items-center justify-center rounded-full  text-lg font-bold">
                ➕
            </button>
        </div>
    );
}

export default MessageCard;
