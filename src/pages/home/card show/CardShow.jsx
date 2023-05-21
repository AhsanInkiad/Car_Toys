import React from 'react';
import './CardShow.css';

import { FcAutomotive, FcAssistant } from "react-icons/fc";

import { AiFillCar,AiOutlineDashboard } from "react-icons/ai";

const CardShow = () => {
    return (
        <div className='Qbody '>
            <div className="Qcontainer">
                <div className="Qcard">
                    <div className="Qbox">
                        <div className="Qcontent">
                            <h2>01</h2>
                            <h3>Reliable</h3>
                            <p>Established for over 10 years, our reliable car toy shop offers a wide selection of quality products from reputable brands.</p>
                            <a > Reliable <AiFillCar className='inline text-xl'></AiFillCar> </a>
                        </div>
                    </div>
                </div>

                <div className="Qcard">
                    <div className="Qbox">
                        <div className="Qcontent">
                            <h2>02</h2>
                            <h3>Speed</h3>
                            <p >We offer a wide selection of high-quality car toys from reputable brands, ensuring that our customers have access.</p>
                            <a >Speed <AiOutlineDashboard className='align-center inline text-xl'></AiOutlineDashboard> </a>
                        </div>
                    </div>
                </div>

                <div className="Qcard">
                    <div className="Qbox">
                        <div className="Qcontent">
                            <h2>03</h2>
                            <h3>Service</h3>
                            <p>Our dedicated and knowledgeable staff provide excellent customer service, assisting with product selection, offering expert advice.</p>
                            <a>Service <FcAssistant className='inline text-xl'></FcAssistant> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardShow;