import swimImg from '../../assets/images/qZone1.png'
import classImg from '../../assets/images/qZone2.png'
import playImg from '../../assets/images/qZone3.png'
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div>
            <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#403F3F] mb-5">Login With</h3>
                <div className="space-y-2">
                    <button className="btn w-full h-auto min-h-max text-blue-600 px-10 py-4 border-blue-600 bg-transparent rounded-md"><span><FaGoogle /></span>Login with Google</button>
                    <button className="btn w-full h-auto min-h-max text-[#403F3F] px-10 py-4 border-[#403F3F] bg-transparent rounded-md"><span><FaGithub /></span>Login with Github</button>
                </div>
            </div>
            <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#403F3F] mb-5">Find Us On</h3>
                <div className="font-medium text-[#706F6F] border border-[#E7E7E7] rounded-md">
                    <div className="p-4 border-b border-[#E7E7E7] flex items-center gap-2">
                        <span className='p-2 rounded-full bg-[#E7E7E7] text-blue-600'><FaFacebookF /></span><h4>Facebook</h4>
                    </div>
                    <div className="p-4 border-b border-[#E7E7E7] flex items-center gap-2">
                        <span className='p-2 rounded-full bg-[#E7E7E7] text-blue-400'><FaTwitter /></span><h4>Twitter</h4>
                    </div>
                    <div className="p-4 flex items-center gap-2">
                        <span className='p-2 rounded-full bg-[#E7E7E7] text-[#D82D7E]'><FaInstagram /></span><h4>Instagram</h4>
                    </div>
                </div>
            </div>
            <div className="bg-[#E7E7E7] p-4">
                <h3 className="text-xl font-semibold text-[#403F3F] mb-5">Q-Zone</h3>
                <div className='space-y-11'>
                    <img className='w-full' src={swimImg} alt="" />
                    <img className='w-full' src={classImg} alt="" />
                    <img className='w-full' src={playImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;