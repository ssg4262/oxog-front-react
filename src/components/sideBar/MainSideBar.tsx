"use client"
import React from "react";
import {NavigationAction} from "@/components/navigation/navigation-action";
// @ts-ignore
import {ScrollArea} from "@/components/ui/scroll-area.jsx";
import {useState} from "react";
import {NavigationItem} from "@/components/navigation/navigation-item";
// @ts-ignore
import profile from '@/assets/img/profile/profile.png'
import {NavigationExplorer} from "@/components/navigation/navigation-explorer";
import {NavigationThreads} from "@/components/navigation/navigation-threads";

export const MainSideBar = () => {
    const [servers, setServers] = useState([{
        id:'1' , name:'고승범',imageUrl:profile
    }, {
        id:'2' , name:'고승범2',imageUrl:null
    }
    ]);
    return(
        <div
            className="space-y-4 flex flex-col items-center
            h-full text-white w-full bg-[rgb(28,29,31)]
            py-3"
        >
            {/*서버추가버튼*/}
            <NavigationAction/>
            <div className = "h-[2px] bg-zinc-700 rounded-md w-10 mx-auto"/>
            <ScrollArea className="flex-1 w-full">
                {servers.map((server) => (
                    <div key={server.id} className="mb-4">
                        <NavigationItem
                         id = {server.id}
                         name = {server.name}
                         imageUrl={server.imageUrl}
                        />
                    </div>
                ))}
            </ScrollArea>
            <div className="pb-3 mt-auto flex
            items-center flex-col gap-y-4">
                <NavigationExplorer/>
                <NavigationThreads/>
            </div>
        </div>
    )
}

