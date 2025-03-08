import {MainHome} from "@/pages/main/MainHome";

export const mainRouter = [
    { path: "/", element: <MainHome /> },
    { path: "/:serverId", element: <MainHome /> }
]