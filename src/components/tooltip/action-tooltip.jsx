"use client"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip.jsx";

export const ActionTooltip = ({
                                  label,
                                  children,
                                  side,
                                  align
                              }) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={50}>
                <div className="flex items-center space-x-2"> {/* Flexbox로 자식 요소들을 나란히 배치 */}
                    <TooltipTrigger asChild>
                        {children}
                    </TooltipTrigger>
                    <TooltipContent side={side} align={align} className="bg-gray-800 text-white p-2 rounded-lg shadow-lg">
                        <p className="font-semibold text-sm capitalize">
                            {label.toLowerCase()}
                        </p>
                    </TooltipContent>
                </div>
            </Tooltip>
        </TooltipProvider>
    );
};
