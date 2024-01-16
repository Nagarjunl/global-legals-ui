
import ReCAPTCHA from "react-google-recaptcha";
import { useCaptchaVerifyMutation } from "../services/userAPI";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

const ReCaptcha = ({ setError, clearErrors, errors }) => {
    const captchaRef = useRef(null)
    const [captchaRes] = useCaptchaVerifyMutation();

    // const {
    //     setError,
    //     clearErrors,
    //     formState: { errors },
    // } = useForm();

    const verifyRecaptcha = async () => {
        const token = captchaRef.current.getValue();
        try {
            await captchaRes(token).unwrap()
                .then((res) => {
                    console.log(res);
                    if (res.success) {
                        clearErrors("captcha");
                    }

                });
        } catch (error) {
            console.log("error");
        }
    };

    useEffect(() => {
        setError("captcha", { type: 'custom', message: 'Please Verify Captcha' })
    }, []);

    return (
        <>
            <div>
                {errors?.captcha && (
                    <p className="font-normal leading-[17.16px] text-[12px] text-red-500">
                        {errors?.captcha.message}
                    </p>
                )}
                <ReCAPTCHA
                    sitekey="6Ld2WlApAAAAAB01CsRIc7G2JKlojbd58DlKOcNy"
                    onChange={() => verifyRecaptcha()}
                    ref={captchaRef}
                />
            </div>
        </>
    )
}

export default ReCaptcha;