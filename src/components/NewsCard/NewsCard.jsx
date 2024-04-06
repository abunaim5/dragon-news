import { FaRegBookmark, FaStar, FaEye } from "react-icons/fa";
import { MdOutlineShare } from "react-icons/md";
import PropTypes from 'prop-types'

const NewsCard = ({ singleNews }) => {
    const { author, image_url, details, title, total_view, rating } = singleNews;

    return (
        <div className="border border-[#F3F3F3] rounded-md">
            <div className="flex items-center justify-between bg-[#F3F3F3] p-5">
                <div className="flex items-center gap-2">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={author.img} />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-[#403F3F]">{author.name ? author.name : 'John Doe'}</h3>
                        <p className="text-sm text-[#706F6F]">{author.published_date ? author.published_date : 'No publish date'}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-2xl text-[#706F6F]">
                    <span className="cursor-pointer"><FaRegBookmark /></span><span className="cursor-pointer"><MdOutlineShare /></span>
                </div>
            </div>
            <div className="p-5">
                <div>
                    <h2 className="text-xl font-bold text-[#403F3F] mb-4">{title}</h2>
                    <img className="mb-8" src={image_url} alt="" />
                    <p className="border-b pb-5">{details.length > 200 ? details.slice(0, 200) : details}
                        <span>
                            {
                                details.length > 200 && <button className="block text-[#FF8C47] hover:underline">Read More</button>
                            }
                        </span>
                    </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p className="inline-flex gap-1 items-center text-[#FF8C47]"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> <span className="text-[#706F6F] ml-2">{rating.number}</span></p>
                    <p className="inline-flex gap-1 items-center text-[#706F6F]"><FaEye /> <span className="ml-2">{total_view}</span></p>
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    singleNews: PropTypes.object.isRequired
}

export default NewsCard;