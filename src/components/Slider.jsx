import React from "react";
import Slider from "react-slick";
import SliderImg from "../assets/image/png/hero-img.png";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="max-w-[1140px] mx-auto max-h-[500px] my-10 overflow-hidden py-5">
            <h1 className="text-3xl mx-auto text-center mb-4">React slick slider</h1>
            <Slider {...settings}>
                <div className="bg-blue-700 py-3 px-3">
                    <img className="max-w-[200px] mx-auto" src={SliderImg} alt="img-1" />
                    <h3 className="mx-auto max-w-[400px] text-center text-2xl text-white">Promotional landing page for our favorite show</h3>
                    <p className="max-w-[400px] text-center mx-auto text-white">Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
                </div>
                <div className="bg-blue-700 py-3 px-3">
                    <img className="max-w-[200px] mx-auto" src={SliderImg} alt="img-1" />
                    <h3 className="mx-auto max-w-[400px] text-center text-2xl text-white">Promotional landing page for our favorite show</h3>
                    <p className="max-w-[400px] text-center mx-auto text-white">Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
                </div>
                <div className="bg-blue-700 py-3 px-3">
                    <img className="max-w-[200px] mx-auto" src={SliderImg} alt="img-1" />
                    <h3 className="mx-auto max-w-[400px] text-center text-2xl text-white">Promotional landing page for our favorite show</h3>
                    <p className="max-w-[400px] text-center mx-auto text-white">Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
                </div>
                <div className="bg-blue-700 py-3 px-3">
                    <img className="max-w-[200px] mx-auto" src={SliderImg} alt="img-1" />
                    <h3 className="mx-auto max-w-[400px] text-center text-2xl text-white">Promotional landing page for our favorite show</h3>
                    <p className="max-w-[400px] text-center mx-auto text-white">Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
                </div>
                <div className="bg-blue-700 py-3 px-3">
                    <img className="max-w-[200px] mx-auto" src={SliderImg} alt="img-1" />
                    <h3 className="mx-auto max-w-[400px] text-center text-2xl text-white">Promotional landing page for our favorite show</h3>
                    <p className="max-w-[400px] text-center mx-auto text-white">Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
                </div>
            </Slider>
        </div>
    );
}