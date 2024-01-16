import { useEffect, useState } from "react";
import { useDeleteFileMutation, usePostFileMutation } from "../services/fileUploadAPI";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { formDataIdProof } from "../reducers/formTypeSlice";
import "../styles.css";


const baseUrl = import.meta.env.VITE_API_URL;
// const baseUrl = "https://api.chitmanager.com/";

const ImageUpload = () => {
    const [singleFile, setSingleFile] = useState("");
    const [postFile] = usePostFileMutation();
    const [deleteFile] = useDeleteFileMutation();

    const dispatch = useDispatch();

    const formIdProof = useSelector((state) => state.formType.formDataIdProof);

    const {
        register,
        setValue,
    } = useForm();


    const uploadFileAPI = async (e) => {
        const formFileData = new FormData();
        formFileData.append("idProof", e.target.files[0]);
        await postFile(formFileData)
            .unwrap()
            .then((res) => {
                dispatch(formDataIdProof(res.filename));
                setSingleFile(res.filename);
                setValue("idProof", res.filename);
            });
    };

    const removeImage = async (filename) => {
        await deleteFile(filename)
            .unwrap()
            .then(async () => {
                setSingleFile("");
                setValue("idProof", "");
                dispatch(formDataIdProof(""));
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        if (formIdProof !== "" || formIdProof !== undefined || formIdProof !== null || formIdProof !== "null") {
            setSingleFile(formIdProof);
        }
        setValue("idProof", `${formIdProof}`);
    }, [formIdProof, setValue, setSingleFile]);

    return (
        <>
            <div className="rounded-lg border border-dashed border-gray-900/25">
                <div className="flex justify-center">
                    <div className="text-center mb-2 ">
                        {singleFile.length > 0 && (
                            <div className="img-block bg-gray">
                                <img
                                    className="img-fluid2"
                                    src={`${baseUrl}${singleFile}`}
                                    alt="..."
                                />
                                <span
                                    className="remove_img"
                                    onClick={() => removeImage(singleFile)}
                                >
                                    {"X"}
                                </span>
                            </div>
                        )}
                        {singleFile.length === 0 && (
                            <>
                                <div className="mt-4 flex">
                                    <p className="mb-2 text-[16px] font-normal w-[204px]">
                                        Upload your <br></br>current photo
                                    </p>
                                </div>
                                <div className="upload-btn-wrapper-one">
                                    <button
                                        className="rounded-md bg-white px-3.5 mt-2 py-2.5 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid border-blue-500"
                                    > Browse & Upload </button>
                                    <input
                                        type="file"
                                        {...register("idProof")}
                                        onChange={(e) => uploadFileAPI(e)}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default ImageUpload;