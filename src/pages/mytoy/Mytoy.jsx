import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import './Mytoy.css';
import { Link, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Mytoy = () => {
    useEffect(() => {
        document.title = "Fast | My Toy";
      }, []);
    const { user } = useContext((AuthContext));
    const [data, setData] = useState([]);

    const url = `https://car-toy-server-two.vercel.app/addedtoys?sellerEmail=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => { setData(data) })
    }, [])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-toy-server-two.vercel.app/addedtoys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(datas => {
                        console.log(datas);
                        if (datas.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = data.filter(toys => toys._id !== id);
                            setData(remaining);
                        }
                       
                    })
              
            }
        })
}

// const handleUpdate = id =>{
//     fetch(`https://car-toy-server-two.vercel.app/addedtoys/${id}`)
//     .then(res=> res.json())
//     .then(d=>{
//         console.log(d);
//         if(d.modifiedCount > 0){
//             // update state
//         }
//     })

// }
return (
    <div>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr className='text-white'>
                        <th>Delete</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Available Quantity</th>
                        <th>Update</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {data.map((toy) =>
                        <tr>
                            <th>
                                <button onClick={() => handleDelete(toy._id)} className=" Nabutton Nanoselect"><span className="Natext">Delete</span><span className="Naicon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                            </th>
                            <td className=''>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-32 h-32">
                                            <img src={toy.toyPic} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">{toy.toyName}</div>

                                    </div>
                                </div>
                            </td>
                            <td className='text-white'>
                                {toy.toyCategory}
                            </td>
                            <td className='text-white'>{toy.toyPrice}</td>
                            <td className='text-center text-white'>{toy.toyRating}</td>
                            <td className='text-center text-white'>{toy.toyQuantity}</td>
                            <th>
                                <Link to={`/updatetoy/${toy._id}`}><button className="btn btn-outline btn-success btn-xs">Update</button></Link>

                            </th>
                            <th>
                                <Link to={`/viewdetails2/${toy._id}`}> <button className="btn btn-outline btn-info btn-xs">View Details</button></Link>

                            </th>
                        </tr>)}


                </tbody>
                {/* foot */}
                <tfoot>
                    <tr className='text-white'>
                        <th>Delete</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Available Quantity</th>
                        <th>Update</th>
                        <th>Details</th>
                    </tr>
                </tfoot>

            </table>
        </div>
    </div>
);
};

export default Mytoy;