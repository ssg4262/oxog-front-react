import React from "react";
import {ServerSidebar} from "@/components/server/server-sidebar";
export const MainServerSideBar = ({
}: {
}) => {

    return(
        <div className="h-screen text-white w-full bg-[#2B2D31] text-white flex flex-col p-3 font-bold">
            <ServerSidebar/>
        </div>
    )
}