import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useCatagariData from '../../components/useCatagariData/useCatagariData';

const Upload = () => {
    const categoryData = useCatagariData();

    const [previewImage, setPreviewImage] = useState(
        'https://picsum.photos/500/600'
    );
    const handleInputChange = (event) => {
        setPreviewImage(event.target.value);
    };

    const [selectedOption, setSelectedOption] = useState('');
    const [addBtnClick, setAddBtnClick] = useState(false);
    const [showWarningMassage, setShowWarningMassage] = useState(false);
    const [isFromSubmet, setIsFormSubmet] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowWarningMassage(false);
        }, 5000);
    }, [showWarningMassage]);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        if (selectedOption) {
            setIsFormSubmet(true);
        }
    }, [selectedOption]);

    // useEffect(() => {
    //
    // }, [selectedOption]);

    const selectedCatagari = categoryData.find(
        (element) => element?.catId === selectedOption
    );

    // upload files
    const handalUploadMovies = (e) => {
        e.preventDefault();
        const from = e.target;
        const productCode = from.productCode.value;
        const name = from.name.value;
        const price = from.price.value;
        // const ImgUrl = from.ImgUrl.value;
        const status = from.status.value;
        const brand = from.brand.value;
        const dimension = from.dimension.value;
        const weight = from.weight.value;
        const mainCamera = from.mainCamera.value;
        const categoryName = addBtnClick ? from.categoryName.value : '';
        const categoryIcon = addBtnClick ? from.categoryIcon.value : '';

        const selfieCamera = from.selfieCamera.value;
        const description = from.description.value;
        const batteryInfo = from.batteryInfo.value;
        const otherInfo = from.otherInfo.value;

        if (isFromSubmet) {
            axios
                .post('https://best-brand-server.vercel.app/products', {
                    productCode: productCode,
                    name: name ? name : 'Product Name',
                    price: price ? price : '12000 tk',
                    ImgUrl: previewImage,
                    status: status ? status : 'In Stock',
                    brand: brand ? brand : 'Brand Name',
                    dimension: dimension ? dimension : null,
                    weight: weight ? weight : null,
                    category: addBtnClick
                        ? {
                              catId: categoryName
                                  .replace(/\s/g, '')
                                  .toLowerCase(),
                              categoryName,
                              categoryIcon,
                          }
                        : {
                              catId: selectedCatagari.catId,
                              categoryName: selectedCatagari.categoryName,
                              categoryIcon: selectedCatagari.categoryIcon,
                          },
                    mainCamera: mainCamera ? mainCamera : null,
                    selfieCamera: selfieCamera ? selfieCamera : null,
                    description: description ? description : null,
                    batteryInfo: batteryInfo ? batteryInfo : null,
                    otherInfo: otherInfo ? otherInfo : null,
                })

                .then(function () {
                    Swal.fire({
                        title: 'Done!',
                        text: 'Product Upload is Done',
                        icon: 'success',
                        confirmButtonText: 'Okay',
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
            setShowWarningMassage(true);
        }
    };

    return (
        <>
            <div className="">
                <div
                    className={`bg-red-500 p-2 fixed duration-700 text-lg font-semibold text-white top-[10rem] rounded-md  z-50 ${
                        showWarningMassage ? 'right-8' : '-right-[15rem]'
                    }`}>
                    Category Is not selected.
                </div>
                <div>
                    <form
                        onSubmit={handalUploadMovies}
                        className="grid md:grid-cols-2 grid-cols-1 gap-2 ">
                        <div className="md:row-span-4">
                            <div className="text-base font-semibold text-center underline ">
                                <p>Image Preview</p>
                            </div>{' '}
                            <img
                                src={previewImage}
                                alt="Image preview"
                                className=""
                            />
                        </div>
                        <div className="">
                            <label
                                htmlFor="name"
                                className="text-xl font-semibold ">
                                Name
                            </label>
                            <hr />
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="customInputStyle mt-4"
                                placeholder="Product Name"
                            />
                        </div>
                        <div className="">
                            <label
                                htmlFor="price"
                                className="text-xl font-semibold ">
                                Product Price
                            </label>
                            <hr />
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="customInputStyle mt-4"
                                placeholder="Price"
                            />
                        </div>
                        <div className="">
                            <label
                                htmlFor="ImgUrl"
                                className="text-xl font-semibold ">
                                Image Url
                            </label>
                            <hr />
                            <input
                                onChange={handleInputChange}
                                type="text"
                                name="ImgUrl"
                                id="ImgUrl"
                                className="customInputStyle mt-4"
                                placeholder="Picture Url"
                            />
                        </div>
                        <div className="">
                            <label
                                htmlFor="productCode"
                                className="text-xl font-semibold">
                                Product Code*
                            </label>
                            <hr />
                            <input
                                required
                                type="text"
                                name="productCode"
                                id="productCode"
                                className="customInputStyle mt-4"
                                placeholder="pc01"
                            />
                        </div>

                        <div className="md:col-span-1 flex items-center gap-3">
                            <label
                                htmlFor="status"
                                className="text-xl font-semibold">
                                Status:
                            </label>
                            <input
                                type="text"
                                name="status"
                                id="status"
                                className="customInputStyle"
                                placeholder="In Stock"
                            />
                        </div>
                        <div className="md:col-span-1 flex items-center gap-3 ">
                            <label
                                htmlFor="brand"
                                className="text-xl font-semibold">
                                Brand:
                            </label>
                            <input
                                type="text"
                                name="brand"
                                id="brand"
                                className="customInputStyle "
                                placeholder="Brand"
                            />
                        </div>
                        <div className="md:col-span-1 flex items-center gap-3">
                            <label
                                htmlFor="dimension"
                                className="text-xl font-semibold ">
                                Dimension:
                            </label>
                            <input
                                type="text"
                                name="dimension"
                                id="dimension"
                                className="customInputStyle "
                                placeholder="159.9 x 76.7 x 8.3 mm"
                            />
                        </div>
                        <div className="md:col-span-1 flex items-center gap-3">
                            <label
                                htmlFor="weight"
                                className="text-xl font-semibold ">
                                Weight:
                            </label>
                            <input
                                type="text"
                                name="weight"
                                id="weight"
                                className="customInputStyle "
                                placeholder="221 g"
                            />
                        </div>
                        {/* this is catagori section  */}
                        <div className="md:col-span-2 flex lg:items-center gap-3 overflow-auto">
                            <label
                                htmlFor="category"
                                className="text-xl font-semibold ">
                                Category:
                            </label>
                            <div className="flex flex-col lg:flex-row border lg:border-none lg:gap-4 gap-2 items-center w-full">
                                <div className="flex items-center gap-2">
                                    <select
                                        name="category"
                                        id="category"
                                        className="customInputStyle py-2 w-full"
                                        value={selectedOption}
                                        onChange={handleSelectChange}>
                                        <option value="">No Select</option>
                                        {categoryData?.map((item) => {
                                            return (
                                                <option
                                                    key={item?.catId}
                                                    value={item?.catId}>
                                                    {item?.categoryName}
                                                </option>
                                            );
                                        })}
                                    </select>

                                    <div>
                                        <div
                                            onClick={() => {
                                                setAddBtnClick(!addBtnClick);
                                                setIsFormSubmet(!isFromSubmet);
                                            }}
                                            className="w-8 hover:scale-110 duration-150 h-8 bg-slate-800 text-white text-center text-2xl rounded-full ">
                                            {addBtnClick ? 'x' : '+'}
                                        </div>
                                    </div>
                                </div>

                                {addBtnClick && (
                                    <div className="flex md:flex-row flex-col items-center gap-2">
                                        <div className="flex items-center gap-2">
                                            <label
                                                htmlFor="categoryName"
                                                className="text-lg font-medium ">
                                                New:
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="categoryName"
                                                id="categoryName"
                                                className="customInputStyle "
                                                placeholder="Phones & Tablets"
                                            />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <label
                                                htmlFor="categoryIcon"
                                                className="text-lg font-medium ">
                                                Icon:
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="categoryIcon"
                                                id="categoryIcon"
                                                className="customInputStyle "
                                                placeholder="Icon Url"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <label
                                htmlFor="mainCamera"
                                className="text-xl font-semibold ">
                                Main Camera
                            </label>
                            <hr />
                            <input
                                type="text"
                                name="mainCamera"
                                id="mainCamera"
                                className="customInputStyle mt-4"
                                placeholder="Main Camera"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label
                                htmlFor="selfieCamera"
                                className="text-xl font-semibold ">
                                Selfie Camera
                            </label>
                            <hr />
                            <input
                                type="text"
                                name="selfieCamera"
                                id="selfieCamera"
                                className="customInputStyle mt-4"
                                placeholder="Selfie Camera"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label
                                htmlFor="description"
                                className="text-xl font-semibold ">
                                Description
                            </label>
                            <hr />
                            <textarea
                                type="text"
                                name="description"
                                id="otherInfo"
                                className="customInputStyle mt-4"
                                placeholder="Description"></textarea>
                        </div>
                        <div className="col-span-1 flex justify-center items-center gap-3">
                            <label
                                htmlFor="batteryInfo"
                                className="text-xl font-semibold ">
                                Battery Info:
                            </label>
                            <input
                                type="text"
                                name="batteryInfo"
                                id="batteryInfo"
                                className="customInputStyle "
                                placeholder="Battery Info"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center items-center gap-3">
                            <label
                                htmlFor="otherInfo"
                                className="text-xl font-semibold ">
                                Other Info:
                            </label>
                            <input
                                type="text"
                                name="otherInfo"
                                id="otherInfo"
                                className="customInputStyle"
                                placeholder="Other Features / Info"
                            />
                        </div>

                        <div className="md:col-span-2 mx-auto mt-4">
                            <input
                                type="submit"
                                value="Upload Prodact"
                                className="seconderBtn"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Upload;
