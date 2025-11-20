import { ExternalLink } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects = [
    // Project List
    {
        id: 1,
        title: "Project Leadership Course",
        description: "lorum epsum",
        image: "/projects/ProjectLeadership.png",
        tags: ["Articulate 360", "Canva", "Adobe Creative Suite", "Camtasia", "MS Office Tools"],
        demoUrl: "https://rise.articulate.com/share/ZBOrE0OBh1LVXtp-2CYwAN3hJrDG_sVw"



    },

    {
        id: 2,
        title: "Present Your Work Professionally Part 1 Course",
        description: "lorum epsum",
        image: "/projects/PYWP1.png",
        tags: ["Articulate 360", "Canva", "Adobe Creative Suite", "Camtasia", "MS Office Tools"],
        demoUrl: "https://rise.articulate.com/share/ZVPlB-vY6YlmZZrjicNhuV2NZStto6Qa"
    },

    {
        id: 3,
        title: "Present Your Work Professionally Part 2 & 3 Course",
        description: "lorum epsum",
        image: "/projects/PYWP23.png",
        tags: ["Articulate 360", "Canva", "Adobe Creative Suite", "Camtasia", "MS Office Tools"],
        demoUrl: "https://rise.articulate.com/share/lYpvhrbv8PaX5fsodnSFZUXogMscS9Va"
    },

];

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary ">Projects </span></h2>

            <p className="text-center text-muted-foreground-color mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was developed for the organizations
                that I worked for with the learner's overall experience at the forefront of the unique learning experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">

                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                                ))}

                            </div>

                            <h3 className="text-xl font-semibold mb-1">{project.title}
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </h3>

                        </div>



                    </div>
                ))}
            </div>

            <div className="text-center mt-12">

                <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/burnsandrew88">
                    Check My Github <ArrowRight size={16} />
                </a>

            </div>
        </div>
    </section>
};