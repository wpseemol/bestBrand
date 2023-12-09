import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/loading/Loading';

const PrivetRoute = ({ children }) => {
    const loginRegInfo = useContext(AuthContext);
    const { user, loading } = loginRegInfo || {};

    const location = useLocation();

    if (loading) {
        return <Loading />;
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login" />;
};

export default PrivetRoute;

PrivetRoute.propTypes = {
    children: PropTypes.node,
};
