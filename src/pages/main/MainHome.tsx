import React from "react";
import {MainSideBar} from "@/components/sideBar/MainSideBar";
import {MainNavBar} from "@/components/nav/MainNavBar";
import {MainServerSideBar} from "@/components/nav/MainServerSideBar";
import {RecordMain} from "@/components/record/RecordMain";
import {UserInfo} from "@/components/user/user-info";
import {UserMain} from "@/components/user/UserMain";

export const MainHome = () => {
    return (
        <div className="flex flex-col h-screen bg-[rgb(43,45,49)] nav-font overflow-hidden">
            {/* 상단 네비게이션 바 */}
            <header className="sticky top-0 w-full z-50 h-[35px] flex-shrink-0">
                <MainNavBar />
            </header>

            {/* 전체 레이아웃 컨테이너 */}
            <div className="flex flex-1 overflow-hidden">
                {/* 왼쪽 사이드바 */}
                <aside className="hidden md:flex w-[72px] flex-col z-30">
                    <MainSideBar />
                </aside>

                {/* 서버 사이드바 */}
                <aside className="hidden md:flex w-72 flex-col">
                    <MainServerSideBar />
                </aside>

                {/* 메인 콘텐츠 영역 - 남은 공간을 차지 */}
                <main className="flex-1 flex flex-col h-[calc(100vh-35px)] overflow-hidden">
                    {/*<RecordMain />*/}
                </main>
                <div className="flex">
                    <UserMain/>
                </div>
            </div>
        </div>
    );
};

