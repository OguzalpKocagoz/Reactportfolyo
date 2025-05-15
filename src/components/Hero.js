import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  background: linear-gradient(
    135deg,
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
    background: radial-gradient(
      circle at 50% 50%,
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
      linear-gradient(45deg, 
        rgba(100, 255, 218, 0.05) 0%,
        transparent 45%
      ),
      linear-gradient(135deg, 
        transparent 55%,
        rgba(100, 255, 218, 0.05) 100%
      );
    pointer-events: none;
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
      #0a192f
    );
    pointer-events: none;
    z-index: 1;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const AnimationContainer = styled.div`
  flex: 1;
  max-width: 500px;
  height: 500px;

  @media (max-width: 968px) {
    max-width: 300px;
    height: 300px;
    order: -1;
  }
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  color: #64ffda;
  margin-bottom: 1rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: #ccd6f6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: #8892b0;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContainer>
        <ContentContainer>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Oğuzalp Kocagöz
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Unity & Fullstack Developer | Siber Güvenlik Meraklısı
          </Subtitle>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Oyun geliştirme ve web teknolojileri alanında uzmanlaşmış,
            yenilikçi çözümler üreten bir yazılım geliştiricisi.
          </Description>
        </ContentContainer>
        <AnimationContainer>
          <Lottie 
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
          />
        </AnimationContainer>
      </HeroContainer>
      <div className="bottom-fade" />
    </HeroSection>
  );
};

export default Hero; 