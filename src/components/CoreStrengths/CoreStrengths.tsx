import { motion } from 'framer-motion';

import { Github, CheckCircle, Telescope } from 'lucide-react';
import { blockVariants } from '@src/shared/helper';

import styles from './CoreStrengths.module.scss';

const CoreStrengths = () => {
  return (
    <motion.section
      className={styles.core}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      custom={0.48}
      variants={blockVariants}
    >
      <h2>Core strengths</h2>

      <div className={styles.coreGrid}>
        <div className={styles.coreCard}>
          <h4>
            <Telescope size={16} /> Performance-first
          </h4>
          <p className="para">
            Optimise loading, reduce main-thread work, and deliver snappy UIs on constrained
            networks.
          </p>
        </div>

        <div className={styles.coreCard}>
          <h4>
            <Github size={16} /> Product focus
          </h4>
          <p className="para">
            Ship pragmatic features, iterate on feedback, and balance short-term delivery with
            long-term maintainability.
          </p>
        </div>

        <div className={styles.coreCard}>
          <h4>
            <CheckCircle size={16} /> Collaborative engineering
          </h4>
          <p className="para">
            Work closely with designers and backend teams to craft consistent, reliable UX and APIs.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default CoreStrengths;
