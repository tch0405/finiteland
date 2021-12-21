import React from 'react';
import image1 from '../images/5.png';
import image3 from '../images/bar.png';



function Services(){
    return (
        <div id='services'>
             <a href="https://drive.google.com/file/d/1Z8f1MrLa-01UBaNNR5kyZonSWB4sFWQ6/view?usp=sharing" without rel="noopener noreferrer" target="_blank">
             <h1>Whitepaper Download</h1>
            </a>
            <div className='s-heading'>
                <h1>Supported by</h1>
            </div>

            <ul >

                <li className='img1'>
                    <img src={image1} alt='img0' />
                    
                </li>

                

                <li className='img1'>
                    <img src={image3} alt='img0' />
                    
                </li>
    
            </ul>
            
   
        </div>
    )
}

export default Services;