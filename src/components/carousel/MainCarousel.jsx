import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import lol from "../../assets/img/carousel/lol2.png"
const slides = [
    {
        id: 1,
        // title: "리그오브레전드",
        // image: lol,
    },
    {
        id: 2,
        // title: "THE FINALS",
        // image: lol,
        description:
            "Embark partnered with Discord to launch the Skill Issue Quest to build excitement and gameplay for Season 2 of THE FINALS.",
    },
    {
        id: 3,
        // title: "Krunker Strike FRVR",
        // image: lol,
    },
];

const MainCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(1); // 중앙 카드 인덱스

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const imgClick = (val) => {
        setActiveIndex(val)
    }

    return (
        <div className="relative flex flex-col justify-center items-center w-full h-[550px] bg-mainNav">
            {/* 좌측 버튼 */}
            <button
                className="absolute left-10 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full opacity-50 hover:opacity-100 transition"
                onClick={prevSlide}
            >
                <ChevronLeft size={24} />
            </button>

            <div className="flex gap-6">
                {slides.map((slide, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <motion.div
                            key={slide.id}
                            className={`relative rounded-3xl bg-[#2f3136] overflow-hidden transition-all ${
                                isActive ? "w-[350px] h-[450px] scale-110" : "w-[280px] h-[400px] opacity-50"
                            }`}
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                                onClick={() => imgClick(index)}
                            />
                            <div
                                className={`absolute bottom-4 left-4 right-4 text-white ${
                                    isActive ? "opacity-100" : "opacity-0"
                                } transition-opacity`}
                            >
                                <h3 className="text-xl font-bold bg-black/50 px-4 py-2 rounded-lg inline-block">
                                    {slide.title}
                                </h3>
                                {isActive && slide.description && (
                                    <p className="mt-2 text-sm">{slide.description}</p>
                                )}
                            </div>
                            {/* 텍스트 추가 */}
                            {/*<div className="absolute left-1/2 transform -translate-x-1/2 bottom-20 text-white text-lg font-bold">*/}
                            {/*    leagueoflegend*/}
                            {/*</div>*/}
                        </motion.div>
                    );
                })}
            </div>

            {/* 우측 버튼 */}
            <button
                className="absolute right-10 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full opacity-50 hover:opacity-100 transition"
                onClick={nextSlide}
            >
                <ChevronRight size={24} />
            </button>

            {/* 페이징 Dots */}
            <div className="absolute bottom-4 flex space-x-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all ${
                            activeIndex === index ? "bg-white w-5" : "bg-gray-500"
                        }`}
                        onClick={() => imgClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default MainCarousel;
