import MainHome from "@/pages/main/MainHome.tsx";

export const mainRouter = [
    { path: "/", element: <MainHome /> },
    { path: "/:serverId", element: <MainHome /> }
]