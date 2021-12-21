import React from 'react';
import img0 from '../images/git.png';
import img1 from '../images/ti.png';
import img2 from '../images/tele.png';
import img3 from '../images/disc.png';


function Subscribe(){
    return (
        <div id='subscribe'>
            
            <ul className="icon" >

                
                
                <li>
                    <a href='https://github.com/FiniteLand?fbclid=IwAR3vBX3y5pQRAQNia9YF4pvUmmEPsXEtYwFU58Nt8hJU-n7zi0aAghWMwhU' target='_blank' rel="noreferrer">
                    <img src={img0} alt='img0' />
                    </a>
                </li>

                <li>
                    <a href='https://twitter.com/finiteland_io?s=21' target='_blank' rel="noreferrer">
                    <img src={img1} alt='img1' />
                    </a>
                </li>

                <li>
                    <a href='https://t.me/finiteland_io' target='_blank' rel="noreferrer">
                    <img src={img2} alt='img2' />
                    </a>
                </li>

                <li>
                    <a href='https://discord.gg/Cz37HHrcEd' target='_blank' rel="noreferrer">
                    <img src={img3} alt='img3' />
                    </a>
                </li>

                
    
            </ul>

            <p>
            All trademarks and copyrights belong to their respective owners.
            </p>
        </div>
            
       
    )
}

export default Subscribe;