// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../assets/css/styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HomeHeroSection = () => {
    return (
        <>
            <div className="grid md:grid-cols-3 grid-cols-4 gap-4">
                <div className="md:col-span-2 -z-10 col-span-4 md:row-span-2">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper ">
                        <SwiperSlide className="w-full h-full">
                            <img
                                src="https://i.ibb.co/DpdtZ4t/Mix-Fold-3-Slider-1262.webp"
                                alt="slider image 1"
                                className="w-full h-full object-cover object-center"
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
                <div className="md:col-span-1 col-span-2">
                    {' '}
                    <img
                        src="https://i.ibb.co/VpkKgS3/Mi-Band-8-Pro-5523.webp"
                        alt="slider image 1"
                        className="w-full object-cover object-center"
                    />
                </div>
                <div className="md:col-span-1 col-span-2">
                    {' '}
                    <img
                        src="https://i.ibb.co/X2fFFvb/Asus-Rog-Ally-5795.webp"
                        alt="slider image 1"
                        className="w-full object-cover object-center"
                    />
                </div>
            </div>
        </>
    );
};

export default HomeHeroSection;
