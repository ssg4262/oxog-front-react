import React from "react";
import { Disclosure, Popover } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon, MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
// @ts-ignore
import lightning from "/src/assets/svg/lightning.svg";
import {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon
} from "@heroicons/react/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

// 드롭다운 상태 타입
interface DropDownState {
    record: boolean;
    qna: boolean;
}

// 메뉴 아이템 타입
interface MenuItem {
    name: string;
    description: string;
    href: string;
    icon: React.ElementType;
}

// 액션 버튼 타입
interface ActionItem {
    name: string;
    href: string;
    icon: React.ElementType;
}

const MainNavBar = () => {
    // 드롭다운 상태
    const [dropDownMenu, setDropDownMenu] = useState<DropDownState>({
        record: false,
        qna: false,
    });

    // 다크모드 상태
    const [darkMode, setDarkMode] = useState<boolean>(true);

    // 드롭다운 토글 핸들러
    const handleDropMenu = (key: keyof DropDownState) => () => {
        setDropDownMenu(prev => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    // 다크모드 토글
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    // 드롭다운 메뉴 리스트
    const products: MenuItem[] = [
        { name: "리그오브레전드", description: "Get a better understanding of your traffic", href: "#", icon: ChartPieIcon },
        { name: "Engagement", description: "Speak directly to your customers", href: "#", icon: CursorArrowRaysIcon },
        { name: "Security", description: "Your customers’ data will be safe and secure", href: "#", icon: FingerPrintIcon },
        { name: "Integrations", description: "Connect with third-party tools", href: "#", icon: SquaresPlusIcon },
        { name: "Automations", description: "Build strategic funnels that will convert", href: "#", icon: ArrowPathIcon },
    ];

    // 액션 버튼 리스트
    const callsToAction: ActionItem[] = [
        { name: "Watch demo", href: "#", icon: PlayCircleIcon },
        { name: "Contact sales", href: "#", icon: PhoneIcon },
    ];

    return (
        <Disclosure as="nav" className="bg-[rgb(28,29,31)] px-4 py-2 h-[35px]">
            {({ open }) => (
                <>
                    <div className="flex items-center justify-between h-full">
                        {/* 로고와 드롭다운 메뉴 */}
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <p className="logo-font text-white">OXOG</p>
                            </div>

                            {/* 드롭다운 메뉴 (왼쪽 마진 48px) */}
                            <div className="hidden md:flex ml-12">
                                <Popover className="relative nav-font">
                                    <Popover.Button
                                        className="inline-flex items-center rounded-md px-4 py-2 mb-1 text-white"
                                        onClick={handleDropMenu("record")}
                                    >
                                        <img src={lightning} className="mr-2" alt="전적" />
                                        <span className="text-customGray text-sm leading-6">전적</span>
                                        {dropDownMenu.record ? (
                                            <ChevronUpIcon className="ml-2 h-5 w-5 text-white" />
                                        ) : (
                                            <ChevronDownIcon className="ml-2 h-5 w-5 text-white" />
                                        )}
                                    </Popover.Button>

                                    <Popover.Panel
                                        className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition"
                                    >
                                        <div className="p-4">
                                            {products.map((item) => (
                                                <div
                                                    key={item.name}
                                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                                >
                                                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                        <item.icon
                                                            aria-hidden="true"
                                                            className="size-6 text-gray-600 group-hover:text-indigo-600"
                                                        />
                                                    </div>
                                                    <div className="flex-auto">
                                                        <a href={item.href} className="block font-semibold text-gray-900">
                                                            {item.name}
                                                            <span className="absolute inset-0" />
                                                        </a>
                                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                            {callsToAction.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                                                >
                                                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </Popover.Panel>
                                </Popover>
                            </div>
                        </div>
                    </div>

                    {/* 모바일 메뉴 */}
                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {products.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700"
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default MainNavBar;
