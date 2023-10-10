import React from "react";
import mensImg from "../../Assets/Images/Subscription/mensImg.png";
import womensImg from "../../Assets/Images/Subscription/womens.png";
import './Subscription.css'

const Subscription = () => {
  return (
    <>
      <div className="flex subscriptionContainer font-popins">
        <div className="mensImgBlock">
          <img src={mensImg} alt="mensImg" />
        </div>
        <div className="contentBlock font-popins">
        <div className="text">
        <h3 className="headerText">Subscribe To Our Newsletter</h3>
          <p className="bodyText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>
          <h4 className="mailText">michael@ymail.com</h4>
        </div>
        <div className=" buttonContainer">
            <button className=" button">Subscribe Now</button>
        </div>
        </div>
        <div className="hidden womenImgBlock">
          <img src={womensImg} alt="mensImg" />
        </div>
      </div>
    </>
  );
};

export default Subscription;
