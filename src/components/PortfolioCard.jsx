import React from "react";
import Arrow from "../assets/img/arrow.svg";
import { motion } from "framer-motion";

const PortfolioCard = ({ project, variants }) => {
    return (
        <motion.div
            className="bg-white bg-opacity-5 rounded-lg p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full shadow-xl border border-white border-opacity-10"
            variants={variants}
        >
            <div className="flex justify-center items-center w-full md:w-1/2">
                <img
                    src={`https:${project?.fields?.image?.fields?.file?.url}`}
                    alt={`Image for ${project.fields.title}`}
                    className="w-4/5"
                    loading="lazy"
                />
            </div>

            <div className="flex flex-col gap-4 items-center md:items-start w-full md:w-1/2">
                <h2 className="text-2xl font-semibold text-center md:text-left">
                    {project.fields.title}
                </h2>

                <div className="flex gap-2 flex-wrap justify-center md:justify-start w-full">
                    {project.fields.tags.map((tag) => (
                        <span
                            key={tag.fields.name}
                            className="flex items-center gap-1 bg-white bg-opacity-10 shadow-md py-1 px-2.5 rounded-full text-xs"
                        >
                            {tag.fields.icon && (
                                <img
                                    src={`https:${tag?.fields?.icon?.fields?.file?.url}`}
                                    alt={tag.fields.name}
                                    width="16"
                                    height="16"
                                />
                            )}
                            {tag.fields.name}
                        </span>
                    ))}
                </div>

                <p className="text-center md:text-left">
                    {project.fields.description}
                </p>

                {project.fields.githubLink && (
                    <a
                        href={project.fields.githubLink}
                        target="_blank"
                        className="button flex gap-2"
                        aria-label={`Show ${project.fields.title} on GitHub`}
                    >
                        Show on GitHub <img src={Arrow} alt="Arrow icon" />
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default PortfolioCard;
