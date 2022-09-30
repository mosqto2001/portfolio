import React,{useState} from "react";
import ProjectAbout from "./ProjectAbout"
import ProjectFeature from "./ProjectFeature"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function ProjectDetail(props) {
  const [shownTap,setShownTap] = useState("about")

  return (
    <section class="flex flex-col items-center mt-16 sm:mt-48 relative bg-center bg-no-repeat bg-contain from-dark-900 bg-gradient-to-t object-top w-screen h-full">
      <img
        src={`./images/projects/${props.project.image}.png`}
        class="z-0 absolute max-w-screen-xl mx-auto w-full h-[280px] sm:h-[450px] lg:h-[700px] object-cover object-top"
      />
      <div class="absolute max-w-screen-xl mx-auto z-10 inset-0 bg-gradient-to-t from-dark-900 w-full h-[280px] sm:h-[450px] lg:h-[700px]"></div>

      <div class="z-20 relative max-w-screen-xl flex flex-col justify-center items-center px-4 mx-auto sm:px-6 lg:px-8 lg:h-screen lg:items-center lg:flex">
        <div class="max-w-full text-center sm:text-left flex justify-center items-center mt-[180px] sm:mt-[300px] lg:mt-[450px] flex-col">
          <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl tracking-wider">
            {props.project.description}
          </p>
          <h1 className="w-full text-3xl font-bold sm:text-6xl tracking-wider">
            {props.project.name}
          </h1>

          {props.project.buttonText !== "YOU ARE VISITING"?
          <a target="_blank" href={props.project.link} class="mt-6">
            <div class="button-borders">
              <button class="primary-button">{props.project.buttonText}</button>
            </div>
          </a>:
           <div class="button-borders mt-6">
           <div class="primary-button bg-gray-200 text-dark-900">{props.project.buttonText}</div>
         </div>
          } 
        </div>
      </div>

      <section>
        <div class="max-w-screen-xl px-12 py-16 sm:px-6 lg:px-16 -mt-12">
          <div class="grid justify-start items-start grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16">
            <div class="">
              <nav class="flex text-sm font-medium border-b border-gray-200/20 text-gray-500">
                <button
                onClick={() => setShownTap("about")}
                  class={`${shownTap === "about" ? "border-b border-yellow-100 text-yellow-100":""} p-4 px-8 -mb-px`}
                >
                  About
                </button>

                <button
                     onClick={() => setShownTap("feature")}
                  class={`${shownTap === "feature" ? "border-b border-yellow-100 text-yellow-100":""} p-4 px-8 -mb-px hover:text-yellow-100`}
                >
                  Feature
                </button>
              </nav>

              {shownTap === "about" ? <ProjectAbout project={props.project}/> : shownTap === "feature" ? <ProjectFeature project={props.project}/> : ""}
            </div>
            {shownTap === "about" && props.project.video?<video
              src={`./videos/${props.project.video}`}
              muted
              autoPlay
              loop
            />:<div>
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
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
              <SwiperSlide>
                    <img
                        className="object-contain w-full h-[275px] pointer-events-none"
                        src={`./images/projects/${props.project.image}_${1}.png`}
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-contain w-full h-[275px] pointer-events-none"
                        src={`./images/projects/${props.project.image}_${2}.png`}
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-contain w-full h-[275px] pointer-events-none"
                        src={`./images/projects/${props.project.image}_${3}.png`}
                        alt="image slide 3"
                    />
                </SwiperSlide>  <SwiperSlide>
                    <img
                        className="object-contain w-full h-[275px] pointer-events-none"
                        src={`./images/projects/${props.project.image}_${4}.png`}
                        alt="image slide 4"
                    />
                </SwiperSlide>
            </Swiper>
           
      </div>}

          

            
          </div>
        </div>
      </section>
    </section>
  );
}
