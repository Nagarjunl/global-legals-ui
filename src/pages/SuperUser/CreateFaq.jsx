import { useForm } from "react-hook-form";
import { usePostFaqMutation } from "../../services/profileAPI";
import { useRef } from "react";
import PropTypes from 'prop-types';

const CreateFaq = (props) => {

    const { open, setOpen, hideButtons, btnLabel } = props;
    const cancelButtonRef = useRef(null)

    const [postFaq, { isLoading }] = usePostFaqMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await postFaq(data)
                .unwrap()
                .then(() => {
                    setOpen(!open);
                });
        } catch (error) {
            console.log("error");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="mt-10">
                        <div>
                            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                                Question
                            </h5>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    {...register("question", { required: "Please enter the question" })}
                                    placeholder="Enter Question"
                                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.question && (
                                    <p className="text-red-500">
                                        {errors.question.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div>
                            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                                Answer
                            </h5>
                            <div className="mt-2">
                                <textarea
                                    type="text"
                                    rows={5}
                                    {...register("answer", { required: "Please enter the answer" })}
                                    placeholder="Enter Answer"
                                    className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.answer && (
                                    <p className="text-red-500">
                                        {errors.answer.message}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {!hideButtons &&

                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        {!isLoading ?
                            <button
                                type="submit"
                                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                            >
                                {btnLabel}
                            </button>
                            :
                            <div>
                                <button
                                    className="flex w-full justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    disabled="disabled"
                                >
                                    <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                </button>
                            </div>
                        }
                        <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                        >
                            Cancel
                        </button>
                    </div>

                }
            </form >
        </>
    )
}

export default CreateFaq;

CreateFaq.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
    hideButtons: PropTypes.bool,
    btnLabel: PropTypes.string,
}