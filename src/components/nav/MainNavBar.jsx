import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import {Bars3Icon, BellIcon, XMarkIcon} from "@heroicons/react/16/solid/index.js";

const MainNavBar = () => {
    return (
        <Disclosure as="nav" className="bg-mainNav">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-[48px] items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <p className="logo-font text-white">OXOG</p>
                        </div>
                    </div>
                </div>
            </div>
        </Disclosure>
    )
}

export default MainNavBar;