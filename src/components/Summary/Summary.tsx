import { motion } from 'framer-motion';

import { blockVariants } from '@src/shared/helper';

import styles from './Summary.module.scss';

const Summary = () => {
  return (
    <motion.section
      className={styles.summary}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      custom={0}
      variants={blockVariants}
    >
      <div className={styles.summaryLeft}>
        <h1 className={styles.h1}>Web Developer — ClipMyHorse.TV</h1>
        <p className={styles.lead}>
          I`m a frontend engineer with <strong>5+ years</strong> experience building web products
          with React, TypeScript and modern frontend toolchains. I focus on maintainable, performant
          interfaces and product delivery.
        </p>

        <div className={styles.badges}>
          <span className={styles.badge}>React</span>
          <span className={styles.badge}>TypeScript</span>
          <span className={styles.badge}>Next.js</span>
          <span className={styles.badge}>Redux · Zustand</span>
        </div>

        <div className={styles.cta}>
          <a className={styles.primary} href="mailto:ad13.other@gmail.com">
            Contact me
          </a>
        </div>
      </div>

      <div className={styles.summaryRight}>
        <div className={styles.smallCard}>
          <div>
            <strong>Location:</strong> Kleve, Germany (EU work-right)
          </div>
          <div>
            <strong>Languages:</strong> English C1 · German B2 (improving)
          </div>
          <div>
            <strong>Availability:</strong> Immediately
          </div>
          <div>
            <strong>Salary:</strong> 50-55k € / year
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Summary;
