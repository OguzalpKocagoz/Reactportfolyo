import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaUniversity, FaUsers } from 'react-icons/fa';

const EducationSection = styled.section`
  min-height: 100vh;
  padding: 100px 20px;
  background: linear-gradient(180deg, #0a192f 0%, #112240 50%, #1a1f4d 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  color: #64ffda;
  margin-bottom: 4rem;
  text-align: center;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background: #64ffda;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
  }

  @media (max-width: 768px) {
    &::after {
      left: 31px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  left: ${props => props.position === 'left' ? '0' : '50%'};

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;
  }
`;

const TimelineContent = styled.div`
  padding: 20px;
  background: rgba(17, 34, 64, 0.8);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(100, 255, 218, 0.1);
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  right: ${props => props.position === 'left' ? '-60px' : 'auto'};
  left: ${props => props.position === 'right' ? '-60px' : 'auto'};
  background: #112240;
  border: 4px solid #64ffda;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
  z-index: 1;
  box-shadow: 0 0 10px rgba(100, 255, 218, 0.3);

  @media (max-width: 768px) {
    left: 10px;
  }
`;

const TimelineTitle = styled.h3`
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const TimelineDate = styled.p`
  color: #8892b0;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const TimelineDescription = styled.p`
  color: #ccd6f6;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const timelineItems = [
    {
      title: 'Ünye Canik Fen Lisesi',
      date: '2019 - 2023',
      description: 'Fen Bilimleri alanında lise eğitimi',
      icon: <FaGraduationCap size={20} />,
      position: 'left'
    },
    {
      title: 'Balıkesir Üniversitesi',
      date: '2023 - Devam Ediyor',
      description: 'Bilgisayar Mühendisliği Bölümü',
      icon: <FaUniversity size={20} />,
      position: 'right'
    },
    {
      title: 'Computer Society',
      date: '2023 - Devam Ediyor',
      description: 'Teknik Ekip Üyesi - Gönüllü Çalışma',
      icon: <FaUsers size={20} />,
      position: 'left'
    }
  ];

  return (
    <EducationSection id="education" ref={ref}>
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Eğitim & Deneyim
        </Title>
        <Timeline>
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              position={item.position}
              initial={{ opacity: 0, x: item.position === 'left' ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: item.position === 'left' ? -50 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TimelineContent>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineDate>{item.date}</TimelineDate>
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineContent>
              <TimelineIcon position={item.position}>
                {item.icon}
              </TimelineIcon>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </EducationSection>
  );
};

export default Education; 