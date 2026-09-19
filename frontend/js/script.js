/**
 * CUIDADOS PALIATIVOS - UPA NORTE
 * Interatividade, animações bidirecionais suaves via GSAP + ScrollTrigger
 * Otimizado para estabilidade de texto e renderização fluida no mobile (sem glitches)
 */

(function () {
  'use strict';

  // Configuração global do GSAP para estabilidade e aceleração de GPU
  if (typeof gsap !== 'undefined') {
    gsap.config({
      force3D: true, // Garante renderização de hardware estável sem text snapping
    });
  }

  // --- 1. BOTÃO VOLTAR AO TOPO ---
  const backToTopBtn = document.getElementById('btnBackToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  // --- 2. ANIMAÇÕES GSAP + SCROLLTRIGGER (ESTÁVEIS E BIDIRECIONAIS) ---
  function initGSAPAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Respeita preferência do usuário por redução de movimento
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    // A. Top Nav (Header Institucional)
    gsap.fromTo(
      '.top-nav',
      { y: -25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
    );

    // B. Hero Section (Abertura com re-trigger ao voltar ao início)
    gsap.fromTo(
      '.hero-section',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top 95%',
          end: 'bottom top',
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    // C. Frase em Destaque (Citação de Impacto)
    const quoteSection = document.querySelector('.quote-section');
    if (quoteSection) {
      gsap.fromTo(
        '.quote-card',
        { opacity: 0, y: 22, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: quoteSection,
            start: 'top 92%',
            end: 'bottom top',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    // D. Seção 3: Cartão "O que são Cuidados Paliativos?"
    const sectionOQueSao = document.querySelector('section[aria-labelledby="heading-o-que-sao"] .card');
    if (sectionOQueSao) {
      gsap.fromTo(
        sectionOQueSao,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionOQueSao,
            start: 'top 92%',
            end: 'bottom top',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    // E. Seção 4: Condição Clínica e Lista de Perguntas Médicas
    // Anima a lista em cascata limpa sem conflitos de transform no pai
    const sectionClinica = document.querySelector('section[aria-labelledby="heading-condicao-clinica"] .card');
    if (sectionClinica) {
      gsap.fromTo(
        sectionClinica,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionClinica,
            start: 'top 92%',
            end: 'bottom top',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    if (document.querySelector('.questions-list')) {
      gsap.fromTo(
        '.question-item',
        { opacity: 0, x: -14 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.questions-list',
            start: 'top 90%',
            end: 'bottom top',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    // F. Seção 5: Guia Prático de Comunicação
    const sectionComunicacao = document.querySelector('section[aria-labelledby="heading-guia-comunicacao"] .card');
    if (sectionComunicacao) {
      gsap.fromTo(
        sectionComunicacao,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionComunicacao,
            start: 'top 92%',
            end: 'bottom top',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    if (document.querySelector('.dialogue-grid')) {
      gsap.fromTo(
        '.dialogue-card',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.dialogue-grid',
            start: 'top 90%',
            end: 'bottom top',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    // G. Bloco de Destaque "Importante"
    const supportNotice = document.querySelector('.support-notice-card');
    if (supportNotice) {
      gsap.fromTo(
        supportNotice,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: supportNotice,
            start: 'top 92%',
            end: 'bottom top',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }

    // H. Containers de Vídeo (16:9)
    gsap.utils.toArray('.video-wrapper').forEach((video) => {
      gsap.fromTo(
        video,
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: video,
            start: 'top 92%',
            end: 'bottom top',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });

    // I. Rodapé
    const footer = document.querySelector('.site-footer');
    if (footer) {
      gsap.fromTo(
        '.site-footer .container > *',
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.07,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top 92%',
            end: 'bottom top',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }
  }

  // Inicializa após carregamento do DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGSAPAnimations);
  } else {
    initGSAPAnimations();
  }
})();
