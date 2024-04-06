import { FaRegBookmark, FaStar, FaEye } from "react-icons/fa";
import { MdOutlineShare } from "react-icons/md";

const NewsCard = () => {
    return (
        <div className="border border-[#F3F3F3] rounded-md">
            <div className="flex items-center justify-between bg-[#F3F3F3] p-5">
                <div className="flex items-center gap-2">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-[#403F3F]">John Doe</h3>
                        <p className="text-sm text-[#706F6F]">2022-08-21</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-2xl text-[#706F6F]">
                    <span><FaRegBookmark /></span><span><MdOutlineShare /></span>
                </div>
            </div>
            <div className="p-5">
                <div>
                    <h2 className="text-xl font-bold text-[#403F3F] mb-4">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
                    <img className="mb-8" src="" alt="" />
                    <p className="border-b pb-5">Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a...</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p className="inline-flex gap-1 items-center text-[#FF8C47]"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> <span className="text-[#706F6F] ml-2">4.9</span></p>
                    <p className="inline-flex gap-1 items-center text-[#706F6F]"><FaEye /> <span className="ml-2">499</span></p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;