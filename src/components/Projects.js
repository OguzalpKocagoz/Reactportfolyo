import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  background: #0a192f;
`;

const ProjectsContainer = styled.div`
  max-width: 1000px;
  width: 100%;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: #64ffda;
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: #ccd6f6;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #64ffda;
  }
`;

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const projectsData = [
    {
      title: 'Number Detector',
      description: 'PHP kullanılarak geliştirilmiş sayı tanıma uygulaması.',
      github: 'https://github.com/OguzalpKocagoz/Number-Detector',
      live: null
    },
    {
      title: 'Checkerboard',
      description: 'C# ile geliştirilmiş dama tahtası uygulaması.',
      github: 'https://github.com/OguzalpKocagoz/Checkerboard',
      live: null
    },
    {
      title: 'Russian Roulette',
      description: 'C# ile geliştirilmiş Rus ruleti oyunu simülasyonu.',
      github: 'https://github.com/OguzalpKocagoz/Russian-Roulette',
      live: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <ProjectsSection id="projects" ref={ref}>
      <ProjectsContainer>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Projeler
        </Title>
        <ProjectsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} variants={itemVariants}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLinks>
                {project.github && (
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </ProjectLink>
                )}
                {project.live && (
                  <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects; 