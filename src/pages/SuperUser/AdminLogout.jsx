
import { useNavigate } from "react-router";
import { removeUser } from "../../reducers/userSlice";
import { removeTokens } from "../../reducers/auth/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const AdminLogout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(removeTokens());
        dispatch(removeUser());
        navigate("/");
    }

    useEffect(() => {
        logout();
    }, []);

}

export default AdminLogout;