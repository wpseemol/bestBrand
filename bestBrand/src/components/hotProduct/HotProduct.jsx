import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../../assets/css/sliderStyle.css';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import HomeTitle from '../homeTitle/HomeTitle';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HotProduct = () => {
    const [appleProductData, getAppleProductData] = useState([]);
    useEffect(() => {
        axios
            .get('https://best-brand-server.vercel.app/products')
            .then(function (response) {
                //category
                // handle success
                const filterAppleProductData = response?.data?.filter(
                    (item) => {
                        return item?.brand?.toLowerCase().trim() === 'apple';
                    }
                );

                getAppleProductData(filterAppleProductData);
            })
            .catch(function () {
                // handle error
            });
    }, []);

    return (
        <div className=" my-16">
            <div className="mx-auto">
                <HomeTitle>
                    <samp className="uppercase">Hot Apple Product</samp>
                </HomeTitle>
                <p className="text-lg font-semibold text-center my-4">
                    Latest{' '}
                    <span className="text-primaryColor">Hot Product</span> show
                    here.
                </p>
            </div>

            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper">
                    {appleProductData?.map((element) => {
                        return (
                            <SwiperSlide
                                key={element?._id}
                                className="hotProducHover duration-200">
                                <div className=" test px-1 pb-3 rounded-md ">
                                    <div>
                                        <div>
                                            <img
                                                src={element.ImgUrl}
                                                alt={element?.name}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="text-center mb-4">
                                            <h2 className="text-base font-medium">
                                                {element?.name}
                                            </h2>
                                            <p className="text-sm font-normal my-2">
                                                Price:{' '}
                                                <span>{element.price}</span>{' '}
                                            </p>

                                            <button className="seconderBtn px-4 py-2 bg-primaryColor text-white hover:bg-primaryColor/70 ">
                                                <Link
                                                    to={`/category/${element?.category?.catId}/${element._id}/update`}>
                                                    Update
                                                </Link>
                                            </button>

                                            <button className="seconderBtn px-4 py-2 ml-3 border border-primaryColor text-primaryColor">
                                                <Link
                                                    to={`/category/${element?.category?.catId}/${element._id}`}>
                                                    See Details
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            {/* <div className=" grid xl:grid-cols-8 lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-2">
                {categoryData.map((element, inx) => {
                    return (
                        <dir
                            onClick={() => {
                                handalClickCategory(element?.catId);
                            }}
                            key={inx}
                            className="flex flex-col items-center justify-center bg-[#f6f8fa] px-1 py-3
                            hover:text-primaryColor hover:scale-105 duration-300 rounded-md overflow-hidden">
                            <div>
                                <img
                                    src={element?.categoryIcon}
                                    alt={element?.categoryName}
                                    className="w-16"
                                />
                            </div>
                            <div>
                                <h2 className="text-base font-medium mt-3">
                                    {element?.categoryName}
                                </h2>
                            </div>
                        </dir>
                    );
                })}
            </div> */}
        </div>
    );
};

export default HotProduct;
