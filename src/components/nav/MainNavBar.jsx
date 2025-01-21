import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import {Bars3Icon, BellIcon, XMarkIcon} from "@heroicons/react/16/solid/index.js";

const MainNavBar = () => {
    return (
        <Disclosure as="nav" className="bg-mainNav">
                <div className="relative flex h-[48px] items-center justify-between">
                        <div className="flex items-center">
                            <p className="logo-font text-white">OXOG</p>
                        </div>
                </div>
        </Disclosure>
    )
}

export default MainNavBar;