import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function ToastNotification(props) {

    const { message, type, showToaster } = props;
    const [show] = useState(showToaster);

    const toastOptions = {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
    };

    switch (type) {
        case "info":
            toast.info(message, toastOptions);
            break;
        case "success":
            toast.success(message, toastOptions);
            break;
        case "error":
            toast.error(message, toastOptions);
            break;
        case "warning":
            toast.warning(message, toastOptions);
            break;
        default:
            break;
    }


    return (
        <>
            {
                !show &&
                <ToastContainer />
            }
        </>
    );
}
export default ToastNotification;

ToastNotification.propTypes = {
    message: PropTypes.string,
    type: PropTypes.string,
    showToaster: PropTypes.bool,
}