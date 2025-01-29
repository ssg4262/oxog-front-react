import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon, MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { LOLSVGIcon } from "../../assets/svg/LOLSVGIcon.jsx";
import help from "/src/assets/svg/help.svg";
import lightning from "/src/assets/svg/lightning.svg";

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
                        <div className="relative nav-font">
                            <div
                                className="inline-flex items-center rounded-md px-4 py-2 text-white cursor-pointer"
                                onClick={handleDropMenu("record")}
                            >
                                <img src={lightning} className="mr-2" alt="전적" />
                                <span className="text-customGray">전적</span>
                                {dropDownMenu.record ? (
                                    <ChevronUpIcon className="ml-2 h-5 w-5 text-white" />
                                ) : (
                                    <ChevronDownIcon className="ml-2 h-5 w-5 text-white" />
                                )}
                            </div>

                            {/* 드롭다운 메뉴 */}
                            {dropDownMenu.record && (
                                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <div className="flex items-center px-4 py-2 text-gray-900 hover:bg-blue-100">
                                            <LOLSVGIcon className="w-8 h-8 mr-2" />
                                            <span>리그 오브 레전드</span>
                                        </div>
                                        <div className="flex items-center px-4 py-2 text-gray-900 hover:bg-blue-100">
                                            <img
                                                src="https://via.placeholder.com/30"
                                                alt="settings"
                                                className="w-8 h-8 rounded-full mr-2"
                                            />
                                            <span>Settings</span>
                                        </div>
                                        <div className="flex items-center px-4 py-2 text-gray-900 hover:bg-blue-100">
                                            <img
                                                src="https://via.placeholder.com/30"
                                                alt="notifications"
                                                className="w-8 h-8 rounded-full mr-2"
                                            />
                                            <span>Notifications</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* 우측 섹션: 다크모드 버튼과 로그인 버튼 */}
                <div className="flex items-center space-x-4">
                    {/*고객 센터*/}
                    <div className="hover:text-gray-400 focus:outline-none">
                        <button
                            onClick={handleDropMenu("qna")}
                            className="text-white "
                        >
                            {/*<img src={help} alt="전적" />*/}
                        </button>
                        {dropDownMenu.qna && (
                            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <div className="flex items-center px-4 py-2 text-gray-900 hover:bg-blue-100">
                                        <LOLSVGIcon className="w-8 h-8 mr-2" />
                                        <span>리그 오브 레전드</span>
                                    </div>
                                    <div className="flex items-center px-4 py-2 text-gray-900 hover:bg-blue-100">
                                        <img
                                            src="https://via.placeholder.com/30"
                                            alt="settings"
                                            className="w-8 h-8 rounded-full mr-2"
                                        />
                                        <span>Settings</span>
                                    </div>
                                    <div className="flex items-center px-4 py-2 text-gray-900 hover:bg-blue-100">
                                        <img
                                            src="https://via.placeholder.com/30"
                                            alt="notifications"
                                            className="w-8 h-8 rounded-full mr-2"
                                        />
                                        <span>Notifications</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

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
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        로그인
                    </button>
                </div>
            </div>
        </Disclosure>
    );
};

export default MainNavBar;
