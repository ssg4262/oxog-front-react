import {mainRouter} from "@/router/main/mainRouter.jsx";
import {loginRouter} from "@/router/main/loginRouter.jsx";

export const indexRouter = [
    ...mainRouter,
    ...loginRouter
];