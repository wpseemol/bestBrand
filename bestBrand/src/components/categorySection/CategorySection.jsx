import { useNavigate } from 'react-router-dom';
import HomeTitle from '../homeTitle/HomeTitle';
import useCatagariData from '../useCatagariData/useCatagariData';

const CategorySection = () => {
    const categoryData = useCatagariData() || [];
    const navigate = useNavigate();
    const handalClickCategory = (cat) => {
        navigate(`/category/${cat}`);
    };

    return (
        <>
            <div className="container mx-auto my-16">
                <div className="mx-auto">
                    <HomeTitle>FEATURED CATEGORIES</HomeTitle>
                    <p className="text-lg font-semibold text-center my-4">
                        Get your desired product from featured category
                    </p>
                </div>
                <div className=" grid xl:grid-cols-8 lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-2">
                    {categoryData.map((element, inx) => {
                        return (
                            <dir
                                onClick={() => {
                                    handalClickCategory(element?.catId);
                                }}
                                key={inx}
                                className="flex flex-col items-center justify-center bg-[#f6f8fa] px-1 py-3
                            hover:text-primaryColor hover:scale-105 duration-300 rounded-md overflow-hidden">
                                <div>
                                    <img
                                        src={element?.categoryIcon}
                                        alt={element?.categoryName}
                                        className="w-16"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-base font-medium mt-3">
                                        {element?.categoryName}
                                    </h2>
                                </div>
                            </dir>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default CategorySection;
