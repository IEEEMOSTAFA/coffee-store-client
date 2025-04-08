// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const UpdateCoffee = () => {
//     const coffee = useLoaderData();
//     const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

//     // State to handle form data
//     const [formData, setFormData] = useState({
//         name,
//         chef,
//         supplier,
//         taste,
//         category,
//         details,
//         photo: null
//     });

//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     // Handle input change
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     // Handle file change
//     const handleFileChange = (e) => {
//         setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
//     };

//     // Validate form
//     const validateForm = () => {
//         let newErrors = {};
//         if (!formData.name) newErrors.name = "Name is required";
//         if (!formData.supplier) newErrors.supplier = "Supplier is required";
//         if (!formData.taste) newErrors.taste = "Taste is required";
//         if (!formData.category) newErrors.category = "Category is required";
//         if (!formData.details) newErrors.details = "Details are required";

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     // Handle form submission
//     const handleUpdateCoffee = async (e) => {
//         e.preventDefault();
//         if (!validateForm()) return;

//         setIsSubmitting(true);

//         const updatedCoffee = { ...formData };
//         delete updatedCoffee.photo; // Remove the photo if not updating the image

//         try {
//             const response = await fetch(`https://coffee-store-server-4c3hgcc0r-ieee-mostafas-projects.vercel.app/coffee/${_id}`, {
//                 method: 'PUT',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(updatedCoffee),
//             });

//             const data = await response.json();
//             if (data.modifiedCount > 0) {
//                 Swal.fire({
//                     title: 'Success!',
//                     text: 'Coffee updated successfully!',
//                     icon: 'success',
//                     confirmButtonText: 'Cool'
//                 });
//             }
//         } catch (error) {
//             console.error('Error updating coffee:', error);
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
//             <h1 className="text-3xl text-purple-600 font-bold mb-4">Update Coffee</h1>
//             <form onSubmit={handleUpdateCoffee} className="space-y-4">
//                 {/* Name Field */}
//                 <div>
//                     <input
//                         type="text"
//                         name="name"
//                         placeholder="Name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded"
//                     />
//                     {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//                 </div>

//                 {/* Supplier Field */}
//                 <div>
//                     <input
//                         type="text"
//                         name="supplier"
//                         placeholder="Supplier"
//                         value={formData.supplier}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded"
//                     />
//                     {errors.supplier && <p className="text-red-500 text-sm">{errors.supplier}</p>}
//                 </div>

//                 {/* Taste Field */}
//                 <div>
//                     <input
//                         type="text"
//                         name="taste"
//                         placeholder="Taste"
//                         value={formData.taste}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded"
//                     />
//                     {errors.taste && <p className="text-red-500 text-sm">{errors.taste}</p>}
//                 </div>

//                 {/* Category Field */}
//                 <div>
//                     <input
//                         type="text"
//                         name="category"
//                         placeholder="Category"
//                         value={formData.category}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded"
//                     />
//                     {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
//                 </div>

//                 {/* Details Field */}
//                 <div>
//                     <textarea
//                         name="details"
//                         placeholder="Details"
//                         value={formData.details}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded"
//                     />
//                     {errors.details && <p className="text-red-500 text-sm">{errors.details}</p>}
//                 </div>

//                 {/* Photo Upload */}
//                 <div>
//                     <input
//                         type="file"
//                         name="photo"
//                         onChange={handleFileChange}
//                         className="w-full p-2 border rounded"
//                         accept="image/*"
//                     />
//                     {errors.photo && <p className="text-red-500 text-sm">{errors.photo}</p>}
//                     {formData.photo && (
//                         <div className="mt-4">
//                             <p className="text-gray-700">Selected Image:</p>
//                             <img
//                                 src={URL.createObjectURL(formData.photo)}
//                                 alt="Selected"
//                                 className="w-full h-48 object-cover rounded-lg"
//                             />
//                         </div>
//                     )}
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
//                 >
//                     {isSubmitting ? "Updating Coffee..." : "Update Coffee"}
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default UpdateCoffee;
















import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, chef, taste, photo, supplier, category, details } = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;

        const newCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(newCoffee)

        // send data to the server and database
        fetch(`https://coffee-store-server-4c3hgcc0r-ieee-mostafas-projects.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    console.log('successfully updated');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    e.target.reset();
                }
            })

    }

    return (
        <div className='lg:w-3/4 mx-auto'>
            <div className="text-center p-10">
                <h1 className="text-5xl font-bold">Update Coffee!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
            </div>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form onSubmit={handleUpdateCoffee} className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={name} placeholder="coffee name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" name='chef' defaultValue={chef} placeholder="chef name" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name='supplier' defaultValue={supplier} placeholder="coffee supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name='taste' defaultValue={taste} placeholder="taste name" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name='category' defaultValue={category} placeholder="coffee Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name='details' defaultValue={details} placeholder="Coffee Details" className="input input-bordered" required />
                        </div>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' defaultValue={photo} placeholder="Photo url" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;