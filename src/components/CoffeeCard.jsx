
// import React from 'react';
// import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';
// const CoffeeCard = ({ coffee,coffees, setCoffees }) => {
//     const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

//     const handleDelete = _id => {
//         console.log(_id);

//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {


//                 // console.log('Delete Confirm :');


//                 fetch(`https://coffee-store-server-4c3hgcc0r-ieee-mostafas-projects.vercel.app/coffee/${_id}`, {
//                     method:'DELETE'
//                 })
//                     .then(res => res.json())
//                     .then(data => console.log(data));
//                 if (data.deletedCount > 0) {
//                       Swal.fire({
//                         title: "Deleted!",
//                         text: "Your food has been deleted.",
//                         icon: "success"
//                       })

//                       const remaining = coffees.filter(cof => cof._id !== _id);
//                       setCoffees(remaining);
//                 }
//             }
//         });
//     }

//     return (
//         <div className="card card-side bg-base-100 shadow-xl flex items-center p-4 space-x-4">
//             {/* Coffee Image */}
//             <figure className="w-40 h-40 flex-shrink-0">
//                 <img className="w-full h-full object-cover rounded-lg" src={photo} alt={name} />
//             </figure>

//             {/* Coffee Details */}
//             <div className="flex flex-1 justify-between items-center">
//                 <div className="space-y-2">
//                     <h2 className="text-xl font-semibold">Name: {name}</h2>
//                     <p className="text-gray-600"><span className="font-medium">Category:</span> {category}</p>
//                     <p className="text-gray-600"><span className="font-medium">Supplier:</span> {supplier}</p>
//                     <p className="text-gray-600"><span className="font-medium">Taste:</span> {taste}</p>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex flex-col space-y-2">
//                     <button className="btn btn-sm btn-outline">View</button>
//                     <Link to={`updateCoffee/${_id}`}>
//                     <button className="btn btn-sm btn-primary">Edit</button>
//                     </Link>
//                     <button onClick={() => handleDelete(_id)}
//                         className="btn btn-sm btn-error"

//                     >Delete</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CoffeeCard;













import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-4c3hgcc0r-ieee-mostafas-projects.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your coffee has been deleted.",
                            icon: "success"
                        });

                        // Remove the deleted coffee from the state
                        const updatedCoffees = coffees.filter(cof => cof._id !== _id);
                        setCoffees(updatedCoffees);
                    }
                })
                .catch(error => {
                    console.error("Error deleting coffee:", error);
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to delete coffee.",
                        icon: "error"
                    });
                });
            }
        });
    };

    return (
        <div className="card card-side bg-base-100 shadow-xl flex items-center p-4 space-x-4">
            {/* Coffee Image */}
            <figure className="w-40 h-40 flex-shrink-0">
                <img className="w-full h-full object-cover rounded-lg" src={photo} alt={name} />
            </figure>

            {/* Coffee Details */}
            <div className="flex flex-1 justify-between items-center">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Name: {name}</h2>
                    <p className="text-gray-600"><span className="font-medium">Category:</span> {category}</p>
                    <p className="text-gray-600"><span className="font-medium">Supplier:</span> {supplier}</p>
                    <p className="text-gray-600"><span className="font-medium">Taste:</span> {taste}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-2">
                    <button className="btn btn-sm btn-outline">View</button>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn btn-sm btn-primary">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-error">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;

