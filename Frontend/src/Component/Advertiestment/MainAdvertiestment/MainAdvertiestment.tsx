import peakyBlinders from '../../../Assets/Images/peakyBlinders.png'
import './MainAdvertistment.css';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PhoneIcon from '@mui/icons-material/Phone';
import VerifiedIcon from '@mui/icons-material/Verified';

const MainAdvertiestment = () => {
  return (
    <> 
    
       <div className='mt-12 AdvertiestmentContainer'>
        <div className="advertiestmentImage">
            <img src={peakyBlinders} alt="Advertiestment" className='ImageAdd'/>


        </div>
        <div className=" addContenttexts">
        <div className="text-gray-400 addHeader font-popins ">
            <p>Women Collection</p>
            <h1 className='pt-4 text-3xl font-extrabold'>Peaky Blinders</h1>

        </div>
        <div className="addContent ">
            <h3 className='pt-4 font-bold '>Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis.</p>

        </div>
        <div className="mt-4 mb-2 size">
           <p> Size: <span className='p-2 text-white bg-black rounded-xl'>M</span></p>

        </div>
        <div className="pt-3 price">
            <p className='text-3xl font-bold '>$100 <span className='text-2xl font-semibold' >.00</span></p>

        </div>
        <div className="pt-4 BuyButton">
            <button className='pt-2 pb-2 pl-5 pr-5 text-white bg-black rounded-lg BuyBtn'>Buy Now</button>
        </div>


        </div>
            </div>

        <div className="flex justify-between p-5 Details">
            
                <div className="flex hq ">
                    <VolunteerActivismIcon sx={{width:40,height:40,paddingTop:1}}/>
                    <div className="info">
                        <p>High Quality</p>
                        <p>crafted from top materials</p>
                    </div>
                </div>
                <div className="flex wrntyProtection">
                    <LocalShippingIcon sx={{width:40,height:40,paddingTop:1}}/>
                    <div className="wrntyinfo">
                        <p>Warranty Protection</p>
                        <p>Over 2 year</p>
                    </div>
                </div>
                <div className="flex freeShipping">
                    <VerifiedIcon sx={{width:40,height:40,paddingTop:1}}/>
                    <div className=" shippinginfo">
                        <p>Free Shipping</p>
                        <p>Order over 150$</p>
                    </div>
                </div>
                <div className="flex support">
                    <PhoneIcon sx={{width:40,height:40,paddingTop:1}}/>
                    <div className="supportinfo">
                        <p>24/7 Support</p>
                        <p>Dedicated Support</p>
                    </div>
                </div>
            
            </div>    

    </>

  )
}

export default MainAdvertiestment