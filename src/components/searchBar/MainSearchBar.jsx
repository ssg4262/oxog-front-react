import {useState} from "react";

const MainSearchBar = () => {
    const [domainName, setDomainName] = useState('');
    const [extension, setExtension] = useState('Korea');

    const handleSearch = () => {
        console.log(`Searching for: ${domainName}.${extension}`);
        // 여기에 검색 로직 추가 (예: API 호출)
    };

    return (
        <div className="min-h-screen items-center">
            <div className="container mx-auto rounded-lg p-14 w-full h-[266px]">
                <div>
                    {/*<h1 className="text-center font-bold text-white text-4xl">*/}
                    {/*    OXOG*/}
                    {/*</h1>*/}
                    <p className="mx-auto font-normal text-sm my-6 max-w-lg">

                    </p>
                    <div className="sm:flex items-center bg-searchBarInput rounded-lg overflow-hidden px-2 py-1 justify-between">
                        {/* 도메인 이름 입력 필드 */}
                        <input
                            type="text"
                            value={domainName}
                            onChange={(e) => setDomainName(e.target.value)}
                            placeholder="플레이어 이름 + chips"
                            className="bg-searchBarInput text-base text-gray-400 flex-grow outline-none px-2"
                        />
                        <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto">
                            {/* 확장자 선택 드롭다운 */}
                            <select
                                id="Com"
                                value={extension}
                                onChange={(e) => setExtension(e.target.value)}
                                className="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg"
                            >
                                <option value="com">.Korea</option>
                                <option value="net">.net</option>
                                <option value="org">.org</option>
                                <option value="io">.io</option>
                            </select>
                            {/* 검색 버튼 */}
                            <button
                                onClick={handleSearch}
                                className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MainSearchBar;