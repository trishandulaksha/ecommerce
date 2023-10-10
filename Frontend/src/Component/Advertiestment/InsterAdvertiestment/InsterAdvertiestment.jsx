import insterImg1 from '../../../Assets/Images/IntergramImg/interImg1.png' 
import insterImg2 from '../../../Assets/Images/IntergramImg/interImg2.png' 
import insterImg3 from '../../../Assets/Images/IntergramImg/interImg3.png' 
import insterImg4 from '../../../Assets/Images/IntergramImg/interImg4.png' 
import insterImg5 from '../../../Assets/Images/IntergramImg/interImg5.png' 
import insterImg6 from '../../../Assets/Images/IntergramImg/interImg6.png' 
import insterImg7 from '../../../Assets/Images/IntergramImg/interImg7.png'
import "./StyleInsterAdvertiestment.css" 

const InsterAdvertiestment = () => {
  return (
    <div className='m-1'>
        <div className="w-3/5 m-5 ml-auto mr-auto text-center HeaderText font-popins Header">
            <h1 className='text-2xl font-extrabold from-neutral-950'>Follow Us On Instagram</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
        </div>
        <div className="flex InsterImageSet">
            <div className="mt-7 img1">
            <img src={insterImg1} alt="img1" />
            </div>
            <div className="img2">
            <img src={insterImg2} alt="img2" />
            </div>
            <div className="mt-7 img3">
            <img src={insterImg3} alt="img3" />
            </div>
            <div className=" img4">
            <img src={insterImg4} alt="img4" />
            </div>
            <div className="mt-7 img5">
        
            <img src={insterImg5} alt="img5" />
            </div>
            <div className=" img6">
        
            <img src={insterImg6} alt="img6" />
            </div>
            <div className="mt-7 img7">
        
            <img src={insterImg7} alt="img7" />
            </div>
            
            
            
        

        </div>
    </div>
  )
}

export default InsterAdvertiestment