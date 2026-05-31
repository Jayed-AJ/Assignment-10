import bannerImage from "../src/assets/banner.webp"
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
    return (
        <div className="min-h-screen h-full bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(
                                    rgba(0, 0, 0, 0.6),
                                    rgba(0, 0, 0, 0.3)
                                ), url(${bannerImage})`,
            }}
        >
            <Swiper
                modules={[Navigation]}
                navigation={true}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
            >
                <SwiperSlide>
                    <div className=" text-green-200 min-h-screen h-full text-center gap-10 flex flex-col items-center justify-center text-stone-100">
                        <h1 className="text-4xl/12 md:text-5xl/16 font-bold ">
                            Spring Garden Festival 2026
                        </h1>
                        <p className="max-w-2xl mx-auto mt-4 text-lg">
                            Celebrate the beauty of nature with gardening enthusiasts from around the community. Explore flower exhibitions, gardening workshops, and expert tips for creating a vibrant home garden.
                        </p>
                        <button className="btn customShadowBTN bg-green-600 mt-6 border-none text-white font-semibold italic">
                            Register Now
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="min-h-screen h-full text-center gap-10 flex flex-col items-center justify-center text-stone-100">
                        <h1 className="text-4xl/12 md:text-5xl/16 font-bold">
                            Urban Gardening Workshop
                        </h1>
                        <p className="max-w-2xl mx-auto mt-4 text-lg">
                            Learn how to grow fresh vegetables, herbs, and flowers in limited spaces. Discover practical techniques for balcony gardens, rooftop farms, and sustainable urban living.
                        </p>
                        <button className="btn customShadowBTN bg-green-600 mt-6 border-none text-white font-semibold italic">
                            Join Workshop
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="min-h-screen h-full text-center gap-10 flex flex-col items-center justify-center text-stone-100">
                        <h1 className="text-4xl/12 md:text-5xl/16 font-bold ">
                            Community Tree Planting Day
                        </h1>
                        <p className="max-w-2xl mx-auto mt-4 text-lg">
                            Be part of a greener future by joining our tree planting initiative. Connect with fellow gardeners, contribute to the environment, and help create healthier neighborhoods.
                        </p>
                        <button className="btn customShadowBTN bg-green-600 mt-6 border-none text-white font-semibold italic">
                            Get Involved
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>


        </div>
    );
};

export default Banner;