import { useUnverifiedUserQuery, useVerifyUserMutation } from "../../services/userAPI";


const Table = () => {

  const { data, isLoading } = useUnverifiedUserQuery();
  const [verifyUser, { isLoading: verifyingmember }] = useVerifyUserMutation();

  const submitMember = async (data) => {
    try {
      await verifyUser(data)
        .unwrap()
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log("error");
    }
  }

  return (
    <div className="container mx-auto sm:px-6 lg:px-12">
      <div className="mt-10">
        <div className="grid xs:grid-cols-1 lg:grid-cols-1 gap-4">
          <div className="flex items-center">
            <h3 className="lg:col-span-3 font-medium leading-[34.32px] text-[24px]">
              Unverified Users
            </h3>
          </div>

          <div className="flex items-center">
            <table className="w-3/4 bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">Email</th>
                  <th className="py-2 px-4 border-b text-left">Payment Status</th>
                  <th className="py-2 px-4 border-b text-left">Verified</th>
                  <th className="py-2 px-4 border-b text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {!isLoading &&
                  data?.map((data) => (
                    <tr key={data.id}>
                      <td className="py-2 px-4 border-b">{data?.email}</td>
                      <td className="py-2 px-4 border-b">Success</td>
                      <td className="py-2 px-4 border-b">{data?.verify === true ? "true" : "false"}</td>
                      <td>
                        <button type="submit"
                          disabled={verifyingmember}
                          className="rounded-md my-1 mr-1 text-white bg-blue-800 border-blue-800 px-20 py-2 text-sm font-semibol shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid "
                          onClick={() => submitMember(data)}
                        >
                          Submit
                        </button>
                        {/* <button type="submit"
                          disabled={verifyingmember}
                          className="rounded-md my-1 text-white bg-blue-800 border-blue-800 px-20 py-2 text-sm font-semibol shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid "
                          onClick={ }
                        >
                          Undo
                        </button> */}
                      </td>
                    </tr>

                  ))
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
