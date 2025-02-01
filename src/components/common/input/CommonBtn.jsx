
const CommonBtn = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-full bg-[#5865F2] text-white text-sm font-medium py-2 px-4 rounded-lg shadow-md hover:bg-[#4752C4] active:scale-95 transition-transform duration-150"
        >
            {text}
        </button>
    );
};

export default CommonBtn