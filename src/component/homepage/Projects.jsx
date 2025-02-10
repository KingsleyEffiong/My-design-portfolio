import GitHubLink from "../../UI/GitHubLink";
import Links from "../../UI/Links";
import { PROJECTS } from "../../PROJECTS";
import { useProvider } from "../PostProvider";
import { motion } from "framer-motion";

function Projects() {
    const { responsive, section1 } = useProvider();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 1, // Animates child items with a delay between each
                duration: 0.6, // Duration of the animation (in seconds)
                ease: "easeOut", // Type of easing for the animation
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, x: 100 },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.6, // Duration of the animation (in seconds)
                ease: "easeOut", // Type of easing for the animation
            },
        },
    };


    return (
        <motion.section
            className="w-full h-auto py-6 px-7 border-b border-b-gray-200"
            ref={section1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }} // Animation triggers when 30% of the section is in view
            variants={containerVariants} // Container animation
        >
            <div>
                <h1
                    className={`font-bebas ${responsive ? "text-[3rem]" : "text-[4rem]"
                        } leading-[3.5rem]`}
                >
                    Featured Projects
                </h1>
                <span>
                    Here are some of the selected projects that showcase my
                    passion for front-end development.
                </span>
            </div>
            <motion.div
                className="w-full h-auto flex flex-col gap-5 my-4"
                variants={containerVariants}
            >
                {PROJECTS.sort((a, b) => b.year - a.year).map((project) => (
                    <motion.div
                        className={`flex gap-14 ${responsive ? "flex-col" : "flex-row"
                            } items-center justify-between`}
                        key={project.id}
                        variants={itemVariants} // Each item has its own animation
                    >
                        <div
                            className={`${responsive
                                ? "w-full h-[300px]"
                                : "w-[600px] h-[600px]"
                                } bg-[var(--dark-gray)] flex justify-center items-center rounded-2xl`}
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-[350px] h-[290px]"
                            />
                        </div>
                        <div
                            className={`${responsive ? "w-full" : "w-[600px]"
                                }`}
                        >
                            <h1 className="text-2xl">{project.about}</h1>
                            <p className="text-sm text-[var(--light-gray)]">
                                {project.info}
                            </p>
                            <h1 className="border-b border-b-[var(--light-gray)] py-4">
                                PROJECT INFO
                            </h1>
                            <div className="border-b border-b-[var(--light-gray)] py-4 text-sm text-[var(--light-gray)] flex justify-between">
                                <span>Year</span>
                                <span>{project.year}</span>
                            </div>
                            <div className="border-b border-b-[var(--light-gray)] py-4 text-sm text-[var(--light-gray)] flex justify-between">
                                <span>Role</span>
                                <span>{project.role}</span>
                            </div>
                            <div className="border-b border-b-[var(--light-gray)] py-4 text-sm text-[var(--light-gray)] flex justify-between">
                                <span>Stack</span>
                                <span>{project.stack}</span>
                            </div>
                            <div className="w-[284px] flex justify-around items-center mt-10">
                                <a href={project.link}>
                                    <Links />
                                </a>
                                <a href={project.git_hub_link}>
                                    <GitHubLink />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}

export default Projects;
