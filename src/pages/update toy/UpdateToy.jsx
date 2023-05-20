import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    

    const { id } = useParams();
    console.log(id);

    const handleConfirm = event => {
        event.preventDefault()
        const form = event.target;
        const uprice = form.uprice.value;
        const uquantity = form.uquantity.value;
        const udescription = form.udescription.value;
        console.log("hi");
        fetch(`http://localhost:5000/addedtoys/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                toyPrice: uprice,
                toyQuantity: uquantity,
                toyDescription: udescription
            })
        })
            .then(res => res.json())
            .then(d => {
                console.log(d);
                event.target.reset();
                if (d.modifiedCount > 0) {
                    // update state
                    Swal.fire(
                        'Good job!',
                        'Your toy has been updated! See it on MY TOY page',
                        'success'
                      )
                }
            })


    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-white font-bold">Update Information!</h1>
                    <p className="py-6">Please be sure before you update an information!</p>
                </div>
                <form onSubmit={handleConfirm} className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className=" card-body">
                        <div className=" form-control">
                            <label className="label">
                                <span className="text-white font-semibold text-xl label-text">Price</span>
                            </label>
                            <input type="text" placeholder="update price" name='uprice' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white font-semibold text-xl label-text">Available Quantity</span>
                            </label>
                            <input type="text" placeholder="update quantity" name='uquantity' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white font-semibold text-xl label-text">Detailed Description</span>
                            </label>
                            <input type="text" placeholder="update description" name='udescription' className="input input-bordered" />

                        </div>
                        <div className=" form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Confirm Update" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;