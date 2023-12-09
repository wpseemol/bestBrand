import { Link, useParams } from 'react-router-dom';
import Title from '../../components/title/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../assets/css/styles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BrandItems = () => {
    const clickBrand = useParams();
    const [brandItems, getBrandItems] = useState([]);
    useEffect(() => {
        axios
            .get('https://best-brand-server.vercel.app/products')
            .then(function (response) {
                //category
                // handle success
                const filterAppleProductData = response?.data?.filter(
                    (item) => {
                        return (
                            item?.brand?.toLowerCase().trim() ===
                            clickBrand.items
                        );
                    }
                );

                getBrandItems(filterAppleProductData);
            })
            .catch(function () {
                // handle error
            });
    }, []);

    return (
        <div className="">
            <div className="">
                <div className="md:h-[35rem]  -z-10">
                    <Swiper
                        style={{ height: '35rem' }}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper ">
                        <SwiperSlide>
                            <img
                                src="https://i.ibb.co/DpdtZ4t/Mix-Fold-3-Slider-1262.webp"
                                alt="slider image 1"
                                className="w-full object-cover object-center "
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://i.ibb.co/xjgzSgw/Apple-Watch-Series-9-Web-Slider-9874.webp"
                                alt="slider image 1"
                                className="w-full object-cover object-center"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://i.ibb.co/bgc07dk/Iphone-15-Pro-Max-Web-Slider-2722.webp"
                                alt="slider image 1"
                                className="w-full object-cover object-center"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://i.ibb.co/p2WGRft/google-pixel8-pro.webp"
                                alt="slider image 1"
                                className="w-full object-cover object-center"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="container mx-auto md:my-16 my-5">
                <div>
                    <Title>
                        <span className="capitalize">
                            {clickBrand.items} Product
                        </span>
                    </Title>
                </div>
                {brandItems.length !== 0 ? (
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 md:px-0 px-2">
                        {brandItems?.map((element, inx) => {
                            return (
                                <div
                                    key={inx}
                                    className="bg-white px-1 pb-3 rounded-md hover:shadow-2xl duration-200">
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
                            );
                        })}
                    </div>
                ) : (
                    <>
                        <div className="text-4xl font-bold flex items-center justify-center">
                            <div className="lg:w-fit w-[20rem]">
                                <img
                                    src="https://i.ibb.co/34C4Bzq/nodata.png"
                                    alt="no data found image"
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default BrandItems;
