import AllCategory from "../../components/AllCategory/AllCategory";
import Header from "../../components/Header/Header";
import LatestNews from "../../components/LatestNews/LatestNews";
import NavBar from "../../components/NavBar/NavBar";
import RightSideNav from "../../components/RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div>
            <div className="mb-8">
                <Header></Header>
            </div>
            <div className="mb-5">
                <LatestNews></LatestNews>
            </div>
            <div>
                <NavBar></NavBar>
            </div>
            <div className="grid grid-cols-4 gap-6 mt-20">
                <div><AllCategory></AllCategory></div>
                <div className="col-span-2">News comming soon...</div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;