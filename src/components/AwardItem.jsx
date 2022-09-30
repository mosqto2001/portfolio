import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function AwardItem(props) {
  return (
    <div class="justify-center flex flex-col w-full sm:w-4/5 lg:w-3/5">
    <div class="flex flex-col sm:flex-row w-full ">
      <img
        alt="Award"
        src={`./images/awards/${props.award.image}.png`}
        class="object-contain w-full h-full"
      />


</div>
      <div class="p-4">
        <p class="text-xs text-gray-400">{props.award.date}</p>

        <h5 class="text-lg font-bold tracking-wider text-gray-200">
          {props.award.name}
        </h5>

        <p class="mt-2 text-gray-200">{props.award.description}</p>
      </div>
    </div>
   
    
  );
}
