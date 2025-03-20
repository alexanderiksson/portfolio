import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../animations/fast";

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
        <motion.form
            className="w-full max-w-xl flex flex-col gap-8"
            ref={form}
            onSubmit={handleSubmit}
            aria-label="Contact form"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div className="flex flex-col gap-2" variants={itemVariants}>
                <label htmlFor="name">Name</label>
                <input
                    className="p-2 rounded bg-white bg-opacity-10 border border-white border-opacity-10"
                    type="text"
                    id="name"
                    name="name"
                    aria-label="Name"
                    required
                />
            </motion.div>
            <motion.div className="flex flex-col gap-2" variants={itemVariants}>
                <label htmlFor="email">E-mail</label>
                <input
                    className="p-2 rounded bg-white bg-opacity-10 border border-white border-opacity-10"
                    type="email"
                    id="email"
                    name="email"
                    aria-label="E-mail"
                    required
                />
            </motion.div>
            <motion.div className="flex flex-col gap-2" variants={itemVariants}>
                <label htmlFor="message">Message</label>
                <textarea
                    className="p-2 rounded bg-white bg-opacity-10 border border-white border-opacity-10"
                    name="message"
                    id="message"
                    rows="6"
                    aria-label="Message"
                    required
                ></textarea>
            </motion.div>

            {alert && (
                <p
                    className={`${alertStyle} w-full p-2 bg-opacity-30 backdrop-blur-lg rounded text-center border border-white border-opacity-10`}
                >
                    {alert}
                </p>
            )}

            <motion.button className="button" variants={itemVariants}>
                Send
            </motion.button>
        </motion.form>
    );
};

export default ContactForm;
