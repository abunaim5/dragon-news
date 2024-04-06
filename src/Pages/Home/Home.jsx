import AllCategory from "../../components/AllCategory/AllCategory";
import Header from "../../components/Header/Header";
import LatestNews from "../../components/LatestNews/LatestNews";
import NavBar from "../../components/NavBar/NavBar";

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
            <div>
                <AllCategory></AllCategory>
            </div>
        </div>
    );
};

export default Home;