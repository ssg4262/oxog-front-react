import React from "react";

const LoginPage = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-mainNav relative overflow-hidden">
            {/* 배경 효과 */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="absolute w-72 h-72 bg-[#3b4cca] rounded-full opacity-30 blur-3xl top-10 left-10"></div>
                <div className="absolute w-64 h-64 bg-[#7289DA] rounded-full opacity-30 blur-3xl bottom-10 right-10"></div>
            </div>

            {/* 로그인 카드 */}
            <div className="z-10 bg-[#36393F] p-8 rounded-lg shadow-2xl flex flex-row w-[800px] h-[440px]">
                {/* 로그인 폼 */}
                <div className="w-2/3 flex flex-col justify-center pr-8 border-r border-gray-600">
                    <p className="login-logo-font text-white mb-3">OXOG</p>
                    <h2 className="text-white text-2xl font-bold mb-1">돌아오신 것을 환영해요!</h2>
                    <p className="text-gray-400 text-sm mb-5">다시 만나서 너무 반가워요!</p>

                    <label className="text-gray-300 text-xs font-semibold mb-1" htmlFor="email">이메일 또는 전화번호 *</label>
                    <input
                        id="email"
                        type="text"
                        className="w-full p-3 bg-[#202225] text-white rounded-sm mb-4 focus:outline-none focus:ring-2 focus:ring-[#5865F2] border border-gray-600"
                    />

                    <label className="text-gray-300 text-xs font-semibold mb-1" htmlFor="password">비밀번호 *</label>
                    <input
                        id="password"
                        type="password"
                        className="w-full p-3 bg-[#202225] text-white rounded-sm mb-2 focus:outline-none focus:ring-2 focus:ring-[#5865F2] border border-gray-600"
                    />

                    <a href="#" className="text-[#5865F2] text-xs hover:underline mb-5">비밀번호를 잊으셨나요?</a>

                    <button className="w-full p-3 bg-[#5865F2] hover:bg-[#4752c4] text-white rounded-sm font-bold">
                        로그인
                    </button>

                    <p className="text-gray-400 text-xs mt-4">
                        계정이 필요하신가요? <a href="#" className="text-[#5865F2] hover:underline">가입하기</a>
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
                    <p className="text-gray-400 text-xs mt-2 leading-tight">
                        스캔하여 빠르게 로그인하세요.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
