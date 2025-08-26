import { motion } from 'framer-motion';

import { blockVariants } from '@src/shared/helper';

import styles from './TestBlock.module.scss';

const TestBlock = () => {
  return (
    <motion.section
      className={styles.testBlock}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      custom={0.6}
      variants={blockVariants}
    >
      <h2 className="sectionTitle">Test task & availability</h2>
      <p className="para">
        I recently completed a timed frontend test task for another company, which caused a slight
        delay in my reply. If useful, you can review that work here:{' '}
        <a href="https://surf-weather-three.vercel.app/weather" target="_blank" rel="noreferrer">
          Surf Weather — demo
        </a>
        .
      </p>

      <p className="para">
        I`m happily available to complete any test task you require and can walk you through my
        implementation and design choices. Open to remote work or relocation within supported
        regions.
      </p>
    </motion.section>
  );
};

export default TestBlock;
