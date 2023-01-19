import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Majiaqi from "../../Assets/Graphic/Majiaqi.png"
import Yangmi from "../../Assets/Graphic/Yangmi.png"
import Yangyang from "../../Assets/Graphic/Yangyang.png"
import Warmpp from "../../Assets/Graphic/Warmpp.png"
import Warmbk from "../../Assets/Graphic/Warmbk.png"
import Christ1 from "../../Assets/Graphic/Christ1.png"
import Christ2 from "../../Assets/Graphic/Christ2.png"
import Christ3 from "../../Assets/Graphic/Christ3.png"
import Christ4 from "../../Assets/Graphic/Christ4.png"
import Christ5 from "../../Assets/Graphic/Christ5.png"
import Guitar1 from "../../Assets/Graphic/Guitar1.png"
import Guitar2 from "../../Assets/Graphic/Guitar2.png"
import Guitar3 from "../../Assets/Graphic/Guitar3.png"
import Guitar4 from "../../Assets/Graphic/Guitar4.png"
import Guitar5 from "../../Assets/Graphic/Guitar5.png"
import HolW1 from "../../Assets/Graphic/HolW1.png"
import HolW2 from "../../Assets/Graphic/HolW2.png"
import HolW3 from "../../Assets/Graphic/HolW3.png"
import HolW4 from "../../Assets/Graphic/HolW4.png"
import HolW5 from "../../Assets/Graphic/HolW5.png"
import Huiyin1 from "../../Assets/Graphic/Huiyin1.PNG"
import Huiyin2 from "../../Assets/Graphic/Huiyin2.PNG"
import Huiyin3 from "../../Assets/Graphic/Huiyin3.PNG"
import Huiyin4 from "../../Assets/Graphic/Huiyin4.PNG"
import Huiyin5 from "../../Assets/Graphic/Huiyin5.PNG"
import Love1 from "../../Assets/Graphic/Love1.png"
import Love2 from "../../Assets/Graphic/Love2.png"
import Love3 from "../../Assets/Graphic/Love3.png"
import Love4 from "../../Assets/Graphic/Love4.png"
import Love5 from "../../Assets/Graphic/Love5.png"
import DesignCard from "./DesignCard"
import { DesignData } from "./DesignData";




function Graphic() {
    return (
        <Container fluid className="graphic-section">
        <Particle />
        <Container>
            <h1 className="graphic-heading">
                <strong className="purple">Photography & Graphic Design</strong>
            </h1>
            <br/>
            <br/>


            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <DesignCard />
            </Row>


        </Container>
        </Container>
    );
}

export default Graphic;