import React from "react";
import {RecordPick} from "@/components/record/record-pick";

export const RecordMain = () => { // 전적검색 페이지
    return (
        <div
            className="space-y-4 flex flex-col
            h-screen text-white w-full bg-[rgb(28,29,31)]
            py-3"
        >
            <RecordPick/>
        </div>
    );
};
