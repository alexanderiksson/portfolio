import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <React.Fragment>
            <Helmet>
                <title>Home - Alexander Eriksson</title>
            </Helmet>

            <div className="content">
                <section className="w-full flex flex-col justify-center items-center text-center gap-10">
                    <h1 className="text-4xl sm:text-5xl">Alexander Eriksson</h1>
                    <p className="text-base sm:text-xl">
                        Frontend Developer, Stockholm
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link className="button" to="/contact">
                            Contact me
                        </Link>
                        <Link className="button" to="/portfolio">
                            Portfolio
                        </Link>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
}
