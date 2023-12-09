import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Profile = () => {
    const loginRegInfo = useContext(AuthContext);
    const { user } = loginRegInfo || {};

    return (
        <div className="md:w-2/3 w-full overflow-x-auto">
            <div className=" w-28 mx-auto  mb-5 overflow-hidden">
                {user?.photoURL ? (
                    <img
                        className="rounded-full w-full object-cover"
                        src={user?.photoURL}
                        alt={
                            user?.displayName ? user?.displayName : 'User Image'
                        }
                    />
                ) : (
                    <h2 className="text-lg font-bold">Your information</h2>
                )}
            </div>
            <table className="w-full text-left border border-separate rounded border-slate-200">
                <tbody>
                    <tr className="transition-colors duration-300 hover:bg-slate-50">
                        <td className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 w-40 border-t border-l first:border-l-0 border-slate-200">
                            Name
                        </td>
                        <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                            {user?.displayName ? user?.displayName : ''}
                        </td>
                    </tr>
                    <tr className="transition-colors duration-300 hover:bg-slate-50">
                        <td className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 border-t border-l first:border-l-0 border-slate-200">
                            Gmail
                        </td>
                        <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                            {user?.email ? user?.email : ''}
                        </td>
                    </tr>
                    <tr className="transition-colors duration-300 hover:bg-slate-50">
                        <td className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100 border-t border-l first:border-l-0 border-slate-200">
                            Phone
                        </td>
                        <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                            {user?.phoneNumber ? user?.phoneNumber : ''}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Profile;
