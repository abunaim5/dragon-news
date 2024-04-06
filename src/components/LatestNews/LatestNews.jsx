import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="bg-[#F3F3F3] p-4 flex items-center">
            <button className="btn w-auto h-auto min-h-max text-xl text-white font-medium bg-[#D72050] py-2 px-6 rounded-none">Latest</button>
            <span className="text-lg font-semibold text-[#403F3F]">
                <Marquee>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </span>
        </div>
    );
};

export default LatestNews;