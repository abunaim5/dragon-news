import NavBar from "../../components/NavBar/NavBar";

const Register = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <div className="max-w-6xl mx-auto pt-10 pb-24">
                <NavBar></NavBar>
                <div className="w-[752px] bg-base-100 mx-auto px-[73px] py-[88px] mt-24 rounded-md">
                    <h2 className="text-4xl font-semibold text-[#403F3F] text-center border-b pb-12">Register your account</h2>
                    <div className="card shrink-0">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#403F3F]">Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" className="input bg-[#F3F3F3]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#403F3F]">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Enter your photo url" className="input bg-[#F3F3F3]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#403F3F]">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" className="input bg-[#F3F3F3]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#403F3F]">Password</span>
                                </label>
                                <input type="password" placeholder="Enter your password" className="input bg-[#F3F3F3]" required />
                                <label className="label justify-normal gap-3 items-center text-[#706F6F]">
                                    <input type="checkbox" name="term" id="term" /><span>Accept Term & Conditions</span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#403F3F] rounded-md text-white">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;