const Table = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="pb-3">User Data</h2>

      <div className="flex items-center">
        <table className="w-3/4 bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Age</th>
              <th className="py-2 px-4 border-b text-left">City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">25</td>
              <td className="py-2 px-4 border-b">New York</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Jane Doe</td>
              <td className="py-2 px-4 border-b">30</td>
              <td className="py-2 px-4 border-b">Los Angeles</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
