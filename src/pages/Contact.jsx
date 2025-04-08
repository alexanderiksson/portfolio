import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact me - Alexander Eriksson</title>
            </Helmet>

            <div className="content">
                <h1 className="page-title">Contact me</h1>
                <p className="page-description">
                    Any questions? Just give me a shout!
                </p>

                <div className="w-full flex flex-col justify-center items-center">
                    <ContactForm />
                </div>
            </div>
        </>
    );
}
