import feedback1img from "../../Assets/Images/FeedbackImg/Feedback1.png";
import feedback2img from "../../Assets/Images/FeedbackImg/Feedback2.png";
import StarIcon from "@mui/icons-material/Star";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import "./customerFeedback.css";
import { useState } from "react";

const starReviews = () => {
  const startIcons = [];
  for (let i = 0; i < 5; i++) {
    startIcons.push(<StarIcon key={i} sx={{ color: "gold" }} />);
  }
  return startIcons;
};

const feedbackData = [
  {
    imgUrl: feedback1img,
    message:
      "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    review: starReviews(),
    name: "James.K",
    position: "Travelor",
  },

  {
    imgUrl: feedback2img,
    message:
      "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    review: starReviews(),
    name: "James.K",
    position: "Travelor",
  },

  {
    imgUrl: feedback2img,
    message:
      "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    review: starReviews(),
    name: "James.K",
    position: "Travelor",
  },
];

const CustomerFeedBack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
    console.log(currentIndex);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1
    );

    console.log(currentIndex);
  }; 

  return (
    <>
      <div className=" feedbackContainer">
        <div className="justify-center pt-6 text-center header">
          <h1 className="text-xl font-extrabold sm:text-4xl font-popins">
            This Is What Our Customers Say
          </h1>
          <p className="text-xs text-center sm:text-xs font-popins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis
          </p>
        </div>
        <div className="flex feedbackdata">
          {feedbackData.map(
            ({ imgUrl, message, review, name, position }, index) => {
              const slidercontainer =
                currentIndex === index
                  ? "activeslide"
                  : currentIndex === (index + 1) % feedbackData.length
                  ? "nextslide"
                  : currentIndex ===
                    (index - 1 + feedbackData.length) % feedbackData.length
                  ? "prevSlide"
                  : "";

              return (
                <div
                  key={index}
                  className={`sliderContainer ${slidercontainer}`}
                >
                  <div className="imgContainer">
                    <img src={imgUrl} alt="userImg" className="w-full h-full" />
                  </div>
                  <div className="messageBox">
                    <div className="message">
                      <p className="font-popins msgText">{message}</p>
                    </div>
                    <div className="review">
                      <p>{review}</p>
                    </div>

                    <div className="name ">
                      <h2 className="text-3xl font-extrabold textName font-popins">
                        {name}
                      </h2>
                    </div>
                    <div className="position">
                      <p className="font-popins positionText">{position}</p>
                    </div>
                  </div>
                </div>
              );
            } 
          )}
        </div>
        <div className="relative arrowheadIcon">
          <ArrowCircleLeftIcon
            sx={{
              width: 40,
              height: 40,
              color: "white",
              backgroundColor: "black",
              borderRadius: "50%",
              marginRight: 2,

            }}
            onClick={prevSlide}

            className="hover:bg-sky-700"
          />
          <ArrowCircleRightIcon
            sx={{
              width: 40,
              height: 40,
              color: "white",
              backgroundColor: "black",
              borderRadius: "50%",
            }}
            onClick={nextSlide}
            
            className="hover:bg-sky-700"
          />
        </div>
      </div>
    </>
  );
};

export default CustomerFeedBack;
