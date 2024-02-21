import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = () => {

    const [limit] = useState(4);
    const [offset, setOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * limit) % data?.count;
        setOffset(newOffset);
    };

    useEffect(() => {
        if (!isLoading) {
            setPageCount(Math.ceil(data?.count / limit));
        }
    }, [setPageCount])

    return (
        <>
            < div className="container mx-auto px-12 py-12">
                <div className="mt-10">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-1 sm:items-center  sm:justify-end max-sm:justify-center">
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel=" > "
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={4}
                                pageCount={pageCount}
                                previousLabel=" < "
                                renderOnZeroPageCount={null}

                                containerClassName="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                previousLinkClassName="relative inline-flex items-center text-sm rounded-l-md px-4 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                nextLinkClassName="relative inline-flex items-center text-sm rounded-r-md px-4 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                pageLinkClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0"
                                breakLinkClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                activeLinkClassName="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pagination;