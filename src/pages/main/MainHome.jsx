import MainNavBar from "../../components/nav/MainNavBar.jsx";
import MainSearchBar from "../../components/searchBar/MainSearchBar.jsx";
import UserInfo from "../../components/user/UserInfo.jsx";
import MainFooter from "../../components/footer/MainFooter.jsx";
import RankingInfo from "../../components/ranking/RankingInfo.jsx";
import {MainHeader} from "../../components/header/MainHeader.jsx";
import ServerCreationCard from "../../components/card/ServerCreationCard.jsx";
import CommunityCard from "../../components/card/CommunityCard.jsx";
import MessageCard from "../../components/card/MessageCard.jsx";
import SearchBarCard from "../../components/card/SearchBarCard.jsx";
import QuestSuccessStories from "../../components/carousel/MainCarousel.jsx";
import MainCarousel from "../../components/carousel/MainCarousel.jsx";
const MainHome = () => {
    return (
        <>
            <div className="bg-mainNav">
                {/*navbar*/}
                <MainNavBar />
                {/*<MainHeader/>*/}
                {/*navbar*/}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                    {/* First and Second Columns: SearchBarCard */}
                    <div className="col-span-2 sm:col-span-2 lg:col-span-2">
                        <MainCarousel />
                    </div>

                    {/* Rightmost Column: UserInfo */}
                    <div className="col-span-1 sm:col-span-1 lg:col-span-1">
                        <div className="flex flex-col items-end mr-10">
                            <div className="max-w-[320px]">
                                <UserInfo />
                            </div>
                            <div className="max-w-[320px] mt-4">
                                <MessageCard />
                            </div>
                        </div>
                    </div>
                </div>


                {/* searchBar*/}
                <div className="mt-5">
                    <CommunityCard/>
                </div>
                {/* searchBar*/}
                {/*footer*/}
                <div className="mt-20">
                <MainFooter/>
                </div>
            </div>

        </>
    )
}

export default MainHome;