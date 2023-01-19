import React, { useRef } from "react";
import Slider from "react-slick";
import { 
    FaArrowRight, 
    FaArrowLeft 
} from 'react-icons/fa';
import { DesignData } from "./DesignData";


function Slick() {
    const sliderRef = useRef();
    const settings = {
        // dots: true,
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
            <div className="graph">
                <div className="graph-heading">
                    <h1 style={{ color: "purple" }}>Graphic Design</h1>
                </div>

                <div className="graph-body">
                    <div className="graph-slider">
                        <Slider {...settings} ref={sliderRef}>
                            {DesignData.map((props) => (
                                <div className="single-graph" key={props.id}>
                                    <div className="graph-container">
                                        <div className="graph-img">
                                            <img src={props.img} alt={props.title}/>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>


                        <button
                            className="prevBtn"
                            onClick={gotoPrev}
                            style={{ color: "purple" }}
                        >
                            <FaArrowLeft style={{ color: "purple" }} />
                        </button>

                        <button
                            className="nextBtn"
                            onClick={gotoNext}
                            style={{ color: "purple" }}
                        >
                            <FaArrowRight style={{ color: "purple" }} />
                        </button>
                    </div>
                </div>
            </div>
        )};
        </>
    );
}

export default Slick;



