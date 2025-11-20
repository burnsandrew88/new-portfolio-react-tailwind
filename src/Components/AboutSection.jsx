import { BrainCircuit } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import { Code } from "lucide-react";


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl ">
                <h2 className="text-3xl md: text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 ">
                        <h3 className="text-2xl font-semibold">
                            Learning Architect, Project Manager & Web Developer
                        </h3>
                        <p className="text-muted-foreground">
                            With over 10 years of experience in learning and instructional design, project management, and web development,
                            I specialize in creating unique learning experiences for B2B SaaS organziations.
                        </p>

                        <p className="text-muted-foreground">
                            I specialize in designing and deploying unique learning experiences for major organizations by combining a strong technical foundation with pedagogical strategy. 
                            I utilize cutting-edge instructional design software and web design methodologies to create custom, interactive portals and assets. 
                            My work is anchored by robust project management practices, which guarantee precise scope control and the timely, strategic delivery of all learning solutions.
                        </p>

                        <div className="flex flex-col sm:flew-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get In Touch</a>
                            <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover: bg-primary/10 transition-colors duration-30">Download CV</a>

                        </div>

                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <BrainCircuit className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Instructional & Learning Design
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Leverage innovative authoring tools and emerging learning technologies to design 
                                        unique, high-impact learning experiences that drive organizational change across large-scale enterprises.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <CalendarCheck className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Project Management
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Utlize project management principles to define project scope and gather stakeholder requirements, 
                                        ensuring all learning solutions are precisely aligned with business objectives and learner needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Web Development
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Apply full-stack web development expertise, including front-end frameworks and back-end logic, to engineer fully customized learning systems and interactive simulations 
                                        that dynamically respond to learner input, creating complex experiences unachievable with out-of-the-box authoring or basic LMS software.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};