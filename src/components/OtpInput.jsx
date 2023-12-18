import { useState } from "react";
import OtpInput from "react-otp-input";

const Otpinput = () => {
  const [otp, setOtp] = useState("");

  return (
    <div className=" max-w-md">
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span className="mr-1"></span>}
        renderInput={(props) => (
          <input
            {...props}
            className=" h-12 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500 mb-2"
          />
        )}
        inputStyle={{
          border: "1px solid gray",
          borderRadius: "8px",
          width: "55px",
          height: "45px",
          fontSize: "18px",
          color: "black",
          fontWeight: "400",
          caretColor: "gray",
          transition: "border-color 0.3s",
        }}
        focusStyle={{}}
      />
    </div>
  );
};

export default Otpinput;
