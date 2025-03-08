"use client"
import React from "react";
import {Users} from "lucide-react"
import {ActionTooltip} from "@/components/tooltip/action-tooltip";
export const NavigationExplorer = () => {
    return (
        <ActionTooltip
            side="right"
            align="center"
            label="커뮤니티 바로가기"
        >
            <button
                className="group flex items-center"
            >
                <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px]
                group-hover:rounded-[16px] transition-all
                overflow-hidden items-center justify-center
                bg-[rgb(43,45,49)]
                group-hover:bg-[rgb(99,99,99)]">
                    <Users
                        className = "group-hover:text-white trasition text-[rgb(255,255,255)]"
                    />
                </div>
            </button>
        </ActionTooltip>
    )
}