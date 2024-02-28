import { Link, useNavigate, useParams } from "react-router-dom";
import { useLazyValidateResetLinkQuery } from "../../services/authAPI";
import { useEffect } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import GlobalLegals from "../../assets/GlobalLegals.svg";
import { useDispatch } from "react-redux";
import { setResetMail } from "../../reducers/auth/registerSlice";

const ResetPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { email, token } = useParams();

    const [trigger, { data, isLoading }] = useLazyValidateResetLinkQuery({ email, token }, {
        skip: email === undefined && token === undefined
    });

    useEffect(() => {
        trigger({ email, token });
    }, [trigger, email, token])

    useEffect(() => {
        if (!isLoading) {
            if (data?.result === true) {
                dispatch(setResetMail(email));
                navigate("/auth/newPassword");
            }
        }
    }, [isLoading, data])



    return (
        <>
            {!isLoading &&
                <div className="container mx-auto ">
                    <div className="flex h-screen items-center justify-center">
                        <div className="flex flex-col border border-gray-300 shadow-md px-4 py-6 w-3/5 text-center">
                            <div className="flex items-center justify-center py-3">
                                <Link to="/">
                                    <img
                                        className="h-12 w-auto"
                                        src={GlobalLegals}
                                        alt="Global Legals"
                                    />
                                </Link>
                            </div>
                            {data?.result === "link expired" &&
                                <p className="py-5">Your link is expired. Please Goto Forgot password to resend the link</p>
                            }
                            {data?.result === false &&
                                <p className="py-5">Your link is invalid. Please Goto Forgot password to resend the link</p>
                            }
                            <PrimaryButton type="button" buttonText="Goto Forgot Password" onClick={() => navigate("/auth/forgetPassword")} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ResetPassword;