import * as React from "react";
import ContactContainer from "./ContactContainer";
import MapComponent from "./MapComponent";

const Contact = () => {
  return (
    <ContactContainer>
      <div className="content">
        <div className="contact-info">
          <h1>Sumo Sushi</h1>
          <p>845 Sherbrooke Street West, Montreal, Quebec H3A 0G4</p>
          <p>(819) 555-0180</p>
          <hr></hr>
          <h2>Business Hours</h2>
          <p>Monday – Saturday: 11:30am – 10:30pm </p>
          <p>Sunday: 12:00pm – 10:00pm</p>
          <h2>Email</h2>
          <p>
            General inqueries: <br></br> contact@sumosushi.com
          </p>
        </div>
        <div className="map">
          <MapComponent />
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;
