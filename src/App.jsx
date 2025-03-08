import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ThemeProvider} from "@material-tailwind/react";
import {indexRouter} from "@/router/indexRouter.jsx";

const App = () => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="oxog-theme"
        >
            <Router>
                {/* 라우트 설정 */}
                <Routes>
                    {indexRouter.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element} />
                    ))}
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
