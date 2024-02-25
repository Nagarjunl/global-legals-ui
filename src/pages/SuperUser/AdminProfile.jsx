import { useForm } from "react-hook-form";
import { useUpdateAdminPasswordMutation, useUpdateAdminDetailMutation } from "../../services/authAPI";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { currentUser } from "../../reducers/userSlice";


const AdminProfile = () => {

    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.current_user);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const {
        register: register2,
        formState: { errors: errors2 },
        handleSubmit: handleSubmit2,
        setValue: setValue2,
    } = useForm();


    const [updateAdminPassword] = useUpdateAdminPasswordMutation();
    const [updateAdminDetail] = useUpdateAdminDetailMutation();


    const submitPassword = async (data) => {
        const datas = { ...data, id: user.id };
        try {
            await updateAdminPassword(datas).unwrap()
                .then((res) => {
                    console.log(res.response.error);
                    if (res.response.error === "Unauthorized") {
                        alert("Current Password Doesnt Match");
                    }

                    if (res.response === "Password Updated") {
                        alert("Your password is updated. Please logout and login again");
                    }
                    reset();
                });
        } catch (error) {
            console.log("error");
        }
    }

    const submitDetail = async (data) => {
        const datas = { ...data, id: user.id };
        try {
            await updateAdminDetail(datas).unwrap()
                .then((res) => {
                    dispatch(currentUser(res));
                    if (res.role === "Founder") {
                        alert("Your Details is updated.");
                    }
                });
        } catch (error) {
            console.log("error");
        }
    }

    const cancelSubmitDetail = () => {
        setValue2("name", user?.name);
        setValue2("email", user?.email);
    }

    useEffect(() => {
        setValue2("name", user?.name);
        setValue2("email", user?.email);
    }, [user, setValue2]);

    return (
        <>

            <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">

                <div>
                    <h3 className="font-medium leading-[34.32px] text-[24px]">Profile Detail</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                        Update your profile associated with your account.
                    </p>
                </div>

                <form className="md:col-span-2" onSubmit={handleSubmit2(submitDetail)}>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:max-w-xl sm:grid-cols-6">

                        <div className="col-span-full">
                            <label htmlFor="new-password" className="block text-sm font-medium leading-6 ">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register2("name", { required: "Please Enter the field" })}
                                    type="text"
                                    className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors2.name && (
                                    <p className="font-normal leading-[17.16px] text-[12px] text-red-500 mt-2">{errors2.name.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label className="block text-sm font-medium leading-6 ">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register2("email", { required: "Please Enter the field" })}
                                    type="email"
                                    className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors2.email && (
                                    <p className="font-normal leading-[17.16px] text-[12px] text-red-500 mt-2">{errors2.email.message}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex">
                        <button
                            className="mr-4 rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 hover:bg-gray-50"
                            onClick={() => cancelSubmitDetail()}
                        >
                            Cancel
                        </button>
                        <button type="submit"
                            className="rounded-md text-white bg-blue-800 border-blue-800 px-3 py-2 text-sm font-semibol shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid ">
                            Update
                        </button>
                    </div>
                </form>
            </div>

            <div className="block border-t border-gray-300 mt-7"></div>

            <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                    <h3 className="font-medium leading-[34.32px] text-[24px]">Change Password</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                        Update your password associated with your account.
                    </p>
                </div>

                <form className="md:col-span-2" onSubmit={handleSubmit(submitPassword)}>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:max-w-xl sm:grid-cols-6">
                        <div className="col-span-full">
                            <label className="block text-sm font-medium leading-6 ">
                                Current Password
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register("currentPassword", { required: "Please enter the value" })}
                                    type="text"
                                    className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.currentPassword && (
                                    <p className="font-normal leading-[17.16px] text-[12px] text-red-500 mt-2">{errors.currentPassword.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 ">
                                New Password
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register("password", { required: "Please enter the value", minLength: { value: 8, message: "Enter atleast 8 charcters" } })}
                                    type="text"
                                    className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.password && (
                                    <p className="font-normal leading-[17.16px] text-[12px] text-red-500 mt-2">{errors.password.message}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex">
                        <button type="submit"
                            className="rounded-md text-white bg-blue-800 border-blue-800 px-3 py-2 text-sm font-semibol shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid ">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default AdminProfile;