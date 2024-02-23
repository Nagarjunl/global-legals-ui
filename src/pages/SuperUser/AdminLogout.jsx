
import { useNavigate } from "react-router";
import { removeUser } from "../../reducers/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const AdminLogout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(removeUser());
        navigate("/");
    }

    useEffect(() => {
        logout();
    }, []);

}

export default AdminLogout;