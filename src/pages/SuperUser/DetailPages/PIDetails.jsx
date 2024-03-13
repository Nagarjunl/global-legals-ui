import PropTypes from 'prop-types';
import profileImg from "../../../assets/avator.png";

const PIDetails = ({ data, baseUrl }) => {
    return (
        <div className="container mx-aut">
            <div className="mt-10">
                <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-4">
                    <h3 className="lg:col-span-3 font-medium leading-[34.32px] text-[24px] w-full">
                        Personal Information
                    </h3>
                    <div className="sm:col-span-2">
                        <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-gray-200 py-3 sm:col-span-1 sm:px-0">
                            <div>
                                <h5 className="font-normal leading-[17.16px] text-[12px]">
                                    Enter your full name *
                                </h5>
                                <div className="mt-2">
                                    {data?.clientName}
                                </div>
                            </div>
                            <div>
                                <h5 className="font-normal leading-[17.16px] text-[12px]">
                                    Enter Email Address *
                                </h5>
                                <div className="mt-2">
                                    {data?.businessMail}
                                </div>
                            </div>
                        </div>

                        <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-b border-gray-200 py-3 sm:col-span-1 sm:px-0">
                            <div className="mt-2">
                                <h5 className="font-normal leading-[17.16px] text-[12px]">
                                    Contact number *
                                </h5>
                                <div className="mt-2">
                                    {data?.contactNumber}
                                </div>
                            </div>
                            <div className="mt-2">
                                <h5 className="font-normal leading-[17.16px] text-[12px]">
                                    Location / Address *
                                </h5>
                                <div className="mt-2">
                                    {data?.businessAddress}
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
                    Professional Credentials
                </h3>

                <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-gray-200 py-3 sm:col-span-1 sm:px-0">
                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Private Investigator License Number (if applicable)
                        </h5>
                        <div className="mt-2">
                            {data?.licenseNumber ? data.licenseNumber : 'Not Filled'}
                        </div>
                    </div>
                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            License Expiry Date
                        </h5>
                        <div className="mt-2">
                            {data?.licenseExpiryDate ? data.licenseExpiryDate : 'Not Filled'}
                        </div>
                    </div>
                </div>

                <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-b border-gray-200 py-3 sm:col-span-1 sm:px-0">
                    <div className="sm:col-span-3 ">
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Years of Experience as a Private Investigator:
                        </h5>

                        <div className="mt-2">
                            {data?.yearsOfExperience ? data.yearsOfExperience : 'Not Filled'}
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-10">
                <h3 className="mb-4 font-medium leading-[34.32px] text-[24px] sm:col-span-6">
                    Military Background ( for Army Veterans)
                </h3>

                <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-gray-200 py-3 sm:col-span-1 sm:px-0">
                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Branch of Service (if applicable)
                        </h5>
                        <div className="mt-2">
                            {data?.branchOfService ? data.branchOfService : 'Not Filled'}
                        </div>
                    </div>
                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Rank at Discharge (if applicable)
                        </h5>
                        <div className="mt-2">
                            {data?.rankAtDischarge ? data.rankAtDischarge : 'Not Filled'}
                        </div>
                    </div>
                </div>

                <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-b border-gray-200 py-3 sm:col-span-1 sm:px-0">
                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Military Occupational Specialty (MOS) (if applicable)
                        </h5>

                        <div className="mt-2">
                            {data?.mos ? data.mos : 'Not Filled'}
                        </div>
                    </div>

                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Years of Military Service (if applicable)
                        </h5>
                        <div className="mt-2">
                            {data?.yms ? data.yms : 'Not Filled'}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="mt-10">
                    <h3 className="mb-4 font-medium leading-[34.32px] text-[24px] sm:col-span-6">
                        Business Information ( if - applicable)
                    </h3>

                    <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-gray-200 py-3 sm:col-span-1 sm:px-0">
                        <div>
                            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                                Business Name
                            </h5>
                            <div className="mt-2">
                                {data?.businessName ? data.businessName : 'Not Filled'}
                            </div>
                        </div>
                        <div>
                            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                                Business Address
                            </h5>
                            <div className="mt-2">
                                {data?.location ? data.location : 'Not Filled'}
                            </div>
                        </div>
                    </div>

                    <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-b border-gray-200 py-3 sm:col-span-1 sm:px-0">

                        <div>
                            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                                Business Email
                            </h5>
                            <div className="mt-2">
                                {data?.additionalMail ? data.additionalMail : 'Not Filled'}
                            </div>
                        </div>

                        <div>
                            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                                Business Phone number
                            </h5>
                            <div className="mt-2">
                                {data?.businessPhoneNumber ? data.businessPhoneNumber : 'Not Filled'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <h3 className="mb-4 font-medium leading-[34.32px] text-[24px]  sm:col-span-6">
                    Service Details
                </h3>

                <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-gray-200 py-3 sm:col-span-1 sm:px-0">

                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Type of Security Services Offered
                        </h5>
                        <div className="mt-2">
                            {data?.tsso ? data.tsso : 'Not Filled'}
                        </div>
                    </div>
                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Coverage Areas
                        </h5>
                        <div className="mt-2">
                            {data?.coverageArea ? data.coverageArea : 'Not Filled'}
                        </div>
                    </div>
                </div>

                <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-b border-gray-200 py-3 sm:col-span-1 sm:px-0">
                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Fee Structure
                        </h5>
                        <div className="mt-2">
                            {data?.feeStructure ? data.feeStructure : 'Not Filled'}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <h3 className="mb-4 font-medium leading-[34.32px] text-[24px] sm:col-span-6">
                    Certification and Specialization
                </h3>

                <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-b border-gray-200 py-3 sm:col-span-1 sm:px-0">

                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Relevant certifications for private investigations
                        </h5>
                        <div className="mt-2">
                            {data?.relevantCertifications ? data.relevantCertifications : 'Not Filled'}
                        </div>
                    </div>
                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Specializations or areas of expertise
                        </h5>
                        <div className="mt-2">
                            {data?.areaOfExpertise ? data.areaOfExpertise : 'Not Filled'}
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-10">
                <h3 className="font-medium leading-[34.32px] text-[24px] text-gray-900">
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
                        {data?.calendlyUrl ? data.calendlyUrl : 'Not Filled'}
                    </div>
                </div>

                <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-b border-gray-200 py-3 sm:col-span-1 sm:px-0">
                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px]  mt-2">
                            Linkedin profile
                        </h5>
                        <div className="mt-2">
                            {data?.linkedInProfile ? data.linkedInProfile : 'Not Filled'}
                        </div>
                    </div>
                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Twitter Profile
                        </h5>
                        <div className="mt-2">
                            {data?.twitterProfile ? data.twitterProfile : 'Not Filled'}
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
                            {data?.clientReferences ? data.clientReferences : 'Not Filled'}
                        </div>
                    </div>
                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Contact number
                        </h5>
                        <div className="mt-2">
                            {data?.referenceContactNumber ? data.referenceContactNumber : 'Not Filled'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PIDetails;

PIDetails.propTypes = {
    data: PropTypes.object,
    baseUrl: PropTypes.string,
}