import Nav from "../components/Nav";
import Footer from "../components/FooterProfessional";

const Faq = () => {
    return (
        <>
            <Nav page={"faq"} />
            <div className="mx-auto container max-sm:px-6 lg:px-[120px] pb-3">
                <div className="w-full  mt-10">
                    <h2 className=" text-[30px]">
                        FAQ
                    </h2>
                </div>
            </div >
            <div className="mx-auto container sm:px-6 lg:px-8 mt-[80px]">
                <Footer />
            </div>
        </>
    )
}

export default Faq;
