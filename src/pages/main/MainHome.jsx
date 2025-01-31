import MainNavBar from "../../components/nav/MainNavBar.jsx";
import MainSearchBar from "../../components/searchBar/MainSearchBar.jsx";
import UserInfo from "../../components/user/UserInfo.jsx";
const MainHome = () => {
    return (
        <>
            <div className="bg-mainNav">
                {/*navbar*/}
                <MainNavBar />
                {/*navbar*/}
                <div className="mt-5 flex justify-end mr-[60px]">
                <UserInfo/>
                </div>
                {/* searchBar*/}
                <div className="mt-5">
                    <MainSearchBar/>
                </div>
                {/* searchBar*/}
            </div>

        </>
    )
}

export default MainHome;