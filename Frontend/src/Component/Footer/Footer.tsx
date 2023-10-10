import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
   <>
   <div className="inline-block footerContainer">
  <div className=" hrLine">
    <hr/>
  </div>
    <div className="flex justify-between footerContent">

    
        <div className="inline-block logo">
            <h1 className='text-lg font-extrabold font-popins logoText'>FASCO</h1>
        </div>
        <div className="inline-block navList">
            <ul className="flex font-semibold footerListItem font-popins">
                <li>Support Center</li>
                <li>Invoicing</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>FAQs</li>
            </ul>
        </div>
        
    </div>
    
    </div>
    <div className="inline-block copyRightText" >
    <p className='text-xs font-popins'>Copyright &copy  2022 FASCO .  All Rights Reseved</p>
    </div>
   </>
  )
}
