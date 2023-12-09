import axios from 'axios';
import { useEffect, useState } from 'react';

const useCatagariData = () => {
    const [catagoriData, setCatagoriData] = useState([]);
    useEffect(() => {
        axios
            .get('https://best-brand-server.vercel.app/products')
            .then(function (response) {
                //category
                // handle success
                const categoryData = response?.data.reduce(
                    (accumulator, currentValue) => {
                        const catName = accumulator.find(
                            (item) =>
                                item?.category?.categoryName ===
                                currentValue?.category?.categoryName
                        );
                        if (!catName) {
                            return accumulator.concat([currentValue]);
                        } else {
                            return accumulator;
                        }
                    },
                    []
                );

                const allCategory = categoryData.map(
                    (element) => element.category
                );

                setCatagoriData(allCategory);
            })
            .catch(function () {
                // handle error
            });
    }, []);

    return catagoriData;
};

export default useCatagariData;
