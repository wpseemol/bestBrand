import { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaTrashCan } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import axios from 'axios';

import { AuthContext } from '../../providers/AuthProvider';

const CardItems = () => {
    const { data } = useLoaderData();

    const loginRegInfo = useContext(AuthContext);
    const { setCardItemLength } = loginRegInfo || {};

    const [cartData, setCartData] = useState(data);
    const [quantitiesCount, setquantitiesCount] = useState(
        cartData.map(() => 1)
    );

    const handleAdd = (index) => {
        const newQuantities = [...quantitiesCount];
        newQuantities[index] = newQuantities[index] + 1;
        setquantitiesCount(newQuantities);
    };

    const handleRemove = (index) => {
        const newQuantities = [...quantitiesCount];
        if (newQuantities[index] > 1) {
            newQuantities[index] = newQuantities[index] - 1;
            setquantitiesCount(newQuantities);
        }
    };

    const handalRemoveFromCard = (rmId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to remove',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(
                        `https://best-brand-server.vercel.app/card-item-remove/${rmId}`
                    )
                    .then(() => {
                        Swal.fire(
                            'Deleted!',
                            'Your Card Item has been remove.',
                            'success'
                        );
                    })
                    .catch((error) => {
                        Swal.fire('Deleted!', error, 'success');
                    });
                const afterRemove = cartData?.filter((item) => {
                    return item._id !== rmId;
                });
                setCartData(afterRemove);
                setCardItemLength(afterRemove.length);
            }
        });
    };

    if (cartData?.length === 0) {
        return (
            <>
                <div className="container mx-auto md:my-16 my-6">
                    <div>
                        <div className="mx-auto w-fit">
                            <img
                                src="https://i.ibb.co/4fLKwvn/empty-cart-7359557-6024626.png"
                                alt="empty Cart Image"
                            />
                        </div>
                        <div className="text-center">
                            <h2 className="text-3xl">
                                {' '}
                                Your cart is{' '}
                                <span className="text-primaryColor">
                                    Empty
                                </span>{' '}
                            </h2>
                            <p className="my-5 text-base">
                                Must add items on the cart before you proceed to
                                check out
                            </p>
                            <button className="seconderBtn bg-primaryColor text-white hover:bg-primaryColor/70">
                                <Link to="/">Return Home</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return (
        <div className="container mx-auto md:my-16 my-6">
            <div className="overflow-auto">
                <table className="w-full text-left border border-separate rounded border-slate-200">
                    <tbody>
                        <tr className="transition-colors duration-300 hover:bg-slate-50">
                            <th className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 w-40 border-t border-l first:border-l-0 border-slate-200">
                                Image
                            </th>
                            <th className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 w-40 border-t border-l first:border-l-0 border-slate-200">
                                Product Name
                            </th>
                            <th className="  w-40 h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100   border-t border-l first:border-l-0 border-slate-200">
                                Brand
                            </th>
                            <th className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 w-40 border-t border-l first:border-l-0 border-slate-200">
                                Quantity
                            </th>
                            <th className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 w-40 border-t border-l first:border-l-0 border-slate-200">
                                Unit Price
                            </th>
                            <th className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 w-40 border-t border-l first:border-l-0 border-slate-200">
                                Total
                            </th>
                        </tr>
                        {cartData?.map((element, inx) => {
                            return (
                                <tr
                                    key={inx}
                                    className="transition-colors duration-300 hover:bg-slate-50">
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                        <div className="w-20 h-20 mx-auto">
                                            <img
                                                src={element?.imageUrl}
                                                alt={element?.name}
                                                className="w-full object-cover"
                                            />
                                        </div>
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                        <div className="">
                                            <h2>{element?.name} </h2>
                                        </div>
                                    </td>
                                    <td className=" h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                        <div className="">
                                            <h2>{element?.brand} </h2>
                                        </div>
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                        <div className="">
                                            <h2 className="border flex justify-center items-center w-fit">
                                                <button
                                                    className=" bg-primaryColor/25 p-2 rounded-sm border text-lg font-bold"
                                                    onClick={() =>
                                                        handleRemove(inx)
                                                    }>
                                                    -
                                                </button>
                                                <span className=" bg-slate-200 px-3 py-2 border text-lg ">
                                                    {quantitiesCount[inx]}
                                                </span>

                                                <button
                                                    className=" bg-primaryColor/25 p-2 rounded-sm border text-lg font-bold"
                                                    onClick={() =>
                                                        handleAdd(inx)
                                                    }>
                                                    +
                                                </button>
                                            </h2>
                                        </div>
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                        <div className="">
                                            <p>{element?.price}</p>
                                        </div>
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                        <div className="flex items-center gap-3">
                                            <p className="">
                                                {quantitiesCount[inx] *
                                                    parseInt(element?.price)}
                                                <span>৳</span>
                                            </p>
                                            {' || '}
                                            <div
                                                onClick={() =>
                                                    handalRemoveFromCard(
                                                        element._id
                                                    )
                                                }
                                                className="w-fit hover:scale-150 hover:text-red-400 duration-200 text-red-300">
                                                <FaTrashCan />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CardItems;
