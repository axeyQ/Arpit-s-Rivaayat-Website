import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import { useRef } from "react";
import FeaturedCards from "./FeaturedCards";
import bg1 from "../assets/biryaniChicken.jpg";
import bg2 from "../assets/seekhKebab.jpg";
import bg3 from "../assets/chicken65.jpg";
import bg4 from "../assets/spBiryani.jpg";
const Featured1 = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className='featured1-div'>
      <h2>Our Featured Items</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className='mySwiper'
      >
        <SwiperSlide>
          <FeaturedCards
            category={"Main Course"}
            item1='Murg dum Biryani'
            item2='Ghosht Dum Biryani'
            item3='Paneer-e-sabz Biryani'
            bg={bg1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCards
            category={"Starters"}
            item1='Murg Seekh Kebab'
            item2='Ghosht Seekh Biryani'
            item3='Masala Andaa'
            bg={bg2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCards
            category={"Specials"}
            item1='Hyderabadi Chicken 65'
            item2='Rivaayati Murg Tangdi'
            item3='Rivaayati Murg Tawa Tikki'
            bg={bg3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCards
            category={"Platters"}
            item1='Special Veg Platter'
            item2='SPecial Non Veg Platter'
            item3='Chefs Special Biryan'
            bg={bg4}
          />
        </SwiperSlide>

        <div className='autoplay-progress' slot='container-end'>
          <svg viewBox='0 0 48 48' ref={progressCircle}>
            <circle cx='24' cy='24' r='20'></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Featured1;
