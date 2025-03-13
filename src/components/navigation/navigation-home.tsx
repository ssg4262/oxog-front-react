"use client"
import React from "react";
import {Home} from "lucide-react"
import {ActionTooltip} from "@/components/tooltip/action-tooltip";
import {LogoCharacterSvg} from "@/assets/img/main/logo-character-svg";
export const NavigationHome = () => {
    return (
        <ActionTooltip
            side="right"
            align="center"
            label="Home으로 ..."
        >
            <button
                className="group flex items-center"
            >
                <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px]
                group-hover:rounded-[16px] transition-all
                overflow-hidden items-center justify-center
                bg-[rgb(43,45,49)]
                group-hover:bg-[rgb(99,99,99)]">
                    <Home
                    />
                </div>
            </button>
        </ActionTooltip>
    )
}