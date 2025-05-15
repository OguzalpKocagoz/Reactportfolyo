import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  background: linear-gradient(
    225deg,
    #0a192f 0%,
    #0d1c37 25%,
    #112240 50%,
    #162a54 75%,
    #1a1f4d 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(
        circle at 20% 20%,
        rgba(100, 255, 218, 0.03) 0%,
        rgba(100, 255, 218, 0.01) 25%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 80%,
        rgba(100, 255, 218, 0.03) 0%,
        rgba(100, 255, 218, 0.01) 25%,
        transparent 50%
      );
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(225deg, 
        rgba(100, 255, 218, 0.05) 0%,
        transparent 45%
      ),
      linear-gradient(45deg, 
        transparent 55%,
        rgba(100, 255, 218, 0.05) 100%
      );
    pointer-events: none;
  }

  .top-fade {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 250px;
    background: linear-gradient(
      to top,
      transparent,
      #0a192f
    );
    pointer-events: none;
    z-index: 1;
  }

  .bottom-fade {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 250px;
    background: linear-gradient(
      to bottom,
      transparent,
      #1a1f4d
    );
    pointer-events: none;
    z-index: 1;
  }
`;

const AboutContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  color: #64ffda;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled(motion.div)`
  color: #8892b0;
  font-size: 1.25rem;
  line-height: 1.8;
  font-weight: 500;

  p {
    margin-bottom: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #ccd6f6;
    }
  }

  strong {
    color: #64ffda;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ImageContainer = styled(motion.div)`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    object-fit: cover;
    aspect-ratio: 1;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(100, 255, 218, 0.2);
    }
  }
`;

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <AboutSection id="about" ref={ref}>
      <div className="top-fade" />
      <AboutContainer>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Hakkımda
        </Title>
        <Content>
          <TextContent
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              Merhaba! Ben <strong>Oğuzalp Kocagöz</strong>, Unity ve Fullstack geliştirme alanlarında uzmanlaşmış bir yazılım geliştiricisiyim.
              Yazılım dünyasındaki yolculuğum, oyun geliştirme tutkumla başladı ve web teknolojileriyle devam etti.
            </p>
            <p>
              <strong>Unity</strong> ile oyun geliştirme konusunda belli bir deneyime sahibim. Modern web teknolojileri alanında
              <strong> React</strong>, <strong>Node.js</strong> ve çeşitli veritabanı sistemleriyle çalışarak,
              kullanıcı deneyimini ön planda tutan, yenilikçi ve sürdürülebilir çözümler üretiyorum. Ayrıca 
              <strong> siber güvenlik</strong> alanına ilgi duyuyor, <strong>Kali Linux</strong> üzerinde temel güvenlik testleri ve analizler gerçekleştiriyorum.
            </p>
            <p>
              Teknoloji dünyasındaki hızlı değişimleri yakından takip ediyor, sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyorum.
              Her projede en iyi kullanıcı deneyimini sunmak için <strong>modern teknolojiler</strong> ve <strong>best practice</strong>'leri
              kullanmaya özen gösteriyorum.
            </p>
          </TextContent>
          <ImageContainer
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Oğuzalp Kocagöz" style={{ maxHeight: '500px' }} />
          </ImageContainer>
        </Content>
      </AboutContainer>
      <div className="bottom-fade" />
    </AboutSection>
  );
};

export default About; 