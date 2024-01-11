import verification from "../../assets/Verification.svg";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { useCreateMembersMutation } from "../../services/userAPI";

const people = [
  {
    name: "Verification",
    title: "Our team will review the information and details  you submitted",
  },
  {
    name: "Stay Tuned",
    title:
      "You will receive a confirmation email once the verification process is complete",
  },
  {
    name: "Profile Activation ",
    title:
      "Once verified, your profile will be activated, and you can start connecting with clients",
  },
];

const Verification = () => {

  // const [createMembers] = useCreateMembersMutation();
  // const dispatch = useDispatch();

  // const currentUserId = useSelector((state) => state.user.id)
  // const formType = useSelector((state) => state.formType.formType);
  // const formDatas = useSelector((state) => state.formType.formData);

  // const submitMembers = async (data) => {
  //   const datas = { ...data, userId: currentUserId, type: formType }
  //   try {
  //     await createMembers(datas)
  //       .unwrap()
  //       .then((res) => {
  //         const { result3, ...rest } = res;
  //         dispatch(formSubmited(true));
  //         dispatch(formData(""));
  //         dispatch(currentUser(result3));
  //       });
  //   } catch (error) {
  //     console.log("error");
  //   }
  // }

  // useEffect(() => {
  //   submitMembers(formDatas);
  // }, [])

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-start pt-4">
        <img src={verification} alt="Your Image" className="block mx-auto" />
      </div>
      <div className="text-center pt-3 text-2xl">Thank You for Signing Up!</div>
      <div className="text-center pt-3 text-sm">
        We&lsquo;ve received your information, and our team will now <br />
        verify the details you provided. This process ensures the <br />
        authenticity of our professional community.
      </div>
      <div className="text-center pt-16 text-2xl">So what’s next?</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pt-3 max-w-screen-md mx-auto">
        {people.map((person, index) => (
          <div
            className="bg-white p-4 rounded-md border border-solid border-white-200"
            key={index}
          >
            <h2 className="font-semibold mb-2 text-base text-center">
              {person.name}
            </h2>
            <p className="text-gray-600 text-xs text-center">{person.title} </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Verification;
