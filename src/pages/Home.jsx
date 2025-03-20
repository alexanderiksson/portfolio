import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../animations/default";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home - Alexander Eriksson</title>
            </Helmet>

            <div className="content">
                <motion.section
                    className="w-full flex flex-col justify-center items-center text-center gap-10"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1
                        className="text-4xl sm:text-5xl"
                        variants={itemVariants}
                    >
                        Alexander Eriksson
                    </motion.h1>
                    <motion.p
                        className="text-base sm:text-xl"
                        variants={itemVariants}
                    >
                        Frontend Developer, Stockholm
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        variants={itemVariants}
                    >
                        <Link className="button" to="/contact">
                            Contact me
                        </Link>
                        <Link className="button" to="/portfolio">
                            Portfolio
                        </Link>
                    </motion.div>
                </motion.section>
            </div>
        </>
    );
}
