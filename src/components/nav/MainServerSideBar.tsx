import React from "react";
import {ServerSidebar} from "@/components/server/server-sidebar";
export const MainServerSideBar = ({
}: {
}) => {

    return(
        <div className="h-screen text-white w-full bg-[rgb(29,31,37)] text-white flex flex-col p-3 font-bold border-r-2 border-[rgb(34,36,42)]">
            <ServerSidebar/>
        </div>
    )
}