'use client';
import Image from 'next/image';
import styles from './navbar.module.css';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [secaoAtiva, setSecaoAtiva] = useState('inicio');
    useEffect(() => {
  const secoes = document.querySelectorAll("main[id], section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSecaoAtiva(entry.target.id);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );
  secoes.forEach((secao) => observer.observe(secao));
  return () => observer.disconnect();
}, []);
    return(
        <nav className={styles.navbar}>
            <div className={styles.menu}>
                <Image src="/logo-next2.png" alt="Logo" width={220} height={70} />
            </div>
            <button className={styles.menuButton} onClick={() => setMenuAberto(!menuAberto)} aria-label="Abrir menu">
                ☰
            </button>
            <div className={`${styles.links} ${menuAberto ? styles.aberto : ''}`}>
                <a href="#inicio" onClick={() => setMenuAberto(false)} className={secaoAtiva === 'inicio' ? styles.ativo : ''}>Inicio</a>
                <a href="#sobre-nos" onClick={() => setMenuAberto(false)} className={secaoAtiva === 'sobre-nos' ? styles.ativo : ''}>Sobre Nós</a>
                <a href="#vagas-destaque" onClick={() => setMenuAberto(false)} className={secaoAtiva === 'vagas-destaque' ? styles.ativo : ''}>Vagas</a>
                <a href="#whatsapp" onClick={() => setMenuAberto(false)} className={secaoAtiva === 'whatsapp' ? styles.ativo : ''}>Atendimento</a>
            </div>
                       
        </nav>
    )
}