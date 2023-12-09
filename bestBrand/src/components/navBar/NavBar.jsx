import {
    FaBars,
    FaCartFlatbed,
    FaMagnifyingGlass,
    FaRegUser,
    FaX,
} from 'react-icons/fa6';
import { menuArr, logo, offer, search } from '../navElement/NavElement';
import { useContext, useEffect, useState } from 'react';
import '../../assets/css/hover.css';
import { AuthContext } from '../../providers/AuthProvider';
import { NavLink } from 'react-router-dom';

import axios from 'axios';

const NavBar = () => {
    const [clickSerce, setClickSerce] = useState(false);
    const [menuShow, setMenuShow] = useState(false);

    const loginRegInfo = useContext(AuthContext);
    const { user, cardItemLength, setCardItemLength } = loginRegInfo || {};

    useEffect(() => {
        axios
            .get('https://best-brand-server.vercel.app/cart-items')
            .then(function (response) {
                setCardItemLength(response?.data?.length);
            })
            .catch(function () {
                // handle error
            });
    }, []);

    const cardDataLength = cardItemLength;

    const card = (
        <li className="text-white">
            {' '}
            <NavLink
                to="/cart-items"
                className={({ isActive }) => (isActive ? 'active' : '')}>
                <div className="flex md:flex-row flex-col items-center sm:gap-3 gap-1">
                    <div className="text-primaryColor text-3xl">
                        <FaCartFlatbed />
                    </div>
                    <div>
                        <h2 className="sm:text-lg text-sm font-semibold">
                            Cart<span>{user ? `(${cardDataLength})` : ''}</span>
                        </h2>
                        <p className="text-sm hidden md:block">Add items</p>
                    </div>
                </div>
            </NavLink>{' '}
        </li>
    );

    const account = (
        <li className="text-white">
            {' '}
            <NavLink
                to={user ? '/dashboard' : '/login'}
                className={({ isActive }) => (isActive ? 'active' : '')}>
                <div className="flex md:flex-row flex-col items-center sm:gap-3 gap-1">
                    <div className="text-primaryColor text-3xl">
                        {user ? (
                            user?.photoURL ? (
                                <img
                                    className="rounded-full w-10 h-10 object-cover"
                                    src={user?.photoURL}
                                    alt={
                                        user?.displayName
                                            ? user?.displayName
                                            : 'User Image'
                                    }
                                />
                            ) : (
                                <FaRegUser />
                            )
                        ) : (
                            <FaRegUser />
                        )}
                    </div>
                    <div>
                        <h2 className="sm:text-lg text-sm font-semibold">
                            Account
                        </h2>
                        {user ? (
                            <p className="text-sm hidden md:block">
                                {user?.email}
                            </p>
                        ) : (
                            <p className="text-sm hidden md:block">
                                register or Login
                            </p>
                        )}
                    </div>
                </div>
            </NavLink>{' '}
        </li>
    );

    return (
        <>
            <nav className="hidden md:block">
                <div>
                    <div className="bg-black py-2 fixed top-0 left-0 w-full z-50">
                        <ul className="container mx-auto flex justify-evenly items-center">
                            {/* logo */ logo}
                            <li>{/* search */ search}</li>
                            {/* offer */ offer}
                            {/* card */ card}
                            {/* account */ account}
                        </ul>
                    </div>
                    <div className="hidden md:block h-[6rem] w-full"></div>
                </div>
                <div className="shadow-lg">
                    <ul className="container mx-auto text-base font-medium py-2 flex items-center gap-5">
                        {menuArr?.map((itme, inx) => {
                            return <li key={inx}>{itme}</li>;
                        })}
                    </ul>
                </div>
            </nav>

            <nav className="md:hidden">
                <div>
                    <ul className="  flex justify-between items-center bg-black w-full fixed z-50 top-0 px-8">
                        <li className={`relative `}>
                            <div
                                className=" text-white text-2xl"
                                onClick={() => setMenuShow(!menuShow)}>
                                {menuShow ? <FaX /> : <FaBars />}
                            </div>
                            <ul
                                className={`absolute top-[3.25rem]  h-44 bg-gray-100 duration-500 ${
                                    menuShow
                                        ? '-left-[1.8rem]'
                                        : '-left-[20rem]'
                                }`}>
                                {menuArr?.map((itme, inx) => {
                                    return (
                                        <li
                                            key={inx}
                                            className="last:border-none hover:text-primaryColor duration-200 border-b border-black p-2 pr-36">
                                            {itme}
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>

                        {logo}
                        <li className="">
                            <div
                                className={`text-primaryColor text-2xl  ${
                                    menuShow && 'opacity-25'
                                }`}
                                onClick={() =>
                                    !menuShow && setClickSerce(!clickSerce)
                                }>
                                <FaMagnifyingGlass />
                            </div>
                            {clickSerce && (
                                <>
                                    <div
                                        onClick={() =>
                                            setClickSerce(!clickSerce)
                                        }
                                        className="absolute top-0 left-0 w-full h-screen bg-black/25 flex justify-center"></div>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2">
                                        {search}
                                    </div>
                                </>
                            )}
                        </li>
                    </ul>
                    <div className="w-ful h-[5rem]"> </div>
                </div>
                <div>
                    <ul className="fixed bottom-0 z-50 bg-black py-2 flex w-full justify-evenly">
                        {/* offer */ offer}

                        {/* card */ card}

                        {/* account */ account}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
