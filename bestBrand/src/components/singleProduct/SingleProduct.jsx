import { useLoaderData, useNavigate } from 'react-router-dom';
import Title from '../title/Title';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../providers/AuthProvider';
import PrivetRoute from '../../privetRoute/PrivetRoute';

const SingleProduct = () => {
    const { data } = useLoaderData();

    const [cardData, setCardData] = useState([]);
    const loginRegInfo = useContext(AuthContext);
    const { setCardItemLength, cardItemLength, user } = loginRegInfo || {};

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('https://best-brand-server.vercel.app/cart-items')
            .then(function (response) {
                setCardData(response?.data);
            })
            .catch(function () {
                // handle error
            });
    }, [cardItemLength]);

    const handalAddItmeCard = () => {
        const previousSetElement = cardData.find(
            (item) => item.id === data?._id
        );
        if (!previousSetElement) {
            axios
                .post('https://best-brand-server.vercel.app/cart-product', {
                    id: data?._id,
                    name: data?.name,
                    imageUrl: data?.ImgUrl,
                    price: data?.price,
                    brand: data?.brand,
                })

                .then(function () {
                    Swal.fire({
                        title: 'Done!',
                        text: 'Product Is add your Card',
                        icon: 'success',
                        confirmButtonText: 'Okay',
                    }).then(() => {
                        axios
                            .get(
                                'https://best-brand-server.vercel.app/cart-items'
                            )
                            .then(function (response) {
                                setCardItemLength(response?.data?.length);
                            })
                            .catch(function () {
                                // handle error
                            });
                    });
                })
                .catch(function (error) {
                    Swal.fire({
                        title: 'Error!',
                        text: error,
                        icon: 'error',
                        confirmButtonText: 'Cool',
                    });
                });
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Oops Previous set this product Card page',
                icon: 'error',
                confirmButtonText: 'Cool',
            });
        }
    };

    return (
        <div className="lg:w-3/5 mx-auto md:my-16 my-5 ">
            <div className="px-2 md:px-0">
                <Title>Single Item</Title>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="md:col-span-1 col-span-2">
                    <div className="md:w-fit w-3/4 mx-auto">
                        <img src={data?.ImgUrl} alt={data?.name} />
                    </div>
                </div>
                <div className="md:col-span-1 col-span-2 px-2 md:px-0">
                    <div className="text-xl font-bold mb-10">
                        <h2>{data?.brand}</h2>
                    </div>
                    <div className="text-2xl font-bold">
                        <h2>{data?.name}</h2>
                    </div>
                    <div className="flex items-center gap-2 my-5">
                        <div>
                            <p className="text-base bg-slate-300 p-2">
                                Product Price:{' '}
                                <span className="font-semibold">
                                    {data?.price}
                                </span>
                            </p>
                        </div>
                        <div>
                            <div>
                                <p className="text-base bg-slate-300 p-2">
                                    Status:{' '}
                                    <span className="font-semibold">
                                        {data?.status}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-base bg-slate-300 w-[13rem] p-2">
                                Product Code:{' '}
                                <span className="font-semibold">
                                    {data?.productCode}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-base lg:mt-8 mt-2 ">
                                Color: <span className="font-semibold"></span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-base mt-2">
                                Storage: <span className="font-semibold"></span>
                            </p>
                        </div>
                    </div>

                    <div className="xl:mt-16 lg:mt-8 mt-4">
                        <div>
                            <button className="seconderBtn px-4 py-2 bg-primaryColor text-white hover:bg-primaryColor/70 ">
                                Buy Now
                            </button>

                            <button
                                onClick={() => {
                                    user
                                        ? handalAddItmeCard()
                                        : navigate('/login');
                                }}
                                className="seconderBtn px-4 py-2 ml-3 border border-primaryColor text-primaryColor">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                {/* this is full space section */}
                <div className="col-span-2 flex flex-col justify-center px-2 md:px-0">
                    <div className="mb-5">
                        <table className="w-full text-left border border-separate rounded border-slate-200">
                            <tbody>
                                <tr className="transition-colors duration-300 hover:bg-slate-50">
                                    <td className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 w-40 border-t border-l first:border-l-0 border-slate-200">
                                        Name
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                        {data?.name}
                                    </td>
                                </tr>
                                <tr className="transition-colors duration-300 hover:bg-slate-50">
                                    <td className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 border-t border-l first:border-l-0 border-slate-200">
                                        Brand
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                        {data?.brand}
                                    </td>
                                </tr>
                                <tr className="transition-colors duration-300 hover:bg-slate-50">
                                    <td className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 border-t border-l first:border-l-0 border-slate-200">
                                        Weight
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                        {data?.weight}
                                    </td>
                                </tr>
                                {data?.dimension && (
                                    <tr className="transition-colors duration-300 hover:bg-slate-50">
                                        <td className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 border-t border-l first:border-l-0 border-slate-200">
                                            Dimension
                                        </td>
                                        <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                            {data?.dimension}
                                        </td>
                                    </tr>
                                )}

                                {data?.mainCamera && (
                                    <tr className="transition-colors duration-300 hover:bg-slate-50">
                                        <td className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 border-t border-l first:border-l-0 border-slate-200">
                                            Main Camera
                                        </td>
                                        <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                            {data?.mainCamera}
                                        </td>
                                    </tr>
                                )}

                                {data?.selfieCamera && (
                                    <tr className="transition-colors duration-300 hover:bg-slate-50">
                                        <td className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 border-t border-l first:border-l-0 border-slate-200">
                                            Selfie Camera
                                        </td>
                                        <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                            {data?.selfieCamera}
                                        </td>
                                    </tr>
                                )}

                                {data?.batteryInfo && (
                                    <tr className="transition-colors duration-300 hover:bg-slate-50">
                                        <td className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 border-t border-l first:border-l-0 border-slate-200">
                                            Battery Info
                                        </td>
                                        <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                            {data?.batteryInfo}
                                        </td>
                                    </tr>
                                )}

                                <tr className="transition-colors duration-300 hover:bg-slate-50">
                                    <td className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 border-t border-l first:border-l-0 border-slate-200">
                                        Other Info
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                        {data?.otherInfo}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div></div>
                        <div className="text-center">
                            <div>
                                {data?.description && (
                                    <div>
                                        <h2 className="text-2xl font-medium border-b-2 border-black">
                                            Description
                                        </h2>
                                        <p>{data?.description}</p>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center w-fit mx-auto my-10">
                                <div className="border-b-2 border-black w-20"></div>
                                <span className="text-2xl">x</span>
                                <div className="border-b-2 border-black w-20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
