import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const StyledContactSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  background: linear-gradient(90deg, 
    #0a192f 0%,
    #0c1b34 20%,
    #0e1d3a 40%,
    #112240 60%,
    #141f45 80%,
    #1a1f4d 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(180deg, rgba(10, 25, 47, 0.95) 0%, transparent 100%);
    pointer-events: none;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(0deg, rgba(26, 31, 77, 0.95) 0%, transparent 100%);
    pointer-events: none;
    z-index: 1;
  }
`;

const ContactContainer = styled.div`
  max-width: 1000px;
  width: 100%;
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

const ContactInfoContainer = styled(motion.div)`
  background: rgba(17, 34, 64, 0.8);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  max-width: 600px;
  margin: 0 auto 2rem auto;
`;

const ContactInfoTitle = styled.h3`
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #8892b0;
  font-size: 1.1rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
    color: #64ffda;
  }

  &:hover {
    transform: translateX(5px);
    background: rgba(100, 255, 218, 0.1);
  }
`;

const FormContainer = styled(motion.div)`
  background: rgba(17, 34, 64, 0.8);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  margin-bottom: 3rem;
  max-width: 600px;
  margin: 0 auto 3rem auto;
`;

const FormTitle = styled.h3`
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #64ffda;
  font-size: 1rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.3);
  border-radius: 8px;
  color: #ccd6f6;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #64ffda;
    box-shadow: 0 0 10px rgba(100, 255, 218, 0.2);
  }

  &::placeholder {
    color: #8892b0;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.3);
  border-radius: 8px;
  color: #ccd6f6;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #64ffda;
    box-shadow: 0 0 10px rgba(100, 255, 218, 0.2);
  }

  &::placeholder {
    color: #8892b0;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid #64ffda;
  border-radius: 8px;
  color: #64ffda;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
  margin: 0 auto;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
  }
`;

const SocialContainer = styled(motion.div)`
  background: rgba(17, 34, 64, 0.8);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  max-width: 600px;
  margin: 0 auto;
`;

const SocialTitle = styled.h3`
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #8892b0;
  font-size: 1.1rem;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  
  svg {
    font-size: 1.8rem;
  }

  &:hover {
    color: #64ffda;
    transform: translateY(-3px);
    background: rgba(100, 255, 218, 0.1);
  }
`;

const Contact = React.memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = React.useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = React.useCallback((e) => {
    e.preventDefault();
    console.log(formData);
  }, [formData]);

  const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
  };

  return (
    <StyledContactSection id="contact" ref={ref}>
      <ContactContainer>
        <Title
          {...animationProps}
          transition={{ duration: 0.5 }}
        >
          İletişim
        </Title>
        <ContactInfoContainer
          {...animationProps}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactInfoTitle>İletişim Bilgilerim</ContactInfoTitle>
          <ContactInfoList>
            <ContactInfoItem>
              <FaEnvelope />
              <span>kocagologuzalp@gmail.com</span>
            </ContactInfoItem>
            <ContactInfoItem>
              <FaPhone />
              <span>+90 505 368 90 84</span>
            </ContactInfoItem>
            <ContactInfoItem>
              <FaMapMarkerAlt />
              <span>Balıkesir, Türkiye</span>
            </ContactInfoItem>
          </ContactInfoList>
        </ContactInfoContainer>
        <FormContainer
          {...animationProps}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FormTitle>Benimle iletişime geçmek için lütfen formu doldurunuz</FormTitle>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="name">İsim</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="İsminizi girin"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Email adresinizi girin"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="message">Mesaj</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Mesajınızı girin"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <SubmitButton type="submit">Gönder</SubmitButton>
          </Form>
        </FormContainer>
        <SocialContainer
          {...animationProps}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SocialTitle>Sosyal Medya Hesaplarım</SocialTitle>
          <SocialLinks>
            <SocialLink href="https://github.com/OguzalpKocagoz" target="_blank" rel="noopener noreferrer">
              <FaGithub />
              <span>GitHub</span>
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/oğuzalp-kocagöz-0260b3339" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              <span>LinkedIn</span>
            </SocialLink>
            <SocialLink href="https://twitter.com/KocagozOgu61525" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
              <span>Twitter</span>
            </SocialLink>
            <SocialLink href="https://instagram.com/oguzalp_kocagoz" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
              <span>Instagram</span>
            </SocialLink>
          </SocialLinks>
        </SocialContainer>
      </ContactContainer>
    </StyledContactSection>
  );
});

Contact.displayName = 'Contact';

export default Contact; 