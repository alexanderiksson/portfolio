import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const form = useRef();

    const [alert, setAlert] = useState("");
    const [alertStyle, setAlertStyle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setAlert("Sending...");
        setAlertStyle("bg-blue-500");

        emailjs
            .sendForm("service_w4r7hwo", "template_z70d7rw", form.current, {
                publicKey: "WZwgN1nzjJgqg5Wtu",
            })
            .then(
                () => {
                    setAlert("Your message has been sent!");
                    setAlertStyle("bg-green-500");
                },
                (error) => {
                    console.log("FAILED...", error);
                    setAlert("Something went wrong!");
                    setAlertStyle("bg-red-500");
                }
            );
    };

    return (
        <form
            className="w-full max-w-lg flex flex-col gap-8"
            ref={form}
            onSubmit={handleSubmit}
            aria-label="Contact form"
        >
            <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                    className="p-2 rounded-sm bg-white bg-opacity-10 border border-white border-opacity-10 shadow-lg"
                    type="text"
                    id="name"
                    name="name"
                    aria-label="Name"
                    required
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email">E-mail</label>
                <input
                    className="p-2 rounded-sm bg-white bg-opacity-10 border border-white border-opacity-10 shadow-lg"
                    type="email"
                    id="email"
                    name="email"
                    aria-label="E-mail"
                    required
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="message">Message</label>
                <textarea
                    className="p-2 rounded-sm bg-white bg-opacity-10 border border-white border-opacity-10 shadow-lg"
                    name="message"
                    id="message"
                    rows="5"
                    aria-label="Message"
                    required
                ></textarea>
            </div>

            {alert && (
                <p
                    className={`${alertStyle} w-full p-2 bg-opacity-30 backdrop-blur-lg rounded-sm text-center`}
                >
                    {alert}
                </p>
            )}

            <button className="button">Send</button>
        </form>
    );
};

export default ContactForm;
