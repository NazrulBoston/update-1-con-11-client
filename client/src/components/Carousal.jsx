
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';


import image1 from '../assets/images/carousel1.jpg'
import image2 from '../assets/images/carousel2.jpg'
import image3 from '../assets/images/carousel3.jpg'



export default function Carasoul() {
    return (
        <div className='container py-10 px-6 mx-auto' >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide
                    image={image1}
                    text='Get your web development projects done in a minute'
                    ></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                    image={image2}
                    text="Get your Graphic Design projects done in a minute"
                    ></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                    image={image3}
                    text="Start your digital marketing project in a minute"
                    ></Slide>
                </SwiperSlide>
                
            </Swiper>
        </div >
    );
}