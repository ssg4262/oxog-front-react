import MainNavBar from "../../components/nav/MainNavBar.jsx";
import MainSearchBar from "../../components/searchBar/MainSearchBar.jsx";
import UserInfo from "../../components/user/UserInfo.jsx";
import MainFooter from "../../components/footer/MainFooter.jsx";
import RankingInfo from "../../components/ranking/RankingInfo.jsx";
import {MainHeader} from "../../components/header/MainHeader.jsx";
import ServerCreationCard from "../../components/card/ServerCreationCard.jsx";
import CommunityCard from "../../components/card/CommunityCard.jsx";
import MessageCard from "../../components/card/MessageCard.jsx";
const MainHome = () => {
    return (
        <>
            <div className="bg-mainNav">
                {/*navbar*/}
                <MainNavBar />
                {/*<MainHeader/>*/}
                {/*navbar*/}
                <div className="mt-5 flex flex-col items-end mr-10">
                    <div className="max-w-[330px]">
                        <UserInfo />
                    </div>
                    <div className="max-w-[310px] mt-4">
                        <MessageCard />
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