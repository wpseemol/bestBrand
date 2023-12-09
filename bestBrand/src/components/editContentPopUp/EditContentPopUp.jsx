import axios from 'axios';
import { FaXmark } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { useState } from 'react';
import useCatagariData from '../useCatagariData/useCatagariData';

const EditContentPopUp = ({ allData, clickText, popupClose }) => {
    // const [isMatchData, setIsMatchData] = useState(null);
    // const [btnDisable, setBtnDisable] = useState(false);

    const filterSingleData = Object.keys(allData).find((element) => {
        return element === (clickText ? Object.keys(clickText)[0] : '');
    });

    const [selectedOption, setSelectedOption] = useState(
        clickText[filterSingleData]
    );
    const categoryData = useCatagariData();

    const selectedCatagari = categoryData.find(
        (element) => element?.catId === selectedOption
    );

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handalPut = (e) => {
        e.preventDefault();

        const keysToFilter = ['_id', filterSingleData];

        const filteredObject = Object.keys(allData).reduce((obj, key) => {
            if (!keysToFilter.includes(key)) {
                obj[key] = allData[key];
            }
            return obj;
        }, {});

        if (Object.keys(clickText)[0] === 'category') {
            filteredObject[filterSingleData] = selectedCatagari;
        } else {
            filteredObject[filterSingleData] = e.target.updatText.value;
        }

        axios
            .put(
                `https://best-brand-server.vercel.app/category/${allData._id}`,
                {
                    filteredObject,
                }
            )
            .then(function () {
                Swal.fire({
                    title: 'Done!',
                    text: ' edit Successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay',
                }).then(() => {
                    window.location.reload();
                });
            })
            .catch(function (error) {
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Cool',
                });
                window.location.reload();
            });
    };

    if (Object.keys(clickText)[0] === 'category') {
        return (
            <div className=" sm:mt-8 fixed md:w-1/2 w-full bg-black/60 text-white text-4xl left-1/2 transform -translate-x-1/2 md:top-20 top-28 z-30">
                <div className="relative">
                    <form onSubmit={handalPut} className=" p-12">
                        <select
                            name="category"
                            id="category"
                            className="customInputStyle text-xl sm:text-3xl py-2 w-full text-black resize-none bg-white/90 p-2"
                            value={selectedOption}
                            onChange={handleSelectChange}>
                            <option className="w-[20rem]" value="">
                                No Select
                            </option>
                            {categoryData?.map((item) => {
                                return (
                                    <option
                                        className="w-[20rem]"
                                        key={item?.catId}
                                        value={item?.catId}>
                                        {item?.categoryName}
                                    </option>
                                );
                            })}
                        </select>
                        <br />
                        <input
                            className="seconderBtn mt-4 bg-white/60 hover:bg-white/70 font-bold text-xl"
                            type="submit"
                            value="Updated"
                        />
                    </form>
                    <div
                        onClick={() => popupClose(false)}
                        className="absolute -top-2 -right-2 flex justify-center items-center rounded-full font-bold text-3xl w-10 h-10 bg-red-800 duration-150 text-white hover:scale-110 hover:rotate-90 ">
                        <FaXmark />
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className=" sm:mt-8 fixed md:w-1/2 w-full bg-black/60 text-white text-4xl left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-30">
            <div className="relative">
                <form onSubmit={handalPut} className=" p-12">
                    <textarea
                        className="w-full text-black resize-none bg-white/90 p-2"
                        name="updatText"
                        defaultValue={clickText && clickText[filterSingleData]} //
                        cols="30"
                        rows={
                            clickText &&
                            clickText[filterSingleData]?.length > 180
                                ? '10'
                                : '5'
                        }
                        style={{
                            minHeight: '10rem',
                            height: 'auto',
                        }}></textarea>
                    <br />
                    <input
                        className="seconderBtn mt-4 bg-white/60 hover:bg-white/70 font-bold text-xl"
                        type="submit"
                        value="Updated"
                    />
                </form>
                <div
                    onClick={() => popupClose(false)}
                    className="absolute -top-2 -right-2 flex justify-center items-center rounded-full font-bold text-3xl w-10 h-10 bg-red-800 duration-150 text-white hover:scale-110 hover:rotate-90 ">
                    <FaXmark />
                </div>
            </div>
        </div>
    );
};

export default EditContentPopUp;

EditContentPopUp.propTypes = {
    allData: PropTypes.object,
    clickText: PropTypes.object,
    popupClose: PropTypes.func,
};
