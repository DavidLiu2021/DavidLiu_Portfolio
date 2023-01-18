import React, { useRef } from "react";
import Slider from "react-slick";
import { 
    FaArrowRight, 
    FaArrowLeft 
} from 'react-icons/fa';
import { DesignData } from "./DesignData.js";


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
        {DesignData.length > 0 && (
            <div className="slick-view">
                <div className="slick-heading">
                    <h1 style={{ color: "purple" }}>Graphic Design</h1>
                </div>

                <div className="slick-body">
                        <Slider {...settings} ref={sliderRef}>
                            {DesignData.map((props) => (
                                <div className="single-slick" key={props.id}>
                                <div className="slick-container">
                                    <div className="slick-img">
                                        <img src={props.img} alt={props.title}/>
                                    </div>
                                </div>
                                </div>
                            ))}
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
        )};
        </>
    );
}

export default Slick;



