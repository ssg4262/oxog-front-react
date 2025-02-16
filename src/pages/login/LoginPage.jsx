import React from "react";

const LoginPage = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-[#1a2b64] to-[#2043a3] relative overflow-hidden">
            {/* 배경 효과 */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="absolute w-72 h-72 bg-purple-700 rounded-full opacity-30 blur-3xl top-10 left-10"></div>
                <div className="absolute w-64 h-64 bg-blue-500 rounded-full opacity-30 blur-3xl bottom-10 right-10"></div>
            </div>

            {/* 로그인 카드 */}
            <div className="z-10 bg-[#2c2f33] p-10 rounded-xl shadow-2xl flex flex-row w-[800px] h-[440px]">
                {/* 로그인 폼 */}
                <div className="w-2/3 flex flex-col justify-center pr-8 border-r border-gray-700">
                    <h2 className="text-white text-3xl font-extrabold mb-2 text-left">돌아오신 것을 환영해요!</h2>
                    <p className="text-gray-300 text-sm mb-5 text-left">다시 만나서 너무 반가워요!</p>
                    <label className="text-gray-300 text-sm mb-1" htmlFor="email">이메일 또는 전화번호 *</label>
                    <input
                        id="email"
                        type="text"
                        className="w-full p-3 bg-gray-800 text-white rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600"
                    />
                    <label className="text-gray-300 text-sm mb-1" htmlFor="password">비밀번호 *</label>
                    <input
                        id="password"
                        type="password"
                        className="w-full p-3 bg-gray-800 text-white rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600"
                    />
                    <a href="#" className="text-blue-400 text-sm hover:underline mb-4 text-left">
                        비밀번호를 잊으셨나요?
                    </a>
                    <button className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-bold text-lg">
                        로그인
                    </button>
                    <p className="text-gray-400 text-sm mt-4 text-center">
                        계정이 필요하신가요? <a href="#" className="text-blue-400 hover:underline">가입하기</a>
                    </p>
                </div>

                {/* QR 로그인 */}
                <div className="w-1/3 flex flex-col items-center justify-center text-center px-6">
                    <img
                        src="/qr-code.png"
                        alt="QR 코드 로그인"
                        className="w-36 h-36 mb-4 rounded-md shadow-lg"
                    />
                    <h3 className="text-white text-lg font-semibold">QR 코드로 로그인</h3>
                    <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                        Discord 모바일 앱으로 스캔하여 <br/>빠르게 로그인하세요.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
