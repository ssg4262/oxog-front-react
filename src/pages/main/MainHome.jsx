import MainNavBar from "../../components/nav/MainNavBar.jsx";
import MainSearchBar from "../../components/searchBar/MainSearchBar.jsx";
import UserInfo from "../../components/user/UserInfo.jsx";
import MainFooter from "../../components/footer/MainFooter.jsx";
import RankingInfo from "../../components/ranking/RankingInfo.jsx";
const MainHome = () => {
    return (
        <>
            <div className="bg-mainNav">
                {/*navbar*/}
                <MainNavBar />
                {/*navbar*/}
                <div className="mt-5 flex justify-end mr-10 md:mr-[50px] space-x-5">
                    <RankingInfo/>
                    <UserInfo/>
                </div>
                {/* searchBar*/}
                <div className="mt-5">
                    <MainSearchBar/>
                </div>
                {/* searchBar*/}
                {/*footer*/}
                <MainFooter/>
            </div>

        </>
    )
}

export default MainHome;