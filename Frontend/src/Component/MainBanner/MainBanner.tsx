import leftimg from '../../Assets/Images/bannerImgleft.png';
import rightimg from '../../Assets/Images/bannerimgright.png';
import centerdown from '../../Assets/Images/bannerimgcenterdwn.png';
import centerup from '../../Assets/Images/bannerimgecenterup.png';
import logoimg from '../../Assets/Images/logoimg.png';

import './MainBanner.css'



export const MainBanner = () => {
  return (
    <div className='mainBannner'>
      <div className="bannerset">

      <div className="p-1 leftside">
        <img src={leftimg} alt="lefftimg" />
      </div>
      <div className="center ">
        <div className="p-1 ceterup">
          <img src={centerup} alt="centerup" />
        </div>
        <div className=" centerText">
            <p className='text1'>ULTIMATE</p>
            <p className='text2'>SALE</p>
            <p className='text3'>NEW COllECTION</p>

            <button className='shopnowbtn'>SHOP NOW</button>
        </div>
        <div className="p-1  centerdwn">
        <img src={centerdown} alt="centerdown" />
        </div>
        
      </div>
      <div className="p-1 rightside">
        <img src={rightimg} alt="rightimg" />
        
      </div>
      
      </div>
      <div><img src={logoimg} alt="logos" /></div>
      
    </div>
  )
}
