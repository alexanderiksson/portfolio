import React from "react";
import { Helmet } from "react-helmet-async";
import PortfolioCard from "../components/PortfolioCard";
import useContentful from "../hooks/useContentful";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function Portfolio() {
    const { data, loading, error } = useContentful("portfolio", {
        order: "-sys.createdAt",
    });

    if (loading) {
        return <Loader />;
    }
    if (error) {
        return <Error />;
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>Portfolio - Alexander Eriksson</title>
            </Helmet>

            <div className="content">
                <h1 className="page-title">Portfolio</h1>
                <p className="page-description">
                    Explore some of the projects I have worked on in the past.
                </p>

                <div
                    className="w-full flex flex-col items-center gap-8"
                    aria-label="Portfolio"
                >
                    {(() => {
                        if (Array.isArray(data) && data.length > 0) {
                            return data.map((project) => (
                                <PortfolioCard
                                    key={project.fields.title}
                                    project={project}
                                />
                            ));
                        } else {
                            return <p>No projects to display.</p>;
                        }
                    })()}
                </div>
            </div>
        </React.Fragment>
    );
}
