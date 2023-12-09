import { Outlet } from 'react-router-dom';
import NavBar from '../navBar/NavBar';
import FooterSection from '../footerSection/FooterSection';

const Root = () => {
    return (
        <>
            <header className="font-mySansFont">
                <NavBar />
            </header>
            <main className="font-mySansFon">
                {' '}
                <Outlet />{' '}
            </main>
            {/* this si footer section */}
            <>
                <FooterSection />
            </>
        </>
    );
};

export default Root;
