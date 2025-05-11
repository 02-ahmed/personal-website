import React, { useEffect } from "react";
import {
  FaHtml5,
  FaJs,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaNode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiVite,
  SiVercel,
  SiMui,
  SiChakraui,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

interface SkillItemProps {
  name: string;
  icon: React.ReactNode;
  delay: number;
}

const SkillItem = ({ name, icon, delay }: SkillItemProps) => {
  return (
    <div className="skill-card" data-aos="fade-up" data-aos-delay={delay}>
      <div className="skill-card-inner">
        <div className="skill-icon-container">
          <div className="skill-icon">{icon}</div>
        </div>
        <div className="skill-info">
          <h3 className="skill-name">{name}</h3>
        </div>
      </div>
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  icon: string;
  skills: Array<{
    name: string;
    icon: React.ReactNode;
  }>;
  delay: number;
}

const SkillCategory = ({ title, icon, skills, delay }: SkillCategoryProps) => {
  return (
    <div
      className="skill-category-container"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="category-header">
        <div className="category-icon">{icon}</div>
        <h2 className="category-title">{title}</h2>
      </div>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            name={skill.name}
            icon={skill.icon}
            delay={(index + 1) * 50}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const developmentSkills = [
    { name: "HTML5", icon: <FaHtml5 size={32} /> },
    { name: "JavaScript", icon: <FaJs size={32} /> },
    { name: "TypeScript", icon: <SiTypescript size={32} /> },
    { name: "React", icon: <FaReact size={32} /> },
    { name: "Next.js", icon: <SiNextdotjs size={32} /> },
  ];

  const stylingTools = [
    { name: "CSS3", icon: <FaCss3 size={32} /> },
    { name: "Bootstrap", icon: <FaBootstrap size={32} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={32} /> },
    { name: "MUI", icon: <SiMui size={32} /> },
    { name: "Chakra", icon: <SiChakraui size={32} /> },
  ];

  const toolsAndPlatforms = [
    { name: "Node.js", icon: <FaNode size={32} /> },
    { name: "Firebase", icon: <SiFirebase size={32} /> },
    { name: "Git", icon: <FaGithub size={32} /> },
    { name: "Vite", icon: <SiVite size={32} /> },
    { name: "Vercel", icon: <SiVercel size={32} /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header" data-aos="fade-up">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          <SkillCategory
            title="Development"
            icon="💻"
            skills={developmentSkills}
            delay={100}
          />

          <SkillCategory
            title="Styling"
            icon="🎨"
            skills={stylingTools}
            delay={200}
          />

          <SkillCategory
            title="Tools & Platforms"
            icon="🛠️"
            skills={toolsAndPlatforms}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
