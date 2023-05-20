import React from 'react';
import './ViewDetails2.css'
import { useLoaderData } from 'react-router-dom';
import { GiPriceTag } from "react-icons/gi";
import { AiOutlineMail, AiFillCaretDown } from "react-icons/ai";
import { FaRegStar, FaStar } from "react-icons/fa";

import Rating from 'react-rating';

const ViewDetails2 = () => {
    const filteredToys = useLoaderData();
    
    return (
        <div className='bg-[#0E0F0F] pt-12'>

        <img className='mx-auto rounded-3xl border-4 border-[#EAB902] w-2/5 h-1/4 ' src={filteredToys.toyPic} />
        <p className='text-center text-3xl my-4 text-white'>Name: {filteredToys.toyName}</p>
        <p className='text-center mb-12'>
            <Rating className=' rate mb-3 text-[#EAB902]'
                placeholderRating={parseInt(filteredToys.toyRating)}
                readonly
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar></FaStar>}
                fullSymbol={<FaStar></FaStar>}
            >
            </Rating>
        </p>
        <p className='text-center text-white text-2xl'>Hover below for <br /> detailed information <AiFillCaretDown className='inline text-[#EAB902]'></AiFillCaretDown> </p>
        <div className='detailgulo mb-32 '>
            <div className="Dcontainer w-3/4  md:flex md:justify-between mx-auto">
                <div className="Dcard ">
                    <div className="face face1">
                        <div className="Dcontent">
                            <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
                            <h3>Details</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="Dcontent">
                            <p className='font-semibold text-black'><GiPriceTag className='inline'></GiPriceTag> : {filteredToys.toyPrice} <br /> Rating: {filteredToys.toyRating} <br /> Available Quantity: {filteredToys.toyQuantity} </p>

                        </div>
                    </div>
                </div>
                <div className="Dcard">
                    <div className="face face1">
                        <div className="Dcontent">
                            <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
                            <h3 className='text-center'> Seller Info</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="Dcontent">
                            <p className='font-semibold text-black'>Name: {filteredToys.sellerName} <br /> <AiOutlineMail className='inline'></AiOutlineMail> : {filteredToys.sellerEmail}</p>

                        </div>
                    </div>
                </div>
                <div className="Dcard">
                    <div className="face face1">
                        <div className="Dcontent">
                            <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
                            <h3>Description</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="Dcontent">
                            <p className='font-semibold text-black'>{filteredToys.toyDescription}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ViewDetails2;