import {Disclosure, Popover} from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon, MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import login from "/src/assets/svg/login.svg";
import lightning from "/src/assets/svg/lightning.svg";
import {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon
} from "@heroicons/react/24/outline/index.js";
import {PhoneIcon, PlayCircleIcon} from "@heroicons/react/20/solid/index.js";

const MainNavBar = () => {
    const [dropDownMenu, setDropDownMenu] = useState({
        record: false,
        qna: false,
    });
    const [darkMode, setDarkMode] = useState(true);

    const handleDropMenu = (key) => () => {
        const payload = {
            ...dropDownMenu,
            [key]: !dropDownMenu[key],
        };
        setDropDownMenu(payload);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    const products = [
        { name: '리그오브레전드', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
        { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
        { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
        { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
        { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    ]
    const callsToAction = [
        { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
        { name: 'Contact sales', href: '#', icon: PhoneIcon },
    ]

    return (
        <Disclosure as="nav" className="bg-mainNav px-4 py-2 h-[48px]">
            <div className="flex items-center justify-between h-full">
                {/* 로고와 드롭다운 메뉴 */}
                <div className="flex items-center">
                    <div className="flex items-center">
                        <p className="logo-font text-white">OXOG</p>
                    </div>

                    {/* 드롭다운 메뉴 (왼쪽 마진 48px) */}
                    <div className="ml-12">
                        <Popover className="relative nav-font">
                            <Popover.Button
                                className="inline-flex items-center rounded-md px-4 py-2 text-white"
                                onClick={handleDropMenu('record')}
                            >
                                <img src={lightning} className="mr-2" alt="전적" />
                                <span className="text-customGray">전적</span>
                                {dropDownMenu.record ? (
                                    <ChevronUpIcon className="ml-2 h-5 w-5 text-white" />
                                ) : (
                                    <ChevronDownIcon className="ml-2 h-5 w-5 text-white" />
                                )}
                            </Popover.Button>

                            <Popover.Panel
                                className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
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

                {/* 우측 섹션: 다크모드 버튼과 로그인 버튼 */}
                <div className="flex items-center space-x-4">
                    {/*고객 센터*/}
                    {/*<div className="hover:text-gray-400 focus:outline-none">*/}
                    {/*    <button*/}
                    {/*        onClick={handleDropMenu("qna")}*/}
                    {/*        className="text-white "*/}
                    {/*    >*/}
                    {/*        <img src={help} className="h-6 w-6"  alt="고객센터" />*/}
                    {/*    </button>*/}
                    {/*    {dropDownMenu.qna && (*/}
                    {/*        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">*/}
                    {/*            <div className="py-1">*/}
                    {/*                <div className="flex items-center px-4 py-2 text-gray-900 hover:bg-blue-100">*/}
                    {/*                    <span>1:1 문의하기</span>*/}
                    {/*                </div>*/}
                    {/*                <div className="flex items-center px-4 py-2 text-gray-900 hover:bg-blue-100">*/}
                    {/*                    <span>도움말 및 지원</span>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    )}*/}
                    {/*</div>*/}

                    {/* 다크모드 버튼 */}
                    <button
                        onClick={toggleDarkMode}
                        className="text-white hover:text-gray-400 focus:outline-none"
                    >
                        {darkMode ? (
                            <SunIcon className="h-6 w-6" />
                        ) : (
                            <MoonIcon className="h-6 w-6" />
                        )}
                    </button>

                    {/* 로그인 버튼 */}
                    <div className="flex items-center gap-0.5">
                        <img src={login} className="w-6 h-6" alt="로그인" />
                        <button className="bg-mainNav text-white rounded-lg flex items-center">
                            <span className="text-customGray">로그인</span>
                        </button>
                    </div>
                </div>
            </div>
        </Disclosure>
    );
};

export default MainNavBar;
