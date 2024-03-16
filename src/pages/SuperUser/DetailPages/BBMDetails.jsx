
import PropTypes from 'prop-types';
import profileImg from "../../../assets/avator.png";

const BBMDetails = ({ data, baseUrl }) => {
    return (
        <div className="container mx-auto">
            <div className="mt-10">
                <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-4">
                    <h3 className="lg:col-span-3 font-medium leading-[34.32px] text-[24px]">
                        Business Information
                    </h3>
                    <div className="sm:col-span-2">
                        <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-gray-200 py-3 sm:col-span-1 sm:px-0">
                            <div >
                                <h5 className="font-normal leading-[17.16px] text-[12px]">
                                    Full Legal Business Name *
                                </h5>
                                <div className="mt-1">
                                    {data?.clientName}
                                </div>
                            </div>

                            <div>
                                <h5 className="font-normal leading-[17.16px] text-[12px]">
                                    Business Address *
                                </h5>
                                <div className="mt-1">
                                    {data?.businessAddress}
                                </div>
                            </div>
                        </div>

                        <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-gray-200 py-3 sm:col-span-1 sm:px-0">
                            <div>
                                <h5 className="font-normal leading-[17.16px] text-[12px]">
                                    Business Email Address *
                                </h5>
                                <div className="mt-2">
                                    {data?.businessMail}
                                </div>
                            </div>
                            <div>
                                <h5 className="font-normal leading-[17.16px] text-[12px]">
                                    Business Phone number *
                                </h5>
                                <div className="mt-2">
                                    {data?.contactNumber}
                                </div>
                            </div>
                        </div>

                        <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-b border-t border-gray-200 py-3 sm:col-span-1 sm:px-0">
                            <div>
                                <h5 className="font-normal leading-[17.16px] text-[12px]">
                                    Company website
                                </h5>
                                <div className="mt-2">
                                    {data?.companyWebsite ? data.companyWebsite : 'Not Filled'}
                                </div>
                            </div>
                            <div>
                                <h5 className="font-normal leading-[17.16px] text-[12px]">
                                    Owner Agent Information
                                </h5>
                                <div className="mt-2">
                                    {data?.ownerAgentInformation ? data.ownerAgentInformation : 'Not Filled'}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg border border-dashed border-gray-900/25">
                        <div className="flex justify-center">
                            <div className="text-center mb-2 ">
                                <div className="w-56">
                                    {data?.idProof ?
                                        <img
                                            className="img-fluid2"
                                            src={`${baseUrl}${data?.idProof}`}
                                            alt="..."
                                        />
                                        :
                                        <img className="img-fluid2" src={profileImg} alt="" />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Write a professional Bio
                    </h5>
                    <div className="mt-2 professional_data">
                        <div dangerouslySetInnerHTML={{ __html: data?.professional ? data?.professional : "Not Filled" }} />
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <h3 className="mb-4 font-medium leading-[34.32px] text-[24px] sm:col-span-6">
                    Licensing Credentials
                </h3>
                <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-gray-200 py-3 sm:col-span-1 sm:px-0">
                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            License Number
                        </h5>
                        <div className="mt-2">
                            {data?.licenseNumber ? data?.licenseNumber : "Not Filled"}
                        </div>
                    </div>
                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Date of Licensing
                        </h5>
                        <div className="mt-2">
                            {data?.dateOfLicenceing ? data?.dateOfLicenceing : "Not Filled"}
                        </div>
                    </div>
                </div>

                <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-b border-t border-gray-200 py-3 sm:col-span-1 sm:px-0">
                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Licensing Authority
                        </h5>
                        <div className="mt-2">
                            {data?.licensingAuthority ? data?.licensingAuthority : "Not Filled"}
                        </div>
                    </div>
                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Bonding Capacity
                        </h5>
                        <div className="mt-2">
                            {data?.bondingCapacity ? data?.bondingCapacity : "Not Filled"}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="mt-10">
                    <h3 className="mb-4 font-medium leading-[34.32px] text-[24px]  sm:col-span-6">
                        Service Details
                    </h3>
                    <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-gray-200 py-3 sm:col-span-1 sm:px-0">

                        <div>
                            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                                Coverage Areas
                            </h5>
                            <div className="mt-2">
                                {data?.coverageArea ? data?.coverageArea : "Not Filled"}
                            </div>
                        </div>
                        <div>
                            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                                Fee Structure
                            </h5>
                            <div className="mt-2">
                                {data?.feeStructure ? data?.feeStructure : "Not Filled"}
                            </div>
                        </div>
                    </div>

                    <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-b border-gray-200 py-3 sm:col-span-1 sm:px-0">
                        <div>
                            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                                Types of bonds served
                            </h5>
                            <div className="mt-2">
                                {data?.typesOfBonds ? data?.typesOfBonds : "Not Filled"}
                            </div>
                        </div>

                        <div>
                            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                                Years of Experience as a Bail Bondsman
                            </h5>
                            <div className="mt-2">
                                {data?.experience ? data?.experience : "Not Filled"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <h3 className="font-medium leading-[34.32px] text-[24px]">
                    Professional Enhancement
                </h3>

                <div className="flex justify-between  flex-wrap flex-row w-full mt-2">
                    <p className="mt-2 text-[14px]">
                        Boost Your Profile! Connect Google Reviews and Testimonials to
                        showcase your expertise. Click below to
                        <br /> elevate your professional reputation on Global legals
                    </p>
                </div>
            </div>

            <div className="flex-1 border-t border-gray-300 mt-3"></div>

            <div className="mt-4">
                <div className='mb-4'>
                    <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Calendly Event Link
                    </h5>
                    <div className="mt-2">
                        {data?.calendlyUrl ? data?.calendlyUrl : "Not Filled"}
                    </div>
                </div>

                <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-b border-gray-200 py-3 sm:col-span-1 sm:px-0">
                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Linkedin profile
                        </h5>
                        <div className="mt-2">
                            {data?.linkedInProfile ? data?.linkedInProfile : "Not Filled"}
                        </div>
                    </div>

                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Twitter Profile
                        </h5>
                        <div className="mt-2">
                            {data?.twitterProfile ? data?.twitterProfile : "Not Filled"}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <h3 className="mb-4 font-medium leading-[34.32px] text-[24px] sm:col-span-6">
                    References and Permissions
                </h3>
                <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-b border-gray-200 py-3 sm:col-span-1 sm:px-0">
                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Client References
                        </h5>
                        <div className="mt-2">
                            {data?.clientReferences ? data?.clientReferences : "Not Filled"}
                        </div>
                    </div>
                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Contact number
                        </h5>
                        <div className="mt-2">
                            {data?.referenceContactNumber ? data?.referenceContactNumber : "Not Filled"}
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
export default BBMDetails;


BBMDetails.propTypes = {
    data: PropTypes.object,
    baseUrl: PropTypes.string,
}