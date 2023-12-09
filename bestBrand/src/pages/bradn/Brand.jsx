import { useEffect, useState } from 'react';
import Title from '../../components/title/Title';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Brand = () => {
    const [brandData, getBrandData] = useState([]);
    useEffect(() => {
        axios
            .get('https://best-brand-server.vercel.app/products')
            .then(function (response) {
                //category
                // handle success
                const filterAllBrandData = response?.data?.reduce(
                    (accumulator, currentValue) => {
                        const brandName = accumulator.find(
                            (item) =>
                                item?.brand?.toLowerCase().trim() ===
                                currentValue?.brand?.toLowerCase().trim()
                        );

                        if (!brandName) {
                            return accumulator.concat([currentValue]);
                        } else {
                            return accumulator;
                        }
                    },
                    []
                );
                const allBrandName = filterAllBrandData.map((item) =>
                    item.brand?.toLowerCase().trim()
                );
                getBrandData(allBrandName);
            })
            .catch(function () {
                // handle error
            });
    }, []);

    return (
        <div className="">
            <div className="container mx-auto md:my-16 my-5">
                <div>
                    <Title>All Brand</Title>
                </div>

                <div
                    className="grid 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5
            w-fit mx-auto">
                    {brandData?.map((item, inx) => {
                        const defultIcon =
                            'https://i.ibb.co/6yDjg7b/e9e2787d0cb55d570fe1c76843506759.jpg';
                        const appleIcon =
                            item === 'apple'
                                ? 'https://i.ibb.co/pvgs3sS/knowledge-graph-logo.png'
                                : '';
                        const googleIcon =
                            item === 'google'
                                ? 'https://i.ibb.co/DGZj3fN/profile-vrt-raw-bytes-1587515358-10512.png'
                                : '';
                        const samsungIcon =
                            item === 'samsung'
                                ? 'https://i.ibb.co/FqRDLp4/free-samsung-226432.png'
                                : '';
                        const huaweiIcon =
                            item === 'huawei'
                                ? 'https://i.ibb.co/GWRqQWG/huawei-logo-transparent-2-1.png'
                                : '';
                        const oppoIcon =
                            item === 'oppo'
                                ? 'https://i.ibb.co/Hnk9N5S/882745.png'
                                : '';
                        const xiaomiIcon =
                            item === 'xiaomi'
                                ? 'https://i.ibb.co/XbBNQ8q/mi.png'
                                : '';

                        return (
                            <div
                                key={inx}
                                className="group text-3xl font-bold text-center overflow-hidden py-5 px-2 hover:shadow-2xl shadow-md rounded-md duration-200">
                                <Link to={`/brand/${item}`}>
                                    <div className="group-hover:scale-110 p-4 duration-200">
                                        <div className="w-48 mx-auto">
                                            <img
                                                src={
                                                    appleIcon ||
                                                    googleIcon ||
                                                    samsungIcon ||
                                                    huaweiIcon ||
                                                    oppoIcon ||
                                                    xiaomiIcon ||
                                                    defultIcon
                                                }
                                                alt={`${item} icon`}
                                            />
                                        </div>
                                        <div className="mt-3 capitalize">
                                            <h2>{item}</h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Brand;
