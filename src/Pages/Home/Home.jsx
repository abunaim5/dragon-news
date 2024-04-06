import Header from "../../components/Header/Header";
import LatestNews from "../../components/LatestNews/LatestNews";

const Home = () => {
    return (
        <div>
            <div className="mb-8">
                <Header></Header>
            </div>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;