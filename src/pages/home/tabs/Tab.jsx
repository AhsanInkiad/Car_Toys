import React, { useState } from 'react';
import './Tab.css'

const Tab = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [

        {
            id: 1,
            category: "Vintage_Car",
            toys: [
                {
                    "picture": "sports_car1.jpg",
                    "name": "Speedster GT",
                    "price": "$29.99",
                    "rating": 4.5,
                    "seller_name": "Toni Kroos",
                    "seller_email": "tonibhai@gmail.com",
                    "available_quantity": 20,
                    "description": "Very good car. Bissho shera"
                },
                {
                    "picture": "sports_car2.jpg",
                    "name": "Turbo Racer",
                    "price": "$19.99",
                    "rating": 4.2,
                    "seller_name": "Toni Kroos",
                    "seller_email": "tonibhai@gmail.com",
                    "available_quantity": 20,
                    "description": "Very good car. Bissho shera"

                }
            ]
        },
        {
            id: 2,
            category: "Off-Road_Vehicles",
            toys: [
                {
                    "picture": "offroad_car1.jpg",
                    "name": "Mud Runner",
                    "price": "$24.99",
                    "rating": 4.7,
                    "seller_name": "Toni Kroos",
                    "seller_email": "tonibhai@gmail.com",
                    "available_quantity": 20,
                    "description": "Very good car. Bissho shera"
                },
                {
                    "picture": "offroad_car2.jpg",
                    "name": "Trail Blazer",
                    "price": "$32.99",
                    "rating": 4.4,
                    "seller_name": "Toni Kroos",
                    "seller_email": "tonibhai@gmail.com",
                    "available_quantity": 20,
                    "description": "Very good car. Bissho shera"
                }
            ]
        },

        {
            id: 3,
            category: "Monster_Trucks",
            toys: [
                {
                    "picture": "monster_truck1.jpg",
                    "name": "Goliath",
                    "price": "$34.99",
                    "rating": 4.3,
                    "seller_name": "Toni Kroos",
                    "seller_email": "tonibhai@gmail.com",
                    "available_quantity": 20,
                    "description": "Very good car. Bissho shera"
                },
                {
                    "picture": "monster_truck2.jpg",
                    "name": "Bigfoot",
                    "price": "$29.99",
                    "rating": 4.1,
                    "seller_name": "Toni Kroos",
                    "seller_email": "tonibhai@gmail.com",
                    "available_quantity": 20,
                    "description": "Very good car. Bissho shera"
                }
            ]
        },

    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='container pb-32'>
            <div className='tabs lg:grid lg:grid-cols-3'>
                {tabs.map((tab) =>
                    <button id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.category}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab) =>
                    <div >
                        {currentTab === `${tab.id}` && <div><p className='title'>{tab.category}</p><p>{tab.category}</p></div>}
                    </div>
                )}
            </div>
        </div>
    );
}
export default Tab;