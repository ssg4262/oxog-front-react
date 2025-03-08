"use client";
import React from "react";
import { ActionTooltip } from "@/components/tooltip/action-tooltip";
import { Img } from "react-image";
import { useNavigate, useParams } from "react-router-dom";
// @ts-ignore
import { cn } from "@/lib/utils.js";

// Props 타입 정의
interface NavigationItemProps {
    id: string;
    imageUrl?: string;
    name: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
                                                                  id,
                                                                  imageUrl,
                                                                  name
                                                              }) => {
    const navigate = useNavigate();
    const params = useParams<{ serverId?: string }>(); // URL 파라미터 타입 지정

    const handleNavigate = (paramId: string) => {
        navigate(`/${paramId}`); // 파라미터를 URL에 포함시켜 이동
    };

    return (
        <ActionTooltip side="right" align="center" label={name}>
            <button
                onClick={() => handleNavigate(id)}
                className="group relative flex items-center"
            >
                <div
                    className={cn(
                        "absolute left-0 rounded-r-full transition-all w-[4px]",
                        params?.serverId !== id && "group-hover:h-[20px]",
                        params?.serverId === id
                            ? "h-[36px] shadow-[0_0_10px_2px_rgba(233,233,233,0.4)] bg-[rgb(255,255,255)]"
                            : "h-[8px] opacity-80",
                        "transition-all duration-300 ease-in-out"
                    )}
                />
                <div
                    className={cn(
                        "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] " +
                        "group-hover:rounded-[16px] transition-all overflow-hidden bg-[rgb(43,45,49)]",
                        params?.serverId === id && "bg-[rgb(43,45,49)] text-white rounded-[16px]"
                    )}
                >
                    {imageUrl ? (
                        <Img src={imageUrl} alt="channel" />
                    ) : (
                        <p>{name}</p>
                    )}
                </div>
            </button>
        </ActionTooltip>
    );
};
