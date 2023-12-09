import { useEffect, useState } from 'react';
import HomeTitle from '../homeTitle/HomeTitle';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaRegCircleLeft, FaRegCircleRight } from 'react-icons/fa6';
import '../../assets/css/hover.css';

const AllProduct = () => {
    const [allProductData, getAllProductData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;
    useEffect(() => {
        axios
            .get('https://best-brand-server.vercel.app/products')
            .then(function (response) {
                getAllProductData(response?.data);
            })
            .catch(function () {
                // handle error
            });
    }, []);

    const handleNextPage = () => {
        setCurrentPage((prev) => prev + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prev) => prev - 1);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = (currentPage + 1) * itemsPerPage;

    return (
        <div id="product" className="overflow-hidden">
            <div className="mx-auto">
                <HomeTitle>
                    <samp className="uppercase">All Product</samp>
                </HomeTitle>
                <p className="text-lg font-semibold text-center my-4">
                    You Can View alternative product here.Continue your
                    shopping.
                </p>
            </div>
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 relative allHoverElement">
                {allProductData?.slice(startIndex, endIndex).map((item) => {
                    return (
                        <div
                            key={item?._id}
                            className="allProduct px-1 pb-3 rounded-md hover:shadow-lg duration-200 ">
                            <div className="flex flex-col items-center justify-items-end ">
                                <div>
                                    <div className="h-[12rem] overflow-hidden">
                                        <img
                                            src={item.ImgUrl}
                                            alt={item?.name}
                                            loading="lazy"
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="text-center mb-4">
                                        <h2 className="text-base font-medium">
                                            {item?.name}
                                        </h2>
                                        <p className="text-sm font-normal my-2">
                                            Price: <span>{item.price}</span>{' '}
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <button className="seconderBtn px-4 py-2 bg-primaryColor text-white hover:bg-primaryColor/70 ">
                                        <Link
                                            to={`/category/${item?.category?.catId}/${item._id}/update`}>
                                            Update
                                        </Link>
                                    </button>
                                    <button className="seconderBtn px-4 py-2 ml-3 border border-primaryColor text-primaryColor">
                                        <Link
                                            to={`/category/${item?.category?.catId}/${item._id}`}>
                                            See Details
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div
                    className={`absolute transform -translate-y-1/2 top-1/2 -left-28 z-20 duration-700 prevHoverShow first-letter ${
                        currentPage === 0 ? 'hidden' : ''
                    }`}>
                    {/* Previous button */}
                    <button
                        onClick={handlePrevPage}
                        className="text-2xl bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded duration-200">
                        <FaRegCircleLeft />
                    </button>
                </div>
                <div
                    className={`absolute transform -translate-y-1/2 top-1/2 -right-28 z-20 duration-700 nextHoverShow ${
                        allProductData.length <=
                        (currentPage + 1) * itemsPerPage
                            ? 'hidden'
                            : ''
                    } `}>
                    {/* next button  */}
                    <button
                        onClick={handleNextPage}
                        className="text-2xl bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded duration">
                        <FaRegCircleRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;
