import profile from "../../assets/img/profile/profile.png"
import setting from "../../assets/svg/setting.svg";
const userInfo = () => {
    return(
        <div className="w-[300px] bg-[#2b2d31] rounded-xl shadow-lg overflow-hidden">

            {/* 배너 이미지 */}
            <div className="h-[120px] bg-purple-400"></div>

            {/* 프로필 이미지 및 상태 버튼 */}
            <div className="relative">
                {/* 프로필 이미지 */}
                <div className="absolute -top-10 left-4">
                    <div className="relative">
                        <img
                            src={profile}
                            alt="프로필 이미지"
                            className="w-20 h-20 rounded-full border-4 border-[#2b2d31]"
                        />
                        {/* 접속 상태 표시 */}
                        <span className="absolute right-0 bottom-1 w-5 h-5 bg-green-500 border-2 border-[#2b2d31] rounded-full"></span>
                    </div>
                </div>

                {/* 상태 추가 버튼 */}
                <span className="absolute left-24 top-2 bg-gray-700 text-white text-sm px-2 py-1 rounded-full ml-1 shadow-md">
                    오늘 힘듬
                </span>
            </div>

            {/* 사용자 정보 */}
            <div className="mt-12 px-4 text-white">
                <p className="text-xl font-bold">고승범</p>
                <p className="text-sm text-gray-400">goseungbeom5757</p>
            </div>

            {/* 예시 버튼 */}
            <div className="relative p-6">
                <img
                    src={setting}
                    className="absolute right-4 top-4 w-9 h-6 cursor-pointer"
                    alt="전적"
                />
            </div>
        </div>
    )
}

export default userInfo