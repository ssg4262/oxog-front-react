import React from "react";

interface LogoCharacterSvgProps {
    size?: number;
    isCircle?: boolean;
}

export const LogoCharacterSvg: React.FC<LogoCharacterSvgProps> = ({ size = 200, isCircle = false }) => {
    return (
        <div className="glow-wrapper" style={{ width: size, height: size }}>
            <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                style={{ borderRadius: isCircle ? "50%" : "0" }}
            >
                {/* 배경색 설정 */}
                <rect width="200" height="200" fill="#2DA8D8" />

                {/* 사각형 또는 원형 추가 */}
                <rect x="70" y="75" width="10" height="20" fill="#004466" />
                <rect x="120" y="75" width="10" height="20" fill="#004466" />
                <rect x="82" y="140" width="6" height="6" fill="#004466" />
                <rect x="92" y="140" width="6" height="6" fill="#004466" />
                <rect x="102" y="140" width="6" height="6" fill="#004466" />
                <rect x="112" y="140" width="6" height="6" fill="#004466" />
            </svg>

            {/* 항상 강한 빛을 내도록 설정 */}
            <style>
                {`
                    .glow-wrapper {
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .glow-wrapper::before {
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        box-shadow: 0 0 60px rgba(88, 204, 242, 1),
                                    0 0 120px rgba(88, 204, 242, 0.9),
                                    0 0 180px rgba(88, 204, 242, 0.7);
                    }
                `}
            </style>
        </div>
    );
};
