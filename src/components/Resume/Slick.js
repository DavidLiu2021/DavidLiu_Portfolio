import React, { useRef } from "react";
import Slider from "react-slick";
import { 
    FaArrowRight, 
    FaArrowLeft 
} from 'react-icons/fa';

function Slick() {
    const sliderRef = useRef();
    const settings = {
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        margin: 3,
        loop: true,
        autoplaySpeed: 3000,
        draggable: true,
        swipeToSlide: true,
        swipe: true,
    };
    const gotoNext = () => {
        sliderRef.current.slickNext();
    };
    const gotoPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <>
            <div className="slick-view">

                <div className="slick-heading">
                    <h1 style={{ color: "purple" }}>{props.title}</h1>
                </div>

                <div className="slick-body">
                        <Slider {...settings} ref={sliderRef}>
                            <div
                                className="single-slick"
                                key={props.id}
                            >
                                <div className="slick-container">
                                    <div className="slick-img">
                                        <img src={props.img}/>
                                    </div>
                                </div>
                            </div>
                        </Slider>


                        <button
                            className="prevBtn"
                            onClick={gotoPrev}
                            style={{ backgroundcolor: "purple" }}
                        >
                            <FaArrowLeft style={{ color: "white" }} />
                        </button>

                        <button
                            className="nextBtn"
                            onClick={gotoNext}
                            style={{ backgroundcolor: "purple" }}
                        >
                            <FaArrowRight style={{ color: "white" }} />
                        </button>
                </div>
            </div>

        </>
    );
}

export default Slick;