
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'animate.css';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-3xl">
                    <SwiperSlide className='bg-[url("https://i.ibb.co/NYq9mYq/beautiful-natural-view-landscape-23-2150788100.jpg")] bg-no-repeat bg-cover py-40'>
                        <div className=' flex justify-center mx-2'>
                            <div className='p-4  lg:p-24 border border-[#f7614d] w-fit rounded-2xl bg-gray-600 bg-opacity-30 text-center'>
                                <h4 className='animate__animated animate__fadeInLeft text-sm lg:text-xl font-medium text-white'>Welcome to <span className='font-bold'>Paradise of Earth</span></h4>
                                <div><h2 className='animate__animated animate__fadeInLeft mt-4 text-3xl lg:text-6xl font-extrabold text-[#f7614d]'>Choose Your Destination</h2></div>
                                <p className='animate__animated animate__fadeInLeft mt-3 text-sm lg:text-base font-semibold text-white'>Embark on an Unforgettable Journey through Southeast <span>{`Asia's`}</span> Cultural Marvels <br /> and Natural Beauty with Our Comprehensive Guide.</p>
                                <button className='animate__animated animate__fadeInLeft mt-7 btn btn-error btn-outline'><span className='text-white font-bold text-lg'>Contact</span></button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[url("https://i.ibb.co/52hs9BR/beautiful-tropical-beach-sea-74190-6583.jpg")] bg-no-repeat bg-cover py-40'>
                        <div className=' flex justify-center mx-2'>
                            <div className='p-4  lg:p-24 border border-[#f7614d] w-fit rounded-2xl bg-gray-600 bg-opacity-30 text-center'>
                                <h4 className='animate__animated animate__fadeInLeft text-sm lg:text-xl font-medium text-white'>Welcome to <span className='font-bold'>Paradise of Earth</span></h4>
                                <div><h2 className='animate__animated animate__fadeInLeft mt-4 text-3xl lg:text-6xl font-extrabold text-[#f7614d]'>Choose Your Destination</h2></div>
                                <p className='animate__animated animate__fadeInLeft mt-3 text-sm lg:text-base font-semibold text-white'>Experience the Richness of Southeast Asia: Cultural Marvels and Natural Beauty <br /> Await in Our Comprehensive Guidebook.</p>
                                <button className='animate__animated animate__fadeInLeft mt-7 btn btn-error btn-outline'><span className='text-white font-bold text-lg'>Contact</span></button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[url("https://i.ibb.co/YfxLZgj/beautiful-shot-ma-shan-country-park-hong-kong-181624-47956.jpg")] bg-no-repeat bg-cover py-40'>
                        <div className=' flex justify-center mx-2'>
                            <div className='p-4  lg:p-24 border border-[#f7614d] w-fit rounded-2xl bg-gray-600 bg-opacity-30 text-center'>
                                <h4 className='animate__animated animate__fadeInLeft text-sm lg:text-xl font-medium text-white'>Welcome to <span className='font-bold'>Paradise of Earth</span></h4>
                                <div><h2 className='animate__animated animate__fadeInLeft mt-4 text-3xl lg:text-6xl font-extrabold text-[#f7614d]'>Choose Your Destination</h2></div>
                                <p className='animate__animated animate__fadeInLeft mt-3 text-sm lg:text-base font-semibold text-white'>Discover Southeast <span>{`Asia's`}</span> Rich Tapestry: Cultural Marvels <br /> and Natural Beauty Awaits in Our Comprehensive Guidebook.</p>
                                <button className='animate__animated animate__fadeInLeft mt-7 btn btn-error btn-outline'><span className='text-white font-bold text-lg'>Contact</span></button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[url("https://i.ibb.co/dW8Fzr1/sandy-sea-shore-blue-sky-background-23-2147952951.jpg")] bg-no-repeat bg-cover py-40'>
                        <div className=' flex justify-center mx-2'>
                            <div className='p-4  lg:p-24 border border-[#f7614d] w-fit rounded-2xl bg-gray-600 bg-opacity-30 text-center'>
                                <h4 className='animate__animated animate__fadeInLeft text-sm lg:text-xl font-medium text-white'>Welcome to <span className='font-bold'>Paradise of Earth</span></h4>
                                <div><h2 className='animate__animated animate__fadeInLeft mt-4 text-3xl lg:text-6xl font-extrabold text-[#f7614d]'>Choose Your Destination</h2></div>
                                <p className='animate__animated animate__fadeInLeft mt-3 text-sm lg:text-base font-semibold text-white'>Unveil the Treasures of Southeast Asia: Cultural Marvels and Natural Beauty <br /> Await in Our Comprehensive Guidebook.</p>
                                <button className='animate__animated animate__fadeInLeft mt-7 btn btn-error btn-outline'><span className='text-white font-bold text-lg'>Contact</span></button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
