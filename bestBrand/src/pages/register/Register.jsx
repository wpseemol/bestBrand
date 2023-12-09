import { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa6';

import { AuthContext } from '../../providers/AuthProvider';
import Title from '../../components/title/Title';

const Register = () => {
    const loginRegInfo = useContext(AuthContext);
    const { singUp, logInGoogle, user } = loginRegInfo || {};
    const location = useLocation();
    const navigate = useNavigate();
    // register function call
    const handaleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        //   const name = form.name.value;
        const email = form.email.value;
        //    const phone = form.phone.value;

        const password = form.password.value;

        if (password.length < 6) {
            Swal.fire({
                title: 'Error!',
                text: 'Password less than 6 Character.',
                icon: 'error',
                confirmButtonText: 'Okay',
            });
            return;
        }
        if (!/[A-Z]/.test(password)) {
            Swal.fire({
                title: 'Error!',
                text: 'Password must least one capital letter.',
                icon: 'error',
                confirmButtonText: 'Okay',
            });
            return;
        }
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            Swal.fire({
                title: 'Error!',
                text: 'Password must have special character',
                icon: 'error',
                confirmButtonText: 'Okay',
            });
            return;
        }

        singUp(email, password)
            .then(() => {
                // Signed up Successful

                Swal.fire({
                    title: 'Successful!',
                    text: 'Signed up Successful',
                    icon: 'success',
                    confirmButtonText: 'Okay',
                });
                location?.state ? navigate(location?.state) : navigate('/');
                form.reset();
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Okay',
                });
            });
    };

    const handalLoginwitheGoogle = () => {
        logInGoogle();
    };

    useEffect(() => {
        user && navigate('/');
    }, [user]);

    return (
        <>
            <section className="container mx-auto mb-8">
                <div>
                    <Title>Register</Title>{' '}
                </div>
                <div className="h-full">
                    {/* Left column container with background */}
                    <div className="g-6 flex h-full flex-wrap flex-row-reverse items-center justify-center lg:justify-between">
                        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-4/12 xl:w-6/12">
                            <img
                                src="https://i.ibb.co/Z105HpM/login-page-banar-1.webp"
                                className="w-full"
                                alt="Sample image"
                            />
                        </div>

                        {/* Right column container */}
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 ">
                            <form
                                onSubmit={handaleRegister}
                                className="sm:px-16 lg:ml-28">
                                {/* Sign in section */}
                                <div className="flex flex-row items-center justify-center lg:justify-start">
                                    <p className="mb-0 mr-4 text-lg">
                                        Sign in with
                                    </p>

                                    {/* google */}
                                    <button
                                        onClick={handalLoginwitheGoogle}
                                        type="button"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        className=" hover:bg-slate-100 text-center px-2 
                                        mx-1 h-9 w-9 rounded-full uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0  active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] border">
                                        {/* google */}

                                        <FaGoogle />
                                    </button>
                                </div>

                                {/* Separator between social media sign in and email/password sign in */}
                                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p className="mx-4 mb-0 text-center font-semibold dark:text-black">
                                        Or
                                    </p>
                                </div>

                                {/* full name */}
                                <div
                                    className="relative mb-6"
                                    data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="peer customInputStyle"
                                        placeholder="Full Name"
                                        name="name"
                                    />
                                </div>
                                {/* Email input */}
                                <div
                                    className="relative mb-6"
                                    data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="peer customInputStyle"
                                        placeholder="Email address"
                                        name="email"
                                        required
                                    />
                                </div>

                                {/* phon number  */}
                                <div
                                    className="relative mb-6"
                                    data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="peer customInputStyle"
                                        placeholder="Phone Number"
                                        name="phone"
                                    />
                                </div>

                                {/* Password input  */}
                                <div
                                    className="relative mb-6"
                                    data-te-input-wrapper-init>
                                    <input
                                        type="password"
                                        className=" peer customInputStyle"
                                        id="exampleFormControlInput22"
                                        placeholder="Password"
                                        name="password"
                                        required
                                    />
                                </div>

                                <div className="mb-6 flex items-center justify-between">
                                    {/* Remember me checkbox */}
                                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                        <input
                                            className="customChackBoxStyle"
                                            type="checkbox"
                                            value=""
                                            id="exampleCheck2"
                                        />
                                        <label className="inline-block pl-[0.15rem] hover:cursor-pointer">
                                            Remember me
                                        </label>
                                    </div>

                                    {/* Forgot password link */}
                                    <a href="#!">Forgot password?</a>
                                </div>

                                {/* Login button  */}
                                <div className="text-center lg:text-left">
                                    <input
                                        type="submit"
                                        value="Register"
                                        className="seconderBtn"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                    />

                                    {/* Register link */}
                                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                        {`Have an account?`}
                                        <Link
                                            to="/login"
                                            className=" px-1 transition duration-150 ease-in-out text-primaryColor/90 hover:bg-primaryColor/10 focus:text-danger-600 active:text-danger-700">
                                            Login
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
