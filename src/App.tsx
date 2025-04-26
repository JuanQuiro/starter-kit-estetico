import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "./App.module.scss";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const stackListRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        duration: 1.2,
        y: 80,
        opacity: 0,
        ease: "power3.out",
        delay: 0.2,
      });

      if (stackListRef.current) {
        gsap.from(stackListRef.current.children, {
          duration: 0.8,
          y: 30,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.6,
        });
      }

      gsap.from(placeholderRef.current, {
        duration: 1,
        scale: 0.95,
        opacity: 0,
        ease: "back.out(1.4)",
        delay: 1.0,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles.appContainer}>
      <section className={styles.heroSection}>
        <h1 ref={headlineRef} className={styles.headline}>
          Stack Estatic Kit
        </h1>

        <p className={styles.subheadline}>
          El punto de partida ideal para crear experiencias web inmersivas,
          estéticas y de alto rendimiento. Combinando las mejores herramientas
          modernas.
        </p>

        <div ref={stackListRef} className={styles.stackList}>
          <span className={styles.stackItem}>Vite</span>
          <span className={styles.stackItem}>React</span>
          <span className={styles.stackItem}>Three.js</span>
          <span className={styles.stackItem}>R3F</span>
          <span className={styles.stackItem}>GSAP</span>
          <span className={styles.stackItem}>Sass</span>
          <span className={styles.stackItem}>Modules</span>
          <span className={styles.stackItem}>Million</span>
        </div>
      </section>

      <div ref={placeholderRef} className={styles.r3fPlaceholder}>
        <span>✨ Tu Experiencia 3D Comenzará Aquí ✨</span>
      </div>

      <div className={styles.piePagina}>
        Creado Por equipo <a href="https://ember-drago.tech/es">Ember Drago</a>
      </div>
    </div>
  );
}

export default App;
