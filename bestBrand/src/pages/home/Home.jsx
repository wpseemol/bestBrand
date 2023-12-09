import HomeHeroSection from '../../components/homeHeroSection/HomeHeroSection';
import CategorySection from '../../components/categorySection/CategorySection';
import HotProduct from '../../components/hotProduct/HotProduct';
import AllProduct from '../../components/allProduct/AllProduct';
import Contact from '../../components/contact/Contact';
import About from '../../components/about/About';
import BrandSection from '../../components/brandSection/BrandSection';

const Home = () => {
    return (
        <>
            {/* hero section */}
            <section className="container mx-auto md:mt-16 mt-5">
                <HomeHeroSection />
            </section>

            {/* hot Product section */}
            <section className="container mx-auto md:mt-16 mt-5">
                <HotProduct />
            </section>

            {/* category section  */}
            <section className="">
                <CategorySection />
            </section>

            {/* all product section  */}

            <section className="container mx-auto md:mt-16 mt-5">
                <AllProduct />
            </section>

            {/* contact section */}

            <section className=" md:mt-16 mt-5">
                <Contact />
            </section>

            {/* brand section */}
            <section className="container mx-auto md:mt-16 mt-5" id="brand">
                <BrandSection />
            </section>

            <section className="container mx-auto md:my-16 my-5">
                <About />
            </section>
        </>
    );
};

export default Home;
