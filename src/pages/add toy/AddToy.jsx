import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const AddToy = () => {
    const { user } = useContext(AuthContext);
    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const pic_URL = form.pic_URL.value;
        const toy_name = form.toy_name.value;
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const toy_category = form.toy_category.value;
        const toy_price = form.toy_price.value;
        const toy_rating = form.toy_rating.value;
        const toy_quantity = form.toy_quantity.value;
        const toy_description = form.toy_description.value;

        const addedToy = {
            toyPic: pic_URL,
            toyName: toy_name,
            sellerName: seller_name,
            sellerEmail : seller_email,
            toyCategory : toy_category,
            toyPrice : toy_price,
            toyRating : toy_rating,
            toyQuantity : toy_quantity,
            toyDescription : toy_description
        }

        console.log(addedToy);
        fetch('http://localhost:5000/addedtoys', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addedToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    'Your toy has been added!',
                    'success'
                  )
            }
        })

    }
    return (

        <div>
            <h2 className='text-white font-bold text-3xl'>Add Toy Page</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form onSubmit={handleAddToy} className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body ">
                            <div className=' lg:grid lg:grid-cols-2 lg:gap-6'>
                                {/* Pic url */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Picture URL</span>
                                    </label>
                                    <input type="text" placeholder="picture URL" name="pic_URL" className="input input-bordered" />
                                </div>


                                {/* Pic name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name="toy_name" className="input input-bordered" />
                                </div>
                            </div>


                            {/* Seller name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white">Seller Name</span>
                                </label>
                                <input type="text" placeholder="seller name" defaultValue={user.displayName} name="seller_name" className="input input-bordered" />
                            </div>


                            {/* Seller email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white">Seller Email</span>
                                </label>
                                <input type="text" defaultValue={user.email} placeholder="seller email" name="seller_email" className="input input-bordered" />
                            </div>

                            <div className='lg:grid lg:grid-cols-2 lg:gap-6'>
                                {/* Sub Category */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Category</span>
                                    </label>
                                    <input type="text" placeholder="name" name="toy_category" className="input input-bordered" />
                                </div>


                                {/* Price */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Price</span>
                                    </label>
                                    <input type="text" placeholder="price" name="toy_price" className="input input-bordered" />
                                </div>

                            </div>

                            <div className='lg:grid lg:grid-cols-2 lg:gap-6'>
                                {/* Rating */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Rating</span>
                                    </label>
                                    <input type="text" placeholder="rating" name="toy_rating" className="input input-bordered" />
                                </div>


                                {/* Available Quantity */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Available Quantity</span>
                                    </label>
                                    <input type="text" placeholder="available quantity" name="toy_quantity" className="input input-bordered" />
                                </div>

                            </div>



                            {/* Detail Description */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white">Detail Description</span>
                                </label>
                                <input type="text" placeholder="description" name="toy_description" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Add a toy" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToy;