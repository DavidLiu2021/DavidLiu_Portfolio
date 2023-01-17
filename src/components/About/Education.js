import React from "react";
import Card from "react-bootstrap/Card";

function EDU() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <span className="purple"> Chinese University of Hong Kong, Shenzhen</span>
            <br />Sep 2019 – Mar 2023
            <br />Bachelor of Finance
            <br />
            <br />
            <span className="purple"> Rongcheng Third High School</span>
            <br />Sep 2016 – Jul 2019
            <br />The National College Entrance Examination (graduated among the top 1%)
          </p>
 
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default EDU;