import PropTypes from 'prop-types';

export default function StripePagination({
    setNextId,
    setPreviousId,
    hasMore,
    next,
    previous,
    initTrue
}) {

    console.log(hasMore);
    return (
        <div className='py-2'>
            <nav className='block'>
                <ul className='flex pl-0 rounded list-none flex-wrap'>
                    <li>
                        <button
                            type='button'
                            onClick={() => {
                                setPreviousId();
                            }}
                            href='#'
                            className="bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                            disabled={hasMore === false && previous === true || initTrue}
                        >
                            Previous
                        </button>
                    </li>
                    <li>
                        <button
                            type='button'
                            onClick={() => {
                                setNextId();
                            }}
                            href='#'
                            className="bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                            disabled={hasMore === false && next === true}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

StripePagination.propTypes = {
    setNextId: PropTypes.func,
    setPreviousId: PropTypes.func,
    hasMore: PropTypes.bool,
    next: PropTypes.bool,
    previous: PropTypes.bool,
    initTrue: PropTypes.bool,
}