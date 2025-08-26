import { motion } from 'framer-motion';

import { CheckCircle, Cpu, Slack } from 'lucide-react';
import { blockVariants } from '@src/shared/helper';

import styles from './WhyFit.module.scss';

const WhyFit = () => {
  return (
    <motion.section
      className={styles.goodFit}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      custom={0.24}
      variants={blockVariants}
    >
      <h2>Why I`m a good fit</h2>

      <div className={styles.goodFitGrid}>
        <article className={styles.card}>
          <h3>
            <CheckCircle size={18} /> Product & delivery
          </h3>
          <p className="para">
            At Empeek I contributed to large product projects, collaborating with product managers,
            designers and backend engineers. I`m familiar with the full delivery loop — from concept
            to go-live — and focus on building maintainable, testable features.
          </p>
        </article>

        <article className={styles.card}>
          <h3>
            <Slack size={18} /> Remote & cross-functional
          </h3>
          <p className="para">
            Several years of remote work taught me clear async communication, reliable delivery and
            effective collaboration across timezones — a good match for your remote-first setup.
          </p>
        </article>

        <article className={styles.card}>
          <h3>
            <Cpu size={18} /> Quality & maintainability
          </h3>
          <p className="para">
            I prioritise clean architecture, readable code and performance optimisations. I adopt
            code review and CI practices to continuously improve product quality.
          </p>
        </article>
      </div>
    </motion.section>
  );
};

export default WhyFit;
