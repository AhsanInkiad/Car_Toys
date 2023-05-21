import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const AllToys = () => {
    useEffect(() => {
        document.title = "Fast | All Toys";
      }, []);
    const [tabs, setTabs] = useState([]);
    const [tabs2, setTabs2] = useState([]);
    const {fpicId, fsetPicId} = useContext((AuthContext));

    useEffect(() => {
        fetch('https://car-toy-server-two.vercel.app/toys?limit=10')
            .then(res => res.json())
            .then(data => setTabs(data))
    }, [])

  
    useEffect(() => {
        fetch('https://car-toy-server-two.vercel.app/addedtoys?limit=10')
            .then(res => res.json())
            .then(data => setTabs2(data))
    }, [])

    return (
        <div>
            
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='text-white'> 
                            <th>Seller</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th >Available <br /> Quantity</th>
                            <th > View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tabs.map((tab) =>
                            tab.toysgula.map((toy) => (
                                <tr > {/* Make sure to add a unique key for each row */}
                                    <td>{toy.seller_name}</td>
                                    <td>{toy.name}</td>
                                    <td>{tab.category}</td>
                                    <td>{toy.price}</td>
                                    <td className='pl-8'>{toy.available_quantity}</td>
                                    <td><Link to={`/viewdetails3/${tab._id}`}> <button onClick={()=>fsetPicId(toy.picture)} className='btn btn-outline btn-info btn-xs'>View Details</button> </Link></td>
                                   
                                </tr>
                            ))
                        )}
                         {tabs2.map((toy) =>
                                <tr > {/* Make sure to add a unique key for each row */}
                                    <td>{toy.sellerName}</td>
                                    <td>{toy.toyName}</td>
                                    <td>{toy.toyCategory}</td>
                                    <td>{toy.toyPrice}</td>
                                    <td className='pl-8'>{toy.toyQuantity}</td>
                                    <td>  <Link to={`/viewdetails2/${toy._id}`}><button className='btn btn-outline btn-info btn-xs'>View Details</button></Link>  </td>
                                  
                                </tr>
                            
                        )}
                    </tbody>
                    <tfoot>
                        <tr className='text-white'>

                            <th>Seller</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available <br /> Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
    );
};

export default AllToys;