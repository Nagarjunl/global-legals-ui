import Nav from "../components/Nav";
import Footer from "../components/FooterProfessional";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import PropTypes from 'prop-types';

const minusIcon = '-'
const plusIcon = '+'
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const items = [
    { title: "How may we help?", content: lorem },
    { title: "How does the billing work?", content: lorem },
    { title: "Can a professional have more than one professional account? If so, how much does that professional billing work?", content: lorem },
    { title: "How do I sign up or log in?", content: lorem },
    { title: "How do I reply to a review? Where are the reviews being pulled from?", content: lorem },
    { title: "How to cancel your subscription?", content: lorem },
    { title: "How do I calculate the success of my Global Legals advertising", content: lorem },
]

function Accordion({ title, content }) {
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = () => setExpanded((current) => !current)
    return (
        <>
            <div className="flex-1 border-t border-gray-300"></div>

            <div className="my-2 sm:my-4 md:my-6  cursor-pointer bg-white" onClick={toggleExpanded}>

                <div className="px-6 text-left items-center select-none flex justify-between flex-row">
                    <h5 className="flex-1 font-medium">
                        {title}
                    </h5>
                    <div className="flex-none pl-2 font-medium text-2xl">{expanded ? minusIcon : plusIcon}</div>
                </div>

                <div className={`px-6 pt-0 overflow-hidden ${expanded ? "max-h-40" : "max-h-0"}`}>
                    <p className=" text-left pt-3">
                        {content}
                    </p>
                </div>
            </div>
        </>
    )
}
const Faq = () => {
    return (
        <>
            <Nav page={"faq"} />
            <div className="mx-auto container max-sm:px-6 lg:px-[120px] pb-3">

                <div className="mb-6 mt-10">
                    <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div >
                            <h3 className="font-medium leading-[34.32px] text-[24px]">
                                Frequently asked questions
                            </h3>
                        </div>

                        <div className="md:col-span-2">
                            <div className="sm:flex items-center md:justify-end max-sm:justify-start ">
                                <div className="w-100 relative rounded-md shadow-sm max-sm:w-full max-sm:mt-3 sm:pr-3">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-[7px] pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Enter Name or State only"
                                    />
                                </div>

                                <div className="max-sm:pt-3">
                                    <button type="submit"
                                        className="max-sm:w-[100%] rounded-md text-white bg-blue-800 border-blue-800 px-3 py-2 text-sm font-semibol shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-solid ">
                                        Ask Qusetions
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-6'>
                    <section className="max-w-6xl mx-auto text-center">
                        {items.map((item, index) => (
                            <Accordion key={index} title={item.title} content={item.content} />
                        ))}
                    </section>
                </div>
            </div >
            <div className="mx-auto container sm:px-6 lg:px-8 mt-[80px]">
                <Footer />
            </div>
        </>
    )
}

export default Faq;

Accordion.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
}
