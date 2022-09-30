import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
export default function AwardItem(props) {
  return (
    <div className="justify-center flex flex-col w-full sm:w-4/5 lg:w-3/5">
    <div className="flex flex-col w-full ">
      <img
        alt="Award"
        src={`./images/awards/${props.award.image}.png`}
        className="object-contain w-full h-full"
      />

{props.award.hasProject && <div className="w-full">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
              <SwiperSlide>
                    <img
                        className="object-contain w-full h-[275px] pointer-events-none"
                        src={`./images/awards/${props.award.image}_1.png`}
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-contain w-full h-[275px] pointer-events-none"
                        src={`./images/awards/${props.award.image}_2.png`}
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-contain w-full h-[275px] pointer-events-none"
                        src={`./images/awards/${props.award.image}_3.png`}
                        alt="image slide 3"
                    />
                </SwiperSlide>  <SwiperSlide>
                    <img
                        className="object-contain w-full h-[275px] pointer-events-none"
                        src={`./images/awards/${props.award.image}_4.png`}
                        alt="image slide 4"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-contain w-full h-[275px] pointer-events-none"
                        src={`./images/awards/${props.award.image}_5.png`}
                        alt="image slide 5"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-contain w-full h-[275px] pointer-events-none"
                        src={`./images/awards/${props.award.image}_6.png`}
                        alt="image slide 6"
                    />
                </SwiperSlide>
            </Swiper>
           
      </div>}

</div>
      <div className="p-4">
        <p className="text-xs text-gray-400">{props.award.date}</p>

        <h5 className="text-lg font-bold tracking-wider text-gray-200">
          {props.award.name}
        </h5>

        <p className="mt-2 text-gray-200">{props.award.description}</p>
      </div>
    </div>
   
    
  );
}
