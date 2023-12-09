import { Link } from 'react-router-dom';
import HomeTitle from '../homeTitle/HomeTitle';

const BrandSection = () => {
    return (
        <div>
            <div>
                <div className="mx-auto">
                    <HomeTitle>
                        <samp className="uppercase">Shop By Brands</samp>
                    </HomeTitle>
                    <p className="text-lg font-semibold text-center my-4">
                        Top brand explore and By now.
                    </p>
                </div>
                <div className=" w-fit ml-auto">
                    <button
                        className="seconderBtn border border-primaryColor text-primaryColor p-1
                    hover:bg-primaryColor hover:text-white">
                        <Link to="/brand">All Brand {'>>'}</Link>
                    </button>
                </div>
            </div>

            <div
                className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5
            w-fit mx-auto">
                <Link to="/brand/apple">
                    <div className="group text-3xl font-bold text-center overflow-hidden py-5 px-2 hover:shadow-xl rounded-md duration-200">
                        <div className="group-hover:scale-110 p-4 duration-200">
                            <div className="w-48">
                                <img
                                    src="https://i.ibb.co/pvgs3sS/knowledge-graph-logo.png"
                                    alt="Apple Icon"
                                />
                            </div>
                            <div className="mt-3">
                                <h2>Apple</h2>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/brand/google">
                    <div className="group text-3xl font-bold text-center overflow-hidden py-5 px-2 hover:shadow-xl rounded-md duration-200">
                        <div className="group-hover:scale-110 p-4 duration-200">
                            <div className="w-48">
                                <img
                                    src="https://i.ibb.co/DGZj3fN/profile-vrt-raw-bytes-1587515358-10512.png"
                                    alt="Google Icon"
                                />
                            </div>
                            <div className="mt-3">
                                <h2>Google</h2>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/brand/samsung">
                    <div className="group text-3xl font-bold text-center overflow-hidden py-5 px-2 hover:shadow-xl rounded-md duration-200">
                        <div className="group-hover:scale-110 p-4 duration-200">
                            <div className="w-48">
                                <img
                                    src="https://i.ibb.co/FqRDLp4/free-samsung-226432.png"
                                    alt="Apple Icon"
                                />
                            </div>
                            <div className="mt-3">
                                <h2>Samsung</h2>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/brand/xiaomi">
                    <div className="group text-3xl font-bold text-center overflow-hidden py-5 px-2 hover:shadow-xl rounded-md duration-200">
                        <div className="group-hover:scale-110 p-4 duration-200">
                            <div className="w-48">
                                <img
                                    src="https://i.ibb.co/XbBNQ8q/mi.png"
                                    alt="Xiaomi Icon"
                                />
                            </div>
                            <div className="mt-3">
                                <h2>Xiaomi</h2>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/brand/huawei">
                    <div className="group text-3xl font-bold text-center overflow-hidden py-5 px-2 hover:shadow-xl rounded-md duration-200">
                        <div className="group-hover:scale-110 p-4 duration-200">
                            <div className="w-48">
                                <img
                                    src="https://i.ibb.co/GWRqQWG/huawei-logo-transparent-2-1.png"
                                    alt="Huawei Icon"
                                />
                            </div>
                            <div className="mt-3">
                                <h2>Huawei</h2>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/brand/oppo">
                    <div className="group text-3xl font-bold text-center overflow-hidden py-5 px-2 hover:shadow-xl rounded-md duration-200">
                        <div className="group-hover:scale-110 p-4 duration-200">
                            <div className="w-48">
                                <img
                                    src="https://i.ibb.co/Hnk9N5S/882745.png"
                                    alt="oppo Icon"
                                />
                            </div>
                            <div className="mt-3">
                                <h2>Oppo</h2>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default BrandSection;
