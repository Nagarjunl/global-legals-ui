import PropTypes from 'prop-types';

export default function StripePagination({
    limit,
    totalRecords,
    currentPage,
    setNextId,
    setPreviousId
}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRecords / limit); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='py-2'>
            {/* <div>
                <p className='text-sm text-gray-700'>
                    Showing
                    <span className='font-medium'>
                        {" "}
                        {currentPage * limit - limit + 1}{" "}
                    </span>
                    to
                    <span className='font-medium'> {currentPage * limit} </span>
                    of
                    <span className='font-medium'> {totalRecords} </span>
                    results
                </p>
            </div> */}
            <nav className='block'>
                <ul className='flex pl-0 rounded list-none flex-wrap'>
                    <li>
                        <a
                            onClick={() => {
                                setPreviousId();
                            }}
                            href='#'
                            className="bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            Previous
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => {
                                setNextId();
                            }}
                            href='#'
                            className="bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

StripePagination.propTypes = {
    limit: PropTypes.number,
    totalRecords: PropTypes.number,
    setNextId: PropTypes.func,
    setPreviousId: PropTypes.func,
    currentPage: PropTypes.number,
}