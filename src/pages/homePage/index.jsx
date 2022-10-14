import React from "react";
import Cardbg1 from "../../../src/assets/images/card-slider-1.webp";
import Star from "../../../src/assets/images/star-2767.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import heart from "../../../src/assets/images/heart-917.svg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const HomePage = () => {
  return (
    <div className="main-hero container mx-auto pt-[200px] md:pt-[240px] pb-8 lg:px-10 xl:px-0">
      <div className="cards-main py-6 flex justify-between flex-wrap px-6 lg:px-0">
        <div className="card w-full md:w-[48%] lg:w-[23%] cursor-pointer pb-6 relative">
          <div className="bg-image rounded-lg">
            <img
              className="absolute w-[30px] h-[50px] right-[10px] z-[99999]"
              src={heart}
            />

            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper hero-swiper rounded-lg z-50 realtive"
            >
              <SwiperSlide className="rounded-lg ">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-[16px] font-[500]">Rawalpindi, Pakistan</p>
            <span className="flex items-center font-[400] text-[16px]">
              <img className="w-[12px] h-[12px] mr-2" src={Star} />
              <p>New</p>
            </span>
          </div>
          <p className="text-gray-500">Hosted by Sohaib</p>
          <p className="text-gray-500">Oct 21 - 26</p>
          <span className="font-bold flex pt-3">
            $11 <p className="font-[400]">night</p>
          </span>
        </div>

        <div className="card w-full md:w-[48%] lg:w-[23%] cursor-pointer pb-6 relative">
          <img
            className="absolute w-[30px] h-[50px] right-[10px] z-[99999]"
            src={heart}
          />
          <div className="bg-image rounded-lg">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-lg z-50"
            >
              <SwiperSlide className="rounded-lg ">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-[16px] font-[500]">Rawalpindi, Pakistan</p>
            <span className="flex items-center font-[400] text-[16px]">
              <img className="w-[12px] h-[12px] mr-2" src={Star} />
              <p>New</p>
            </span>
          </div>
          <p className="text-gray-500">Hosted by Sohaib</p>
          <p className="text-gray-500">Oct 21 - 26</p>
          <span className="font-bold flex pt-3">
            $11 <p className="font-[400]">night</p>
          </span>
        </div>
        <div className="card w-full md:w-[48%] lg:w-[23%] cursor-pointer pb-6 relative">
          <img
            className="absolute w-[30px] h-[50px] right-[10px] z-[99999]"
            src={heart}
          />
          <div className="bg-image rounded-lg">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-lg z-50"
            >
              <SwiperSlide className="rounded-lg ">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-[16px] font-[500]">Rawalpindi, Pakistan</p>
            <span className="flex items-center font-[400] text-[16px]">
              <img className="w-[12px] h-[12px] mr-2" src={Star} />
              <p>New</p>
            </span>
          </div>
          <p className="text-gray-500">Hosted by Sohaib</p>
          <p className="text-gray-500">Oct 21 - 26</p>
          <span className="font-bold flex pt-3">
            $11 <p className="font-[400]">night</p>
          </span>
        </div>
        <div className="card w-full md:w-[48%] lg:w-[23%] cursor-pointer pb-6 relative">
          <img
            className="absolute w-[30px] h-[50px] right-[10px] z-[99999]"
            src={heart}
          />
          <div className="bg-image rounded-lg">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-lg z-50"
            >
              <SwiperSlide className="rounded-lg ">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-[16px] font-[500]">Rawalpindi, Pakistan</p>
            <span className="flex items-center font-[400] text-[16px]">
              <img className="w-[12px] h-[12px] mr-2" src={Star} />
              <p>New</p>
            </span>
          </div>
          <p className="text-gray-500">Hosted by Sohaib</p>
          <p className="text-gray-500">Oct 21 - 26</p>
          <span className="font-bold flex pt-3">
            $11 <p className="font-[400]">night</p>
          </span>
        </div>
        <div className="card w-full md:w-[48%] lg:w-[23%] cursor-pointer pb-6 relative">
          <img
            className="absolute w-[30px] h-[50px] right-[10px] z-[99999]"
            src={heart}
          />
          <div className="bg-image rounded-lg">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-lg z-50"
            >
              <SwiperSlide className="rounded-lg ">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-[16px] font-[500]">Rawalpindi, Pakistan</p>
            <span className="flex items-center font-[400] text-[16px]">
              <img className="w-[12px] h-[12px] mr-2" src={Star} />
              <p>New</p>
            </span>
          </div>
          <p className="text-gray-500">Hosted by Sohaib</p>
          <p className="text-gray-500">Oct 21 - 26</p>
          <span className="font-bold flex pt-3">
            $11 <p className="font-[400]">night</p>
          </span>
        </div>
        <div className="card w-full md:w-[48%]  lg:w-[23%] cursor-pointer pb-6 relative">
          <img
            className="absolute w-[30px] h-[50px] right-[10px] z-[99999]"
            src={heart}
          />
          <div className="bg-image rounded-lg">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-lg z-50"
            >
              <SwiperSlide className="rounded-lg ">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-[16px] font-[500]">Rawalpindi, Pakistan</p>
            <span className="flex items-center font-[400] text-[16px]">
              <img className="w-[12px] h-[12px] mr-2" src={Star} />
              <p>New</p>
            </span>
          </div>
          <p className="text-gray-500">Hosted by Sohaib</p>
          <p className="text-gray-500">Oct 21 - 26</p>
          <span className="font-bold flex pt-3">
            $11 <p className="font-[400]">night</p>
          </span>
        </div>
        <div className="card w-full md:w-[48%] lg:w-[23%] cursor-pointer pb-6 relative">
          <img
            className="absolute w-[30px] h-[50px] right-[10px] z-[99999]"
            src={heart}
          />
          <div className="bg-image rounded-lg">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-lg z-50"
            >
              <SwiperSlide className="rounded-lg ">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-[16px] font-[500]">Rawalpindi, Pakistan</p>
            <span className="flex items-center font-[400] text-[16px]">
              <img className="w-[12px] h-[12px] mr-2" src={Star} />
              <p>New</p>
            </span>
          </div>
          <p className="text-gray-500">Hosted by Sohaib</p>
          <p className="text-gray-500">Oct 21 - 26</p>
          <span className="font-bold flex pt-3">
            $11 <p className="font-[400]">night</p>
          </span>
        </div>
        <div className="card w-full md:w-[48%] lg:w-[23%] cursor-pointer pb-6 relative">
          <img
            className="absolute w-[30px] h-[50px] right-[10px] z-[99999]"
            src={heart}
          />
          <div className="bg-image rounded-lg">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-lg z-50"
            >
              <SwiperSlide className="rounded-lg ">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-[16px] font-[500]">Rawalpindi, Pakistan</p>
            <span className="flex items-center font-[400] text-[16px]">
              <img className="w-[12px] h-[12px] mr-2" src={Star} />
              <p>New</p>
            </span>
          </div>
          <p className="text-gray-500">Hosted by Sohaib</p>
          <p className="text-gray-500">Oct 21 - 26</p>
          <span className="font-bold flex pt-3">
            $11 <p className="font-[400]">night</p>
          </span>
        </div>
        <div className="card w-full md:w-[48%] lg:w-[23%] cursor-pointer pb-6 relative">
          <img
            className="absolute w-[30px] h-[50px] right-[10px] z-[99999]"
            src={heart}
          />
          <div className="bg-image rounded-lg">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-lg z-50"
            >
              <SwiperSlide className="rounded-lg ">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-[16px] font-[500]">Rawalpindi, Pakistan</p>
            <span className="flex items-center font-[400] text-[16px]">
              <img className="w-[12px] h-[12px] mr-2" src={Star} />
              <p>New</p>
            </span>
          </div>
          <p className="text-gray-500">Hosted by Sohaib</p>
          <p className="text-gray-500">Oct 21 - 26</p>
          <span className="font-bold flex pt-3">
            $11 <p className="font-[400]">night</p>
          </span>
        </div>
        <div className="card w-full md:w-[48%] lg:w-[23%] cursor-pointer pb-6 relative">
          <img
            className="absolute w-[30px] h-[50px] right-[10px] z-[99999]"
            src={heart}
          />
          <div className="bg-image rounded-lg">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-lg z-50"
            >
              <SwiperSlide className="rounded-lg ">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-[16px] font-[500]">Rawalpindi, Pakistan</p>
            <span className="flex items-center font-[400] text-[16px]">
              <img className="w-[12px] h-[12px] mr-2" src={Star} />
              <p>New</p>
            </span>
          </div>
          <p className="text-gray-500">Hosted by Sohaib</p>
          <p className="text-gray-500">Oct 21 - 26</p>
          <span className="font-bold flex pt-3">
            $11 <p className="font-[400]">night</p>
          </span>
        </div>
        <div className="card w-full md:w-[48%] lg:w-[23%] cursor-pointer pb-6 relative">
          <img
            className="absolute w-[30px] h-[50px] right-[10px] z-[99999]"
            src={heart}
          />
          <div className="bg-image rounded-lg">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-lg z-50"
            >
              <SwiperSlide className="rounded-lg ">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-[16px] font-[500]">Rawalpindi, Pakistan</p>
            <span className="flex items-center font-[400] text-[16px]">
              <img className="w-[12px] h-[12px] mr-2" src={Star} />
              <p>New</p>
            </span>
          </div>
          <p className="text-gray-500">Hosted by Sohaib</p>
          <p className="text-gray-500">Oct 21 - 26</p>
          <span className="font-bold flex pt-3">
            $11 <p className="font-[400]">night</p>
          </span>
        </div>
        <div className="card w-full md:w-[48%] lg:w-[23%] cursor-pointer pb-6 relative">
          <img
            className="absolute w-[30px] h-[50px] right-[10px] z-[99999]"
            src={heart}
          />
          <div className="bg-image rounded-lg">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-lg z-50"
            >
              <SwiperSlide className="rounded-lg ">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-[16px] font-[500]">Rawalpindi, Pakistan</p>
            <span className="flex items-center font-[400] text-[16px]">
              <img className="w-[12px] h-[12px] mr-2" src={Star} />
              <p>New</p>
            </span>
          </div>
          <p className="text-gray-500">Hosted by Sohaib</p>
          <p className="text-gray-500">Oct 21 - 26</p>
          <span className="font-bold flex pt-3">
            $11 <p className="font-[400]">night</p>
          </span>
        </div>
        <div className="card w-full md:w-[48%] lg:w-[23%] cursor-pointer pb-6 relative">
          <img
            className="absolute w-[30px] h-[50px] right-[10px] z-[99999]"
            src={heart}
          />
          <div className="bg-image rounded-lg">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-lg z-50"
            >
              <SwiperSlide className="rounded-lg ">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-[16px] font-[500]">Rawalpindi, Pakistan</p>
            <span className="flex items-center font-[400] text-[16px]">
              <img className="w-[12px] h-[12px] mr-2" src={Star} />
              <p>New</p>
            </span>
          </div>
          <p className="text-gray-500">Hosted by Sohaib</p>
          <p className="text-gray-500">Oct 21 - 26</p>
          <span className="font-bold flex pt-3">
            $11 <p className="font-[400]">night</p>
          </span>
        </div>
        <div className="card w-full md:w-[48%] lg:w-[23%] cursor-pointer pb-6 relative">
          <img
            className="absolute w-[30px] h-[50px] right-[10px] z-[99999]"
            src={heart}
          />
          <div className="bg-image rounded-lg">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-lg z-50"
            >
              <SwiperSlide className="rounded-lg ">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-[16px] font-[500]">Rawalpindi, Pakistan</p>
            <span className="flex items-center font-[400] text-[16px]">
              <img className="w-[12px] h-[12px] mr-2" src={Star} />
              <p>New</p>
            </span>
          </div>
          <p className="text-gray-500">Hosted by Sohaib</p>
          <p className="text-gray-500">Oct 21 - 26</p>
          <span className="font-bold flex pt-3">
            $11 <p className="font-[400]">night</p>
          </span>
        </div>
        <div className="card w-full md:w-[48%] lg:w-[23%] cursor-pointer pb-5 relative">
          <img
            className="absolute w-[30px] h-[50px] right-[10px] z-[99999]"
            src={heart}
          />
          <div className="bg-image rounded-lg">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-lg z-50"
            >
              <SwiperSlide className="rounded-lg ">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-[16px] font-[500]">Rawalpindi, Pakistan</p>
            <span className="flex items-center font-[400] text-[16px]">
              <img className="w-[12px] h-[12px] mr-2" src={Star} />
              <p>New</p>
            </span>
          </div>
          <p className="text-gray-500">Hosted by Sohaib</p>
          <p className="text-gray-500">Oct 21 - 26</p>
          <span className="font-bold flex pt-3">
            $11 <p className="font-[400]">night</p>
          </span>
        </div>
        <div className="card w-full md:w-[48%] lg:w-[23%] cursor-pointer pb-5 relative">
          <img
            className="absolute w-[30px] h-[50px] right-[10px] z-[99999]"
            src={heart}
          />
          <div className="bg-image rounded-lg">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-lg z-50"
            >
              <SwiperSlide className="rounded-lg ">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-[16px] font-[500]">Rawalpindi, Pakistan</p>
            <span className="flex items-center font-[400] text-[16px]">
              <img className="w-[12px] h-[12px] mr-2" src={Star} />
              <p>New</p>
            </span>
          </div>
          <p className="text-gray-500">Hosted by Sohaib</p>
          <p className="text-gray-500">Oct 21 - 26</p>
          <span className="font-bold flex pt-3">
            $11 <p className="font-[400]">night</p>
          </span>
        </div>
        <div className="card w-full md:w-[48%] lg:w-[23%] cursor-pointer pb-5 relative">
          <img
            className="absolute w-[30px] h-[50px] right-[10px] z-[99999]"
            src={heart}
          />
          <div className="bg-image rounded-lg">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-lg z-50"
            >
              <SwiperSlide className="rounded-lg ">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-[16px] font-[500]">Rawalpindi, Pakistan</p>
            <span className="flex items-center font-[400] text-[16px]">
              <img className="w-[12px] h-[12px] mr-2" src={Star} />
              <p>New</p>
            </span>
          </div>
          <p className="text-gray-500">Hosted by Sohaib</p>
          <p className="text-gray-500">Oct 21 - 26</p>
          <span className="font-bold flex pt-3">
            $11 <p className="font-[400]">night</p>
          </span>
        </div>
        <div className="card w-full md:w-[48%] lg:w-[23%] cursor-pointer pb-5 relative">
          <img
            className="absolute w-[30px] h-[50px] right-[10px] z-[99999]"
            src={heart}
          />
          <div className="bg-image rounded-lg">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-lg z-50"
            >
              <SwiperSlide className="rounded-lg ">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-[16px] font-[500]">Rawalpindi, Pakistan</p>
            <span className="flex items-center font-[400] text-[16px]">
              <img className="w-[12px] h-[12px] mr-2" src={Star} />
              <p>New</p>
            </span>
          </div>
          <p className="text-gray-500">Hosted by Sohaib</p>
          <p className="text-gray-500">Oct 21 - 26</p>
          <span className="font-bold flex pt-3">
            $11 <p className="font-[400]">night</p>
          </span>
        </div>
        <div className="card w-full md:w-[48%] lg:w-[23%] cursor-pointer pb-5 relative">
          <img
            className="absolute w-[30px] h-[50px] right-[10px] z-[99999]"
            src={heart}
          />
          <div className="bg-image rounded-lg">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-lg z-50"
            >
              <SwiperSlide className="rounded-lg ">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-[16px] font-[500]">Rawalpindi, Pakistan</p>
            <span className="flex items-center font-[400] text-[16px]">
              <img className="w-[12px] h-[12px] mr-2" src={Star} />
              <p>New</p>
            </span>
          </div>
          <p className="text-gray-500">Hosted by Sohaib</p>
          <p className="text-gray-500">Oct 21 - 26</p>
          <span className="font-bold flex pt-3">
            $11 <p className="font-[400]">night</p>
          </span>
        </div>
        <div className="card w-full md:w-[48%] lg:w-[23%] cursor-pointer pb-5 relative">
          <img
            className="absolute w-[30px] h-[50px] right-[10px] z-[99999]"
            src={heart}
          />
          <div className="bg-image rounded-lg">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper rounded-lg z-50"
            >
              <SwiperSlide className="rounded-lg ">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  className="w-full min-h-[300px] rounded-lg"
                  src={Cardbg1}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between items-center pt-3">
            <p className="text-[16px] font-[500]">Rawalpindi, Pakistan</p>
            <span className="flex items-center font-[400] text-[16px]">
              <img className="w-[12px] h-[12px] mr-2" src={Star} />
              <p>New</p>
            </span>
          </div>
          <p className="text-gray-500">Hosted by Sohaib</p>
          <p className="text-gray-500">Oct 21 - 26</p>
          <span className="font-bold flex pt-3">
            $11 <p className="font-[400]">night</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
