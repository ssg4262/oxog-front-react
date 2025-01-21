import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHome from "./pages/main/MainHome.jsx"; // BrowserRouter로 변경

const App = () => {
    return (
        <Router>
            {/* 라우트 설정 */}
            <Routes>
                <Route path="/" element={<MainHome />} />  {/* component 대신 element 사용 */}
            </Routes>
        </Router>
    );
}

export default App;
