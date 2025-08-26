import { motion } from 'framer-motion';

import { blockVariants } from '@src/shared/helper';

import styles from './WhyJoin.module.scss';

const WhyJoin = () => {
  return (
    <motion.section
      className={styles.whyJoin}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      custom={0.12}
      variants={blockVariants}
    >
      <h2 className="sectionTitle">Why I want to join ClipMyHorse.TV</h2>
      <p className="para">
        Your product-first mission to deliver high-quality streaming experiences is exactly the kind
        of environment I want to contribute to. I`m excited about the opportunity to work on
        live/VoD flows, improve player UX and performance, and help deliver a delightful
        cross-device experience for viewers.
      </p>

      <p className="para">
        I`m motivated to deepen my knowledge in media workflows (ad-server integration, timed
        metadata, low-latency), enhance automated frontend testing practices, and bring my frontend
        performance focus to improve real-user metrics.
      </p>
    </motion.section>
  );
};

export default WhyJoin;
