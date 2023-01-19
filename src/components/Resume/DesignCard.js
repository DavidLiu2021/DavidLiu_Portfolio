import React, { useRef } from "react";
import Slider from "react-slick";
import { 
    FaArrowRight, 
    FaArrowLeft 
} from 'react-icons/fa';
import Yangmi from "../../Assets/Graphic/Yangmi.png";
import Warmpp from "../../Assets/Graphic/Warmpp.png";


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
        // autoplay: true,
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
            <div className="graph">
                <div className="graph-heading">
                    <h1 style={{ color: "white" }}>Graphic Design</h1>
                </div>

                <div className="graph-body">
                    <Slider {...settings} ref={sliderRef}>
                        <div className="single-graph">
                            <div className="graph-img">
                                <img src={Yangmi}/>
                            </div>
                        </div>
                        <div className="single-graph">
                            <div className="graph-img">
                                <img src={Warmpp} alt="Yangmi"/>
                            </div>
                        </div>                            
                    </Slider>

                    <button
                        className="prevBtn"
                        onClick={gotoPrev}
                        style={{ color: "blue" }}
                    >
                        <FaArrowLeft style={{ color: "blue" }} />
                    </button>

                    <button
                        className="nextBtn"
                        onClick={gotoNext}
                        style={{ color: "blue" }}
                    >
                        <FaArrowRight style={{ color: "blue" }} />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Slick;



