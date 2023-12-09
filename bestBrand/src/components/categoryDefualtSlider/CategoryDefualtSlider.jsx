import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../assets/css/styles.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const CategoryDefualtSlider = () => {
    return (
        <div className="md:h-[30rem] h-60 -z-10">
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
    );
};

export default CategoryDefualtSlider;
