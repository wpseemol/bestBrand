import { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa6';
import Title from '../../components/title/Title';

const Login = () => {
    const loginRegInfo = useContext(AuthContext);
    const { user, singIn, logInGoogle } = loginRegInfo || {};

    const location = useLocation();

    const navigate = useNavigate();

    const handaleLogin = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;

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

        singIn(email, password)
            .then(() => {
                Swal.fire({
                    title: 'Successful',
                    text: 'Log in Successful',
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
        logInGoogle()
            .then(() => {
                //successful login with Google
            })
            .catch(() => {
                // Handle Errors here.
            });
    };

    useEffect(() => {
        user && navigate('/');
    }, [user]);

    return (
        <>
            <section className="container mx-auto mb-8">
                <div>
                    <Title>Login</Title>{' '}
                </div>
                <div className="h-full">
                    {/* Left column container with background */}
                    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                            <img
                                src="https://i.ibb.co/yBtPFW7/login-page-banar.webp"
                                className="w-full"
                                alt="Sample image"
                            />
                        </div>

                        {/* Right column container */}
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 ">
                            <form
                                onSubmit={handaleLogin}
                                className="sm:px-16 lg:mr-28">
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
                                    <p className="mx-4 mb-0 text-center font-semibold dark:text-black border">
                                        Or
                                    </p>
                                </div>

                                {/* Email input */}
                                <div className="relative mb-6">
                                    <input
                                        type="text"
                                        className=" customInputStyle"
                                        placeholder="Email address"
                                        name="email"
                                    />
                                </div>

                                {/* Password input  */}
                                <div className="relative mb-6">
                                    <input
                                        type="password"
                                        className=" peer customInputStyle"
                                        placeholder="Password"
                                        name="password"
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
                                        value="Login"
                                        className="seconderBtn"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                    />

                                    {/* Register link */}
                                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                        {`Don't have an account?`}
                                        <Link
                                            to="/register"
                                            className="px-1 transition duration-150 ease-in-out text-primaryColor/90 hover:bg-primaryColor/10 focus:text-danger-600 active:text-danger-700">
                                            Register
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

export default Login;
