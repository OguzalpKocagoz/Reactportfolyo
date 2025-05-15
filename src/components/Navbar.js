import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background: rgba(15, 35, 75, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 0 15px;
    height: 60px;
  }
`;

const Logo = styled.a`
  color: #64ffda;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #4fa;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #ccd6f6;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #64ffda;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #64ffda;
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #64ffda;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    padding: 6px;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(15, 35, 75, 0.98);
  padding: 1rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  z-index: 999;

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 480px) {
    top: 60px;
    padding: 0.75rem;
  }
`;

const MobileNavLink = styled(NavLink)`
  display: block;
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
  font-size: 1.1rem;

  &:last-child {
    border-bottom: none;
  }

  &:after {
    display: none;
  }

  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    font-size: 1rem;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Mobil menü açıkken scroll'u engelle
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <Nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <Logo href="#home">OK</Logo>
        <NavLinks>
          <NavLink href="#home">Ana Sayfa</NavLink>
          <NavLink href="#about">Hakkımda</NavLink>
          <NavLink href="#education">Eğitim</NavLink>
          <NavLink href="#skills">Yetenekler</NavLink>
          <NavLink href="#projects">Projeler</NavLink>
          <NavLink href="#contact">İletişim</NavLink>
        </NavLinks>
        <MobileMenuButton 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Menüyü aç/kapat"
        >
          {isOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </Nav>

      <MobileMenu
        isOpen={isOpen}
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -20,
          transition: {
            duration: 0.3,
            ease: "easeInOut"
          }
        }}
      >
        <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>
          Ana Sayfa
        </MobileNavLink>
        <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>
          Hakkımda
        </MobileNavLink>
        <MobileNavLink href="#education" onClick={() => setIsOpen(false)}>
          Eğitim
        </MobileNavLink>
        <MobileNavLink href="#skills" onClick={() => setIsOpen(false)}>
          Yetenekler
        </MobileNavLink>
        <MobileNavLink href="#projects" onClick={() => setIsOpen(false)}>
          Projeler
        </MobileNavLink>
        <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
          İletişim
        </MobileNavLink>
      </MobileMenu>
    </>
  );
};

export default Navbar; 