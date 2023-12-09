import { useLoaderData } from 'react-router-dom';
import Title from '../title/Title';
import { useState } from 'react';
import { FaPencil } from 'react-icons/fa6';
import EditContentPopUp from '../editContentPopUp/EditContentPopUp';
// import useCatagariData from '../useCatagariData/useCatagariData';

const UpdateData = () => {
    const { data } = useLoaderData();
    // const [isMatchData, setIsMatchData] = useState(null);
    // const [btnDisable, setBtnDisable] = useState(false);

    // const [selectedOption, setSelectedOption] = useState(
    //     data?.category?.categoryName
    // );
    // const categoryData = useCatagariData();

    // const handleSelectChange = (event) => {
    //     setSelectedOption(event.target.value);
    //     console.log(event.target.value);
    // };

    const [editText, setEditText] = useState(null);
    const [showEditFrom, setShowEditFrom] = useState(false);

    const popupClose = (isClose) => {
        setShowEditFrom(isClose);
    };

    return (
        <div className="lg:w-3/5 mx-auto md:my-16 my-5 lg:px-0 px-10 relative p-3">
            <div className="px-2 md:px-0">
                <Title>Edit Item</Title>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="md:col-span-1 col-span-2 relative p-3 border hover:border-black duration-200">
                    <div className="md:w-fit w-3/4 mx-auto">
                        <img src={data?.ImgUrl} alt={data?.name} />
                    </div>
                    <div
                        onClick={() => {
                            setEditText({ ImgUrl: data?.ImgUrl });
                            setShowEditFrom(true);
                        }}
                        className="flex overflow-hidden hover:-rotate-12 absolute -top-6 -left-6 bg-primaryColor
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                        <FaPencil />
                    </div>
                </div>
                <div className="md:col-span-1 col-span-2 px-2 md:px-0">
                    <div className="text-xl font-bold mb-10 relative p-3 border hover:bg-slate-100 duration-200">
                        <h2>{data?.brand}</h2>
                        <div
                            onClick={() => {
                                setEditText({ brand: data?.brand });
                                setShowEditFrom(true);
                            }}
                            className="flex overflow-hidden hover:rotate-12 absolute -top-7 -right-7
                                            hover:-top-6 hover:-right-6 bg-primaryColor/70
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                            <FaPencil />
                        </div>
                    </div>
                    <div className="text-2xl font-bold relative p-3 border hover:bg-slate-100 duration-200">
                        <h2>{data?.name}</h2>
                        <div
                            onClick={() => {
                                setEditText({ name: data?.name });
                                setShowEditFrom(true);
                            }}
                            className="flex overflow-hidden hover:rotate-12 absolute -top-7 -right-7
                                            hover:-top-6 hover:-right-6 bg-primaryColor/70
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                            <FaPencil />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 my-5 ">
                        <div className="relative  border hover:bg-slate-300 bg-slate-200 duration-200">
                            <p className="text-base p-2">
                                Product Price:{' '}
                                <span className="font-semibold">
                                    {data?.price}
                                </span>
                            </p>
                            <div
                                onClick={() => {
                                    setEditText({ price: data?.price });
                                    setShowEditFrom(true);
                                }}
                                className="flex overflow-hidden hover:z-10 hover:rotate-12 absolute -top-7 -right-7
                                            hover:-top-6 hover:-right-6 bg-primaryColor/70
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                                <FaPencil />
                            </div>
                        </div>
                        <div>
                            <div className="relative border hover:bg-slate-300 bg-slate-200 duration-200">
                                <p className="text-base  p-2">
                                    Status:{' '}
                                    <span className="font-semibold">
                                        {data?.status}
                                    </span>
                                </p>
                                <div
                                    onClick={() => {
                                        setEditText({ status: data?.status });
                                        setShowEditFrom(true);
                                    }}
                                    className="flex overflow-hidden hover:rotate-12 absolute -top-7 -right-7
                                            hover:-top-6 hover:-right-6 bg-primaryColor/70
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                                    <FaPencil />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="border relative w-fit hover:bg-slate-300 bg-slate-200 duration-200">
                            <p className="text-base  w-[13rem] p-2">
                                Product Code:{' '}
                                <span className="font-semibold">
                                    {data?.productCode}
                                </span>
                            </p>
                            <div
                                onClick={() => {
                                    setEditText({
                                        productCode: data?.productCode,
                                    });
                                    setShowEditFrom(true);
                                }}
                                className="flex overflow-hidden hover:rotate-12 absolute -top-7 -right-7
                                            hover:-top-6 hover:-right-6 bg-primaryColor/70
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                                <FaPencil />
                            </div>
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
                </div>
                {/* this is full space section */}
                <div className="col-span-2 flex flex-col justify-center px-2 md:px-0">
                    <div className="mb-5">
                        <table className="w-full text-left border border-separate rounded border-slate-200">
                            <tbody>
                                <tr className="transition-colors duration-300 hover:bg-slate-100">
                                    <td className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 w-40 border-t border-l first:border-l-0 border-slate-200">
                                        Name
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 relative">
                                        <div className="">
                                            {data?.name}

                                            <div
                                                onClick={() => {
                                                    setEditText({
                                                        name: data?.name,
                                                    });
                                                    setShowEditFrom(true);
                                                }}
                                                className="flex overflow-hidden hover:rotate-12 absolute -top-7 -right-7
                                            hover:-top-6 hover:-right-6 bg-primaryColor/70
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                                                <FaPencil />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="transition-colors duration-300 hover:bg-slate-100">
                                    <td className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 border-t border-l first:border-l-0 border-slate-200">
                                        Brand
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 relative">
                                        <div className="">
                                            {data?.brand}

                                            <div
                                                onClick={() => {
                                                    setEditText({
                                                        brand: data?.brand,
                                                    });
                                                    setShowEditFrom(true);
                                                }}
                                                className="flex overflow-hidden hover:rotate-12 absolute -top-7 -right-7
                                            hover:-top-6 hover:-right-6 bg-primaryColor/70
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                                                <FaPencil />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="transition-colors duration-300 hover:bg-slate-100">
                                    <td className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 border-t border-l first:border-l-0 border-slate-200">
                                        Category
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 relative">
                                        <div className="">
                                            {data?.category?.categoryName}

                                            <div
                                                onClick={() => {
                                                    setEditText({
                                                        category:
                                                            data?.category
                                                                ?.categoryName,
                                                    });
                                                    setShowEditFrom(true);
                                                }}
                                                className="flex overflow-hidden hover:rotate-12 absolute -top-7 -right-7
                                            hover:-top-6 hover:-right-6 bg-primaryColor/70
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                                                <FaPencil />
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="transition-colors duration-300 hover:bg-slate-100">
                                    <td className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 border-t border-l first:border-l-0 border-slate-200">
                                        Weight
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 relative">
                                        <div className="">
                                            {data?.weight}

                                            <div
                                                onClick={() => {
                                                    setEditText({
                                                        weight: data?.weight,
                                                    });
                                                    setShowEditFrom(true);
                                                }}
                                                className="flex overflow-hidden hover:rotate-12 absolute -top-7 -right-7
                                            hover:-top-6 hover:-right-6 bg-primaryColor/70
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                                                <FaPencil />
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="transition-colors duration-300 hover:bg-slate-100">
                                    <td className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 border-t border-l first:border-l-0 border-slate-200">
                                        Dimension
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 relative">
                                        <div className="">
                                            {data?.dimension}

                                            <div
                                                onClick={() => {
                                                    setEditText({
                                                        dimension:
                                                            data?.dimension,
                                                    });
                                                    setShowEditFrom(true);
                                                }}
                                                className="flex overflow-hidden hover:rotate-12 absolute -top-7 -right-7
                                            hover:-top-6 hover:-right-6 bg-primaryColor/70
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                                                <FaPencil />
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                {data?.mainCamera && (
                                    <tr className="transition-colors duration-300 hover:bg-slate-100">
                                        <td className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 border-t border-l first:border-l-0 border-slate-200">
                                            Main Camera
                                        </td>
                                        <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 relative">
                                            <div className="">
                                                {data?.mainCamera}

                                                <div
                                                    onClick={() => {
                                                        setEditText({
                                                            mainCamera:
                                                                data?.mainCamera,
                                                        });
                                                        setShowEditFrom(true);
                                                    }}
                                                    className="flex overflow-hidden hover:rotate-12 absolute -top-7 -right-7
                                            hover:-top-6 hover:-right-6 bg-primaryColor/70
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                                                    <FaPencil />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}

                                <tr className="transition-colors duration-300 hover:bg-slate-100">
                                    <td className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 border-t border-l first:border-l-0 border-slate-200">
                                        Selfie Camera
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 relative">
                                        <div className="">
                                            {data?.selfieCamera}

                                            <div
                                                onClick={() => {
                                                    setEditText({
                                                        selfieCamera:
                                                            data?.selfieCamera,
                                                    });
                                                    setShowEditFrom(true);
                                                }}
                                                className="flex overflow-hidden hover:rotate-12 absolute -top-7 -right-7
                                            hover:-top-6 hover:-right-6 bg-primaryColor/70
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                                                <FaPencil />
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="transition-colors duration-300 hover:bg-slate-100">
                                    <td className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 border-t border-l first:border-l-0 border-slate-200">
                                        Battery Info
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 relative">
                                        <div className="">
                                            {data?.batteryInfo}
                                            <div
                                                onClick={() => {
                                                    setEditText({
                                                        batteryInfo:
                                                            data?.batteryInfo,
                                                    });
                                                    setShowEditFrom(true);
                                                }}
                                                className="flex overflow-hidden hover:rotate-12 absolute -top-7 -right-7
                                            hover:-top-6 hover:-right-6 bg-primaryColor/70
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                                                <FaPencil />
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                {data?.batteryInfo && (
                                    <tr className="transition-colors duration-300 hover:bg-slate-100">
                                        <td className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 border-t border-l first:border-l-0 border-slate-200">
                                            Other Info
                                        </td>
                                        <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 relative">
                                            <div className="">
                                                {data?.otherInfo}
                                                <div
                                                    onClick={() => {
                                                        setEditText({
                                                            otherInfo:
                                                                data?.otherInfo,
                                                        });
                                                        setShowEditFrom(true);
                                                    }}
                                                    className="flex overflow-hidden hover:rotate-12 absolute -top-7 -right-7
                                            hover:-top-6 hover:-right-6 bg-primaryColor/70
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                                                    <FaPencil />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div></div>
                        <div className="text-center">
                            <div className="z-20">
                                <div className="border hover:bg-slate-100 duration-200 relative p-3 ">
                                    <h2 className="text-2xl font-medium border-b-2 border-black">
                                        Description
                                    </h2>
                                    <p>{data?.description}</p>
                                    <div
                                        onClick={() => {
                                            setEditText({
                                                description: data?.description,
                                            });
                                            setShowEditFrom(true);
                                        }}
                                        className="flex overflow-hidden hover:rotate-12 absolute -top-7 -right-7
                                            hover:-top-6 hover:-right-6 hover:z-30  bg-primaryColor/70
                                    w-12 h-12 rounded-full justify-center items-center text-white hover:scale-110 duration-200 text-2xl shoeditIcon">
                                        <FaPencil />
                                    </div>
                                </div>
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
            {/* pop pu box  */}
            <div className={showEditFrom ? 'block' : 'hidden'}>
                <EditContentPopUp
                    popupClose={popupClose}
                    allData={data}
                    clickText={editText ? editText : {}}
                />
                <div className="fixed top-0 left-0 w-screen h-screen blur-lg bg-black/30 z-10"></div>
            </div>
        </div>
    );
};

export default UpdateData;
