import { useState } from "react";
import {cn} from '@/lib/utils';

const skills = [
    // Instructional & Learning Design
    
    {name: "ADDIE", level: 95, category: "instructional design"},
    {name: "Iterative Design (SAM)", level: 95, category: "instructional design"},
    {name: "Kirkpatrick Model", level: 95, category: "instructional design"},
    {name: "Backwards Design", level: 95, category: "instructional design"},
    {name: "Gagné's Nine Events of Instruction", level: 95, category: "instructional design"},
    {name: "elearning", level: 95, category: "instructional design"},
    {name: "VILT/Webinars", level: 95, category: "instructional design"},
    {name: "Assessment Construction", level: 95, category: "instructional design"},
    {name: "Curriculum & Course Development", level: 95, category: "instructional design"},
    {name: "Learning Objectives", level: 95, category: "instructional design"},
    {name: "AI-Driven Instructional Design & Development", level: 90, category: "instructional design"},
    {name: "Prompt Engineering", level: 90, category:"instructional design"},



    //Project Management
    {name: "Scope Management", level: 95, category: "project management"},
    {name: "Scheduling & Time Management", level: 95, category: "project management"},
    {name: "Stakeholder Management", level: 95, category: "project management"},
    {name: "Cross-Functional Management", level: 95, category: "project management"},
    {name: "Leadership", level: 95, category: "project management"},
    

    //Web Development
    {name: "HTML/CSS", level: 95, category: "frontend"},
    {name: "JavaScript", level: 90, category: "frontend"},
    {name: "React", level: 90, category: "frontend"},
    {name: "Bootstrap", level:95, category: "frontend"},
    {name: "Node.js", level: 80, category: "backend"},
    {name: "Express.js", level:75, category: "backend"},
    {name: "MongoDB", level: 75, category: "backend"},
    {name: "Handlebars.js", level: 80, category: "frontend"},

    //Tools
    {name: "Articulate 360 (Rise & Storyline)", level: 95, category: "tools"},
    {name: "Camtasia", level: 95, category: "tools"},
    {name: "Adobe Creative Suite", level: 95, category: "tools"},
    {name: "Canva", level: 95, category: "tools"},
    {name: "Google Suite Applications", level: 95, category: "tools"},
    {name: "NotebookLM", level: 95, category: "tools"},
    {name: "Google Gemini", level: 95, category: "tools"},
    {name: "ChatGPT", level: 95, category: "tools"},
    {name: "Synthesia", level: 95, category: "tools"},
    {name: "ElevenLabs", level: 95, category: "tools"},
    {name: "VS Code", level: 95, category: "tools"},
    {name: "WordPress", level: 95, category: "tools"},
    {name: "Monday.com", level: 95, category: "tools"},
    {name: "Wrike", level: 95, category: "tools"},
];

const categories = ["all", "instructional design", "project management", "frontend" ,"backend", "tools"];





export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" ||  skill.category === activeCategory)
    return <section 
    id="skills" 
    className="py-24 px-4 relative bg-secondary/30">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => 
                <button key={key} 
                className={cn("px-4 py-2 rounded-full transition-colors duration-300 capitalize",
                   activeCategory ===  category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover: bg-secondary"
                )}
                onClick={() => setActiveCategory(category)}>
                    {category}
                </button>
                )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key)=> (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">

                        <div className="text-left mb-4">
                            <h3 className="font-semibold font-large">
                              {skill.name}  
                            </h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" style={{width: skill.level + "%"}}/>

                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>


                    </div>
                ))}

            </div>

        </div>
    </section>
};