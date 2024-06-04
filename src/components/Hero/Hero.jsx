import React, { useEffect } from "react";
import Particle from "./Particle";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import Typed from "typed.js";

export const Hero = () => {
  useEffect(() => {
    // Initialize Typed.js instance
    const typed = new Typed(".typing", {
      strings: ["Full Stack Developer", "Competitive Programmer","Backend Developer", "Frontend Developer", "Software Developer" ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    // Clean up Typed.js instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className={styles.container}>
      <Particle />
      <div className={styles.content}>
        <h1 className={styles.greeting}>Hello, my name is</h1>
        <h1 className={styles.title}>Aditya Bharti</h1>
        <p className={styles.description}>
          And I'm a <span className={`${styles.typing} typing`}></span>
        </p>
        <a href="https://www.linkedin.com/in/aditya-bharti-23890b231/" className={styles.contactBtn}>
          Hire me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}  // Ensure this points to your new image path
        alt="Hero image of Aditya Bharti"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
