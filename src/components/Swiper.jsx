import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Import Swiper modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
    return (
        <div className="py-10" style={{ width: "700px", margin: "auto" }}>
            <h1 className="text-3xl mx-auto text-center mb-4">React Swiper</h1>
                <Swiper
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Pagination, Navigation]}>
                    <SwiperSlide>
                        <div style={{ background: "#ff5733", height: "200px" }}>Slide 1</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ background: "#33c9ff", height: "200px" }}>Slide 2</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ background: "#75ff33", height: "200px" }}>Slide 3</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ background: "#ff33b5", height: "200px" }}>Slide 4</div>
                    </SwiperSlide>
                </Swiper>
        </div>
    );
}

