import React, { useContext, useEffect, useState } from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import './Tab.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Tab = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const [tabs, setTabs] = useState([]);
    const {picId, setPicId} = useContext((AuthContext));

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setTabs(data.slice(0, 3)))
    },[])

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    console.log(tabs)

 

    return (
        <div className='container pb-32'>
            <div className='tabs lg:grid lg:grid-cols-3'>
                {tabs.map((tab) =>
                    <button id={tab.c_id} disabled={currentTab === `${tab.c_id}`} onClick={(handleTabClick)}>{tab.category}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab) =>
                    <div >
                        {currentTab === `${tab.c_id}` && <div>

                            <div className=' lg:flex md:gap-6 lg:justify-between m-12'>
                                {
                                    tab.toysgula.map((toy) =>
                                        <div className="card mb-10 drop-shadow-2xl lg:card-side bg-[#1A1A1A] shadow-xl">
                                            <figure><img className='h-40 w-full   lg:h-full lg:w-64' src={toy.picture} alt="Album" /></figure>
                                            <div className="card-body">
                                                <h2 className="font-semibold text-white">Name: {toy.name}</h2>
                                                <p className='font-semibold text-white'>Price: {toy.price}</p>
                                                <p className='font-semibold text-white'>Rating: {toy.rating}</p>
                                                <Rating className='rate mb-3 text-[#EAB902]'
                                                    placeholderRating={toy.rating}
                                                    readonly
                                                    emptySymbol={<FaRegStar></FaRegStar>}
                                                    placeholderSymbol={<FaStar></FaStar>}
                                                    fullSymbol={<FaStar></FaStar>}
                                                ></Rating>
                                                <div className="card-actions ">
                                                    <Link to={`/details/${tab._id}`}><button onClick={() => setPicId(toy.picture)} className="btn btn-primary">View Details</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>

                        </div>}
                    </div>
                )}
            </div>
        </div>
    );
}
export default Tab;