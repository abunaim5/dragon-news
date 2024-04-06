
const RightSideNav = () => {
    return (
        <div>
            <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#403F3F] mb-5">Login With</h3>
                <div className="space-y-2">
                    <button className="btn w-full h-auto min-h-max text-blue-600 px-10 py-4 border-blue-600 bg-transparent rounded-md">Login with Google</button>
                    <button className="btn w-full h-auto min-h-max text-[#403F3F] px-10 py-4 border-[#403F3F] bg-transparent rounded-md">Login with Github</button>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-[#403F3F] mb-5">Find Us On</h3>
                <div className="font-medium text-[#706F6F] border border-[#E7E7E7] rounded-md">
                    <div className="p-4 border-b border-[#E7E7E7]">
                        <h4>Facebook</h4>
                    </div>
                    <div className="p-4 border-b border-[#E7E7E7]">
                        <h4>Tweeter</h4>
                    </div>
                    <div className="p-4">
                        <h4>Instagram</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;