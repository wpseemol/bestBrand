import { Link, useLoaderData } from 'react-router-dom';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../assets/css/styles.css';

import Title from '../../components/title/Title';
import CategoryDefualtSlider from '../../components/categoryDefualtSlider/CategoryDefualtSlider';

const Category = () => {
    const { data } = useLoaderData();
    const { category, categoryBenar } = data || {};

    return (
        <>
            <div className="">
                {categoryBenar.length > 0 ? (
                    <div className="md:h-[35rem] h-60 -z-10">
                        <Swiper
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
                            {categoryBenar.length > 0 &&
                                categoryBenar.map((element, inx) => {
                                    return (
                                        <SwiperSlide key={inx}>
                                            <img
                                                src={element.benarImage}
                                                alt={`Category slider Image ${
                                                    inx + 1
                                                }`}
                                                className="w-full object-cover object-center"
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                    </div>
                ) : (
                    <CategoryDefualtSlider />
                )}
            </div>
            <div className="container mx-auto ">
                <Title>{category[0]?.category?.categoryName}</Title>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 md:px-0 px-2">
                    {category?.map((element, inx) => {
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
                                            Price: <span>{element.price}</span>{' '}
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
            </div>
        </>
    );
};

export default Category;
