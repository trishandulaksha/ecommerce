import "./DealsSection.css";
import Timecountdown from "./Timecountdown";
import slide1Img from'../../../Assets/Images/SlidesImages/slide1.png'
import slide2Img from'../../../Assets/Images/SlidesImages/slide2.png'
import slide3Img from'../../../Assets/Images/SlidesImages/Slide3.png'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useState } from 'react';


const DealsSection  = ( )=> {

  const targetTime =new Date("2023-11-31 23:59:59")

  const slides = [
    { id: 1, image: slide1Img, discount: "30% OFF", description: "01 - Spring Sale" },
    { id: 2, image: slide2Img, discount: "20% OFF", description: "02 - Summer Sale" },
    { id: 3, image: slide3Img, discount: "40% OFF", description: "03 - Autumn Sale" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const setpreimage = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const setenextimage = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  
  return (
    <div className="dealsarea" >
       <div className="textarea">
        <h3>Deals Of The Month</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, minus
          voluptates similique rem veritatis, aliquid quisquam velit magni atque
          quasi, sapiente esse mollitia facilis? Officia qui repellendus porro
          unde doloremque!
        </p>
        <button className="buynowbtn">Buy Now</button>
      </div>

      <div className="carousel">
        <div className="imagesSet">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active' : ''}${
                index === (currentSlide - 1 + slides.length) % slides.length ? 'prev' : ''
              } ${index === (currentSlide + 1) % slides.length ? 'next' : ''} `}
            >
              <img src={slide.image} alt={`slide${slide.id}`} />
              <div className="discountDetails" style={{display:index === currentSlide ? 'block':'none'}}>
                <p>{slide.description}</p>
                <span>{slide.discount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="items-center justify-center text-center arrowhead" >
        <ArrowCircleLeftIcon sx={{ width: '72px', height: '42px' }} onClick={setpreimage} className="leftarrow hover:text-pink-950" />
        <ArrowCircleRightIcon sx={{ width: '72px', height: '42px' }} onClick={setenextimage} className="rightarrow hover:text-pink-950"  />
      </div>
      
      <div className="timeCountdown">
        <h3>Hurry,Before it's too Late !</h3>
          
          <Timecountdown targetTime = {targetTime}/>
          </div> 
        
      
     
    </div>
  );
};

export default DealsSection;
